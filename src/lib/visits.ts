export type VisitRecord = {
  path: string;
  country: string | null;
  region: string | null;
  city: string | null;
  referrer: string | null;
  user_agent: string | null;
  timezone: string | null;
  screen_width: number | null;
  screen_height: number | null;
};

export function isVisitTrackingConfigured(): boolean {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export async function storeVisit(record: VisitRecord): Promise<boolean> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return false;
  }

  const response = await fetch(`${url}/rest/v1/visits`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(record),
  });

  return response.ok;
}

export function isBotUserAgent(userAgent: string | null): boolean {
  if (!userAgent) {
    return false;
  }

  return /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|bingpreview|headless/i.test(
    userAgent,
  );
}

export function getGeoFromRequest(request: Request): {
  country: string | null;
  region: string | null;
  city: string | null;
} {
  return {
    country: request.headers.get("x-vercel-ip-country"),
    region: request.headers.get("x-vercel-ip-country-region"),
    city: request.headers.get("x-vercel-ip-city"),
  };
}
