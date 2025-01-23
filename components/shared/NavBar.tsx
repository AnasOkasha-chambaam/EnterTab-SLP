import Link from "next/link";

// import { AppSidebar } from "@/components/app-sidebar";

import { ThemeToggle } from "../custom-ui/theme-toggle";
import { Separator } from "../ui/separator";
import LogoImg from "./LogoImg";
import NavigationButtons from "./NavBar/NavigationButtons";
import NavSheet from "./NavBar/NavSheet";

export function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-base shadow-md py-4 px-7 flex justify-between items-center backdrop-blur-lg">
      <Link href="/">
        <LogoImg />
      </Link>
      <div className="flex items-center space-x-4 max-sm:ml-9">
        {/* Hidden in small screen */}
        <NavigationButtons className="max-sm:hidden ml-3" />
        <Separator orientation="vertical" className="max-sm:hidden h-9" />
        {/* Always shown */}
        <ThemeToggle />
        {/* Hidden in wide screen */}
        <Separator orientation="vertical" className="sm:hidden h-9" />
        <NavSheet />
      </div>
    </div>
  );
}
