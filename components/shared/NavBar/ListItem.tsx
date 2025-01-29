import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

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
export default ListItem;
