"use client";

import type { MouseEvent } from "react";

type SectionLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionLink({ href, className, children }: SectionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
