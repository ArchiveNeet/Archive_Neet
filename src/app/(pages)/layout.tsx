import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import AppSidebarMobile from "@/components/app-sidebar-mobile"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <AppSidebar />
      </div>
      <main className="overflow-y-scroll min-h-screen w-full">
        {/* Mobile Sidebar - hidden on desktop */}
        <div className="block md:hidden z-10 sticky top-0 left-0">
          <AppSidebarMobile />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}