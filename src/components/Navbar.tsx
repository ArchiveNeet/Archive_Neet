import Image from "next/image"
import Logo from "~/Logo.svg"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className="w-full h-fit flex justify-between bg-background shadow-xl p-2">
            <Link href={"/"}>


                <div className="h-full flex items-center justify-center"><Image src={Logo} width={100} height={50} alt="icon" /></div>
            </Link>


            <Sheet>
                <SheetTrigger>
                    <CiShoppingCart className="size-12  text-accent-foreground " />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}