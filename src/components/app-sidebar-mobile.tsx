import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FiAlignJustify } from "react-icons/fi";
import FullLogo from "~/FULL-LOGO.png"
import Image from "next/image"
import Link from "next/link"

export default function AppSidebarMobile() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger><FiAlignJustify className="size-12" /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <Link href={"/"} className="flex items-center">
                        <Image src={FullLogo} alt="img" width={100}/>
                    </Link>

                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={"/Projects"} className="w-full">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/Blog"} className="w-full">Blog</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
