"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      isButton?: boolean;
      isPrimary?: boolean;
    }[];
    isButton?: boolean;
  }[];
}) {
  return (
    <SidebarProvider>
      <SidebarGroup>
        <SidebarGroupLabel></SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) =>
            item.isButton ? (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Button className="mt-3">
                    <>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ) : (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) =>
                        subItem.isButton ? (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Button
                                variant={"outline"}
                                className="mt-3 w-full"
                              >
                                <span>{subItem.title}</span>
                              </Button>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ) : (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              className={cn({
                                "text-primary": subItem.isPrimary,
                              })}
                              asChild
                            >
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      )}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )
          )}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarProvider>
  );
}
