import Image from "next/image"
import Logo from "~/icon.png"
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="w-full h-fit flex items-center justify-center backdrop-blur-2xl shadow-lg p-2 bg-accent/30">
      {/* Desktop Layout */}
      <div className="hidden md:flex md:w-2/3 w-full h-fit justify-between">
        {/* Left side - Logo and title */}
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <Image src={Logo} width={50} height={50} alt="icon" />
          </Link>
          <Link href={"/"} className="text-stone-600 hover:text-purple-100 text-lg font-medium">
            Archive_Neet
          </Link>
        </div>
        
        {/* Center - Navigation links */}
        <div className="flex items-center gap-6 text-lg">
          <Link href={"/Works"} className="hover:text-purple-100 text-stone-600">
            Works
          </Link>
          <Link href={"https://substack.com/@archiveneet/posts"} className="hover:text-purple-100 text-stone-600">
            Blog
          </Link>
          <Link href={"/Catalog"} className="hover:text-purple-100 text-stone-600">
            Catalog
          </Link>
        </div>
        
        {/* Right side - Social icons */}
        <div className="flex items-center gap-4 text-lg">
          <Link href="https://x.com/ArchiveNeet" className="hover:text-purple-100 text-stone-600">
            <FaXTwitter className="size-6" />
          </Link>
          <Link href="https://github.com/yourusername" className="hover:text-purple-100 text-stone-600">
            <FaGithub className="size-6" />
          </Link>
          <Link href="https://www.youtube.com/@ArchiveNeet" className="hover:text-purple-100 text-stone-600">
            <FaYoutube className="size-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full flex items-center justify-between px-4">

        {/* Centered Logo and Title */}
        <div className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
          <Link href={"/"}>
            <Image src={Logo} width={40} height={40} alt="icon" />
          </Link>
          <Link href={"/"} className="text-stone-600 hover:text-purple-100 text-base font-medium">
            Archive_Neet
          </Link>
        </div>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-stone-600 hover:text-purple-100">
            <Menu className="size-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            {/* Page Links */}
            <DropdownMenuItem asChild>
              <Link href="/catalog" className="w-full">
                Works
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://substack.com/@archiveneet/posts" className="w-full">
                Blog
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/projects" className="w-full">
                Catalog
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            {/* Social Links */}
            <DropdownMenuItem asChild>
              <Link href="https://x.com/ArchiveNeet" className="w-full flex items-center gap-2">
                <FaXTwitter className="size-4" />
                Twitter/X
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://github.com/yourusername" className="w-full flex items-center gap-2">
                <FaGithub className="size-4" />
                GitHub
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://www.youtube.com/@ArchiveNeet" className="w-full flex items-center gap-2">
                <FaYoutube className="size-4" />
                YouTube
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Empty space for balance */}
        <div className="w-6"></div>
      </div>
    </div>
  )
}