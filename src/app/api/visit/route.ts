import { NextResponse } from "next/server";
import {
  getGeoFromRequest,
  isBotUserAgent,
  isVisitTrackingConfigured,
  storeVisit,
} from "@/lib/visits";

type VisitPayload = {
  path?: string;
  timezone?: string;
  screenWidth?: number;
  screenHeight?: number;
};

function sanitizePath(path: string): string {
  const trimmed = path.trim().slice(0, 2048);
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function sanitizeOptionalText(value: string | undefined, maxLength: number): string | null {
  if (!value?.trim()) {
    return null;
  }

  return value.trim().slice(0, maxLength);
}

function sanitizeDimension(value: number | undefined): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  const rounded = Math.round(value);
  if (rounded <= 0 || rounded > 10000) {
    return null;
  }

  return rounded;
}

export async function POST(request: Request) {
  if (!isVisitTrackingConfigured()) {
    return new NextResponse(null, { status: 204 });
  }

  const userAgent = request.headers.get("user-agent");

  if (isBotUserAgent(userAgent)) {
    return new NextResponse(null, { status: 204 });
  }

  let body: VisitPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.path?.trim()) {
    return NextResponse.json({ error: "Path is required." }, { status: 400 });
  }

  const geo = getGeoFromRequest(request);
  const referrer = request.headers.get("referer");

  const stored = await storeVisit({
    path: sanitizePath(body.path),
    country: geo.country,
    region: geo.region,
    city: geo.city,
    referrer: referrer ? referrer.slice(0, 2048) : null,
    user_agent: userAgent ? userAgent.slice(0, 512) : null,
    timezone: sanitizeOptionalText(body.timezone, 64),
    screen_width: sanitizeDimension(body.screenWidth),
    screen_height: sanitizeDimension(body.screenHeight),
  });

  if (!stored) {
    return NextResponse.json(
      { error: "Failed to store visit." },
      { status: 500 },
    );
  }

  return new NextResponse(null, { status: 204 });
}
