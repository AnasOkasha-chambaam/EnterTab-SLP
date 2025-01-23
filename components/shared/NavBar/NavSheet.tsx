"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowBigUpDashIcon,
  Code2Icon,
  CodeIcon,
  ExternalLinkIcon,
  MenuIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import LogoImg from "../LogoImg";
import { NavMain } from "./NavMain";

const data = {
  navMain: [
    {
      title: "Getting started",
      url: "#",
      icon: ArrowBigUpDashIcon,
      isActive: true,
      items: [
        {
          title: "Build A Website",
          url: "https://www.entertab.net/en/buildWebsite/create",
          isPrimary: true,
        },
        {
          title: "About Us",
          url: "https://www.entertab.net/en",
        },
        {
          title: "Payments",
          url: "https://www.entertab.net/en/site/payments",
        },
      ],
    },
    {
      title: "Works",
      url: "#",
      icon: Code2Icon,
      items: [
        {
          title: "Saudi Arabian Cultural Mission",
          url: "https://www.entertab.net/en/portfolio/1",
        },
        {
          title: "AUTOVROOM",
          url: "https://www.entertab.net/en/portfolio/2",
        },
        {
          title: "Octave Studio",
          url: "https://www.entertab.net/en/portfolio/3",
        },
        {
          title: "View all works",
          url: "https://www.entertab.net/en/portfolio/index",
          icon: ExternalLinkIcon,
          isButton: true,
        },
      ],
    },
    {
      title: "Apply for A Website",
      url: "https://www.entertab.net/en/buildWebsite/create",
      icon: CodeIcon,
      isButton: true,
    },
  ],
};

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="sm:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-9">
        <SheetHeader>
          <SheetTitle>
            <LogoImg />
          </SheetTitle>
          <SheetDescription>
            This is a demo site for Entertab. It is a web development and design
            agency.
          </SheetDescription>
          <NavMain items={data.navMain} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
