import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import FullLogo from "~/FULL-LOGO.png"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"



export function AppSidebar() {
    return (
        <Sidebar >
            <SidebarHeader >
                <Link href={"/"} className="flex items-center">
                    <Image src={FullLogo} alt="img" />
                </Link>
                <Separator />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <Link href={"/Projects"} className="w-full">Projects</Link>
                <Link href={"/Blog"} className="w-full">Blog</Link>

                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter >
                                <Separator />

            </SidebarFooter>
        </Sidebar>
    )
}