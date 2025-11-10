import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  ClipboardCheck,
  BookOpen,
  FlaskConical,
  Calculator,
  Brain,
  CheckCircle,
} from "lucide-react";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Pre-Experiment", url: "/pre-experiment", icon: ClipboardCheck },
  { title: "Introduction", url: "/introduction", icon: BookOpen },
  { title: "Experiment", url: "/experiment", icon: FlaskConical },
  { title: "Calculation", url: "/calculation", icon: Calculator },
  { title: "Quiz", url: "/quiz", icon: Brain },
  { title: "Conclusion", url: "/conclusion", icon: CheckCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/40 backdrop-blur-md bg-background/95">
      <SidebarContent className="py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs font-bold text-muted-foreground tracking-widest uppercase mb-1">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu className="space-y-2 px-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary/20 text-primary font-semibold border-l-4 border-primary shadow-md rounded-r-lg transition-all duration-200"
                          : "hover:bg-accent/60 hover:text-accent-foreground hover:shadow-sm border-l-4 border-transparent hover:border-accent/50 rounded-r-lg transition-all duration-200"
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
