import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  ArrowBigUpDashIcon,
  CodeIcon,
  CreditCardIcon,
  ExternalLinkIcon,
  FileCode2Icon,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ListItem from "./ListItem";

const iconsClassName = "inline-block size-4 mr-1" as const;

const WORKS = [
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

const NAV_ITEMS: (
  | {
      title: string;
      href?: undefined;
      icon?: LucideIcon;
      custom?: undefined;
      items: (
        | {
            title: string;
            href: string;
            description: string;
            image?: string;
            icon?: LucideIcon;
            custom?: undefined;
          }
        | {
            title: string;
            href?: undefined;
            description?: undefined;
            image?: undefined;
            icon?: undefined;
            custom: React.ReactNode;
          }
      )[];
    }
  | {
      title: string;
      icon?: LucideIcon;
      href?: undefined;
      custom: React.ReactNode;
      items?: undefined;
    }
  | {
      title: string;
      icon?: LucideIcon;
      href: string;
      custom?: undefined;
      items?: undefined;
    }
)[] = [
  {
    title: "Getting started",
    custom: (
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

              <div className="mb-2 mt-4 text-lg font-medium">EnterTab</div>
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
    ),
  },
  {
    title: "Works",
    items: [
      ...WORKS.map((work) => ({
        title: work.title,
        href: work.href,
        description: work.description,
        image: work.image,
      })),
      {
        title: "View All Works",
        custom: (
          <ListItem href="https://www.entertab.net/en/portfolio/index" title="">
            <span className="flex items-center justify-center">
              <ExternalLinkIcon className={iconsClassName} /> View all works
            </span>
          </ListItem>
        ),
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        title: "Make a Payment",
        href: "https://www.entertab.net/en/site/payments",
        description: "Make a payment for services.",
      },
      {
        title: "Payment History",
        href: "https://www.entertab.net/en/site/payments",
        description: "View your payment history.",
      },
    ],
  },
  {
    title: "About Us",
    custom: (
      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[450px] md:grid-cols-1">
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
          href="https://www.entertab.net/en/site/contact"
          title={
            <p className="flex items-center">
              <ArrowBigUpDashIcon className={iconsClassName} /> Contact Us
            </p>
          }
        >
          Get in touch with EnterTab.
        </ListItem>
        <ListItem
          href="https://www.entertab.net/en/site/faq"
          title={
            <p className="flex items-center">
              <ArrowBigUpDashIcon className={iconsClassName} /> FAQ
            </p>
          }
        >
          Frequently asked questions.
        </ListItem>
      </ul>
    ),
  },
  {
    title: "Apply for A Website",
    href: "https://www.entertab.net/en/buildWebsite/create",
    icon: CodeIcon,
  },
];

const NavigationButtons = ({ className }: { className?: string }) => {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        {NAV_ITEMS.map((navItem, index) => (
          <NavigationMenuItem key={index}>
            {navItem.items || navItem.custom ? (
              <>
                <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {navItem.custom
                    ? navItem.custom
                    : navItem.items && (
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px]">
                          {navItem.items.map((item, subIndex) =>
                            item.custom ? (
                              <React.Fragment key={subIndex}>
                                {item.custom}
                              </React.Fragment>
                            ) : (
                              <ListItem
                                key={subIndex}
                                href={item.href}
                                title={
                                  item.icon ? (
                                    <p className="flex items-center">
                                      <item.icon className={iconsClassName} />{" "}
                                      {item.title}
                                    </p>
                                  ) : (
                                    item.title
                                  )
                                }
                                image={item.image}
                              >
                                {item.description}
                              </ListItem>
                            )
                          )}
                        </ul>
                      )}
                </NavigationMenuContent>
              </>
            ) : (
              navItem.href && (
                <Link href={navItem.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: buttonVariants({
                        variant: "default",
                        className: "hover:!text-primary-foreground",
                      }),
                    })}
                  >
                    {navItem.icon && (
                      <navItem.icon className={iconsClassName} />
                    )}
                    {navItem.title}
                  </NavigationMenuLink>
                </Link>
              )
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationButtons;
