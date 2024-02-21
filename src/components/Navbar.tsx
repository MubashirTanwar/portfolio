"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0  max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/app-dev">App Development</HoveredLink>
            <HoveredLink href="/uiux">UI/UX</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/projects"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="My Projects"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
