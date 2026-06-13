"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo(0, 0);
    return;
  }

  const id = hash.replace("#", "");
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  });
}

export function NavigationTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      const { pathname: windowPath, search, hash } = window.location;
      const target = `${windowPath}${search}${hash}`;

      if (windowPath !== pathname) {
        router.push(target);
        return;
      }

      scrollToHash(hash);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [pathname, router]);

  useEffect(() => {
    scrollToHash(window.location.hash);
  }, [pathname]);

  return <div key={pathname}>{children}</div>;
}
