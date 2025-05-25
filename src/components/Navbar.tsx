import Image from "next/image"
import Logo from "~/Logo.svg"
import Link from "next/link";
export default function Navbar() {
    return (
        <div className="w-full h-fit flex justify-between bg-background shadow-xl p-2">
            <Link href={"/"}>


                <div className="h-full flex items-center justify-center"><Image src={Logo} width={100} height={50} alt="icon" /></div>
            </Link>



        </div>
    )
}