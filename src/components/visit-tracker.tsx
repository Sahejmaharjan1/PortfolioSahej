"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function trackVisit(pathname: string) {
  const key = `visit:${pathname}`;

  if (sessionStorage.getItem(key)) {
    return;
  }

  sessionStorage.setItem(key, "1");

  const payload = {
    path: `${pathname}${window.location.search}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };

  fetch("/api/visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackVisit(pathname);
  }, [pathname]);

  return null;
}
