// components/GuardWrapper.tsx
"use client";

import { RouteGuard } from "@/components";
import { usePathname } from "next/navigation";

export function GuardWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const publicRoutes = ["/projects", "/projects/las-alamedas", "/projects/embryogen"];
  const isPublic = publicRoutes.some((route) => (pathname || "").startsWith(route));

  if (isPublic) return <>{children}</>;

  return <RouteGuard>{children}</RouteGuard>;
}