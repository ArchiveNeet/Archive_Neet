import Image from "next/image";
import Link from "next/link";
interface ProductProps {
  name: string;
  image_url: string;
  description?: string;
  link: string
}

export default function Products({ name, image_url, description = "Short description that will be very brief", link }: ProductProps) {
  return (
    <Link href={link}>
      <div className="cursor-pointer rounded-lg w-72 flex flex-col   transition-shadow">
        {/* Image Container */}
        <div className="relative w-full h-48 ">
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="p-4  flex-1 flex flex-col justify-center text-center">
          <h1 className="text-lg font-semibold mb-2 ">
            {name}
          </h1>
          <p className="text-sm  leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}