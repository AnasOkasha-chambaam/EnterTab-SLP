import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  ArrowBigUpDashIcon,
  CodeIcon,
  CreditCardIcon,
  ExternalLinkIcon,
  FileCode2Icon,
} from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

const iconsClassName = "inline-block size-4 mr-1" as const;

const WORKS: {
  title: string;
  href: string;
  description: string;
  image?: string;
}[] = [
  {
    title: "Saudi Arabian Cultural Mission",
    href: "https://www.entertab.net/en/portfolio/1",
    description:
      "It teaches nearly 100,000 Saudi students in American universities.",
    image: "https://www.entertab.net/img/port/thumb/20170503094437.jpg",
  },
  {
    title: "AUTOVROOM",
    href: "https://www.entertab.net/en/portfolio/2",
    description:
      "Bringing recognized brands of quality and service in an innovative way.",
    image: "https://www.entertab.net/img/port/thumb/20170503073927.jpg",
  },
  {
    title: "Octave Studio",
    href: "https://www.entertab.net/en/portfolio/3",
    description: "Provides high-quality professional audio services.",
    image: "https://www.entertab.net/img/port/thumb/20170503095535.jpg",
  },
];

const NavigationButtons = ({ className }: { className?: string }) => {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[450px] md:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 max-y-md-hidden">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    {/* <LogoImg /> */}
                    <Image
                      src={`https://www.entertab.net/img/favicon.ico`}
                      className="mx-auto"
                      alt="favicon"
                      width={150}
                      height={120}
                    />

                    <div className="mb-2 mt-4 text-lg font-medium">
                      EnterTab
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      For websites, web apps, and more.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="https://www.entertab.net/en/buildWebsite/create"
                title={
                  <p className="flex items-center text-primary ">
                    <FileCode2Icon className={iconsClassName} /> Build A Website
                  </p>
                }
              >
                Apply for a website building{" "}
              </ListItem>
              <ListItem
                href="https://www.entertab.net/en"
                title={
                  <p className="flex items-center">
                    <ArrowBigUpDashIcon className={iconsClassName} /> About Us
                  </p>
                }
              >
                Learn more about EnterTab.
              </ListItem>
              <ListItem
                href="https://www.entertab.net/en/site/payments"
                title={
                  <p className="flex items-center">
                    <CreditCardIcon className={iconsClassName} /> Payments
                  </p>
                }
              >
                Make a payment for services.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Works</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px] ">
              {WORKS.map((workExample) => (
                <ListItem
                  key={workExample.title}
                  title={workExample.title}
                  href={workExample.href}
                  image={workExample.image}
                >
                  {workExample.description}
                </ListItem>
              ))}
              <ListItem
                href="https://www.entertab.net/en/portfolio/index"
                title=""
              >
                <span className="flex items-center justify-center">
                  <ExternalLinkIcon className={iconsClassName} /> View all works
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://www.entertab.net/en/buildWebsite/create"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: buttonVariants({
                  variant: "default",
                  className: "hover:!text-primary-foreground",
                }),
              })}
            >
              <CodeIcon className={iconsClassName} />
              Apply for A Website
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationButtons;

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  Omit<React.ComponentPropsWithoutRef<"a">, "title"> & {
    title: React.ReactNode;
    image?: string;
  }
>(({ className, title, children, image, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {!image && (
            <>
              {" "}
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </>
          )}
          {!!image && (
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-20">
                <Image
                  src={image}
                  alt="Work Example"
                  width={80}
                  height={60}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="text-sm font-medium leading-none text-primary">
                  {title}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </div>
            </div>
          )}
        </a>
      </NavigationMenuLink>

      {!!image && <Separator className="mt-3" />}
    </li>
  );
});
ListItem.displayName = "ListItem";
