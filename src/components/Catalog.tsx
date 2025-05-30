import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  name: string;
  image_url: string;
  link: string;
}

export default function Products({ name, image_url, link }: ProductProps) {
  return (
    
    <Link href={link}>
      <div className="cursor-pointer w-72 flex flex-col transition-all duration-300 rounded-xl border border-1 group overflow-hidden hover:border-purple-200 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden ">
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110 "
          />
        </div>
        
      </div>
        {/* Content Container */}
        <div className="p-4 flex-1 flex flex-col justify-center text-center  rounded-b-xl">
          <h1 className="text-lg font-semibold mb-2">
            {name}
          </h1>
        </div>
    </Link>
    
  );
}