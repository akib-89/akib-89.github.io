"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DesktopMenubar } from "./desktop-nav";
import { MobileMenubar } from "./mobile-nav";
  

export function MenubarComponent() {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        isDesktop ? (
            <DesktopMenubar />
        ) : (
            <MobileMenubar />
        )
    );
}