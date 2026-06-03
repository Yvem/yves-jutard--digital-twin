import type * as React from "react";
import { MessagesSquare } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThreadList } from "@/components/assistant-ui/thread-list";

export function ThreadListSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="aui-sidebar-header mb-2 border-b">
        <div className="aui-sidebar-header-content flex items-center justify-between">
          <SidebarMenu>
            <SidebarMenuItemⳇYves />
          </SidebarMenu>
        </div>
      </SidebarHeader>
      <SidebarContent className="aui-sidebar-content px-2">
        <ThreadList />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="aui-sidebar-footer border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a
                href="https://github.com/Yvem/yves-jutard--digital-twin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aui-sidebar-footer-icon-wrapper bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GitHubIcon className="aui-sidebar-footer-icon size-4" />
                </div>
                <div className="aui-sidebar-footer-heading flex flex-col gap-0.5 leading-none">
                  <span className="aui-sidebar-footer-title font-semibold">GitHub</span>
                  <span>View Source</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function SidebarMenuItemⳇYves() {
  return (
    <SidebarMenuItem>
      <div style={{ textAlign: "center" }}>
        <h1>Yves Jutard</h1>
        <h2>
          <img
            src="https://www.gravatar.com/avatar/1bd795a4b64fe6263eb7eec45fd120745490e4a62f54033a304b910d605e6f1d?s=256"
            style={{ borderRadius: "50%", display: "inline-block" }}
            width="150"
          />
        </h2>
        <h3>Human, Earthling, Software Engineer</h3>
      </div>
    </SidebarMenuItem>
  );
}

function SidebarMenuItemⳇOriginal() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
        <a href="https://assistant-ui.com" target="_blank" rel="noopener noreferrer">
          <div className="aui-sidebar-header-icon-wrapper bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <MessagesSquare className="aui-sidebar-header-icon size-4" />
          </div>
          <div className="aui-sidebar-header-heading me-6 flex flex-col gap-0.5 leading-none">
            <span className="aui-sidebar-header-title font-semibold">assistant-ui</span>
          </div>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
