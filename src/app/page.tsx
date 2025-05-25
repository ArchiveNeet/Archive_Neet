
import Logo from "~/Logo.svg";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { FaYoutube } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";

import { RiTwitterXLine } from "react-icons/ri";
// import Posts from "@/components/Posts";
export default function Page() {

  return (
    <main className="w-full min-h-full flex flex-col items-center justify-center px-4 space-y-6 overflow-hidden">
      {/* Centered Logo */}
      <Image src={Logo} alt="logo" />

      {/* Social Icons with vertical separators */}
      <div className="flex items-center space-x-4">
        <Link href="/catalog">
          <CiShoppingBasket className="size-6 hover:text-green-400" />
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <Link href="https://www.youtube.com/@ArchiveNeet">
          <FaYoutube className="size-6 hover:text-red-600" />
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <Link href="https://x.com/ArchiveNeet">
          <RiTwitterXLine className="size-6 hover:text-gray-600" />
        </Link>
      </div>

      {/* <section className="w-full h-full flex flex-col items-center justify-center " id="content">
        <div className="max-w-7xl md:w-full h-full flex flex-col gap-6">
          <h1 className="text-2xl font-bold ">Seasonal Collections</h1>
          <Carousel>
            <CarouselContent className="-ml-4">
             <CarouselItem className="min-w-sm md:max-w-md max-w-sm md:min-w-md">
                <Posts
                  name="Winter Collection"
                  image_url="/Logo.svg"

                />
              </CarouselItem> 
             
            </CarouselContent>
          </Carousel>
          <h1 className="text-2xl font-bold ">Projects</h1>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              
            </CarouselContent>
          </Carousel>
          <h1 className="text-2xl font-bold">Blog posts</h1>
          <Carousel>
            <CarouselContent className="-ml-4">
              
            </CarouselContent>
          </Carousel>
        </div>
      </section> */}
    </main>
  );
}