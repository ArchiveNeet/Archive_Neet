import FullLogo from "~/FULL-LOGO.png"
import Image from "next/image"
import Link from "next/link"


export default function NotFound() {
    return(
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
                                <Link href={"/"} className="flex flex-col items-center">
                        <Image src={FullLogo} alt="img" />
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                    </Link>

        </main>
    )
}