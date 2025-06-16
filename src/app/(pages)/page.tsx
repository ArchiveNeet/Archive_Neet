import Image from "next/image";
import FAVICON from "@/favicon.ico";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-row justify-between items-start px-2 overflow-hidden">
      <section className="w-full md:w-2/3 flex flex-col items-center overflow-scroll max-h-screen no-scrollbar ">


        <Image src={FAVICON} alt="img" className="" />
        <div className="max-w-2xl">

        <h1 className="text-sm italic font-bold mb-4">About</h1>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and  typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of  type and scrambled it to make a type 
          specimen book. It has survived not  only five centuries, but also the leap into 
          electronic typesetting,  remaining essentially unchanged. It was popularised in
          the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker  including 
          versions of Lorem Ipsum.
        </p>
                <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and  typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of  type and scrambled it to make a type 
          specimen book. It has survived not  only five centuries, but also the leap into 
          electronic typesetting,  remaining essentially unchanged. It was popularised in
          the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker  including 
          versions of Lorem Ipsum.
        </p>
                <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and  typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of  type and scrambled it to make a type 
          specimen book. It has survived not  only five centuries, but also the leap into 
          electronic typesetting,  remaining essentially unchanged. It was popularised in
          the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker  including 
          versions of Lorem Ipsum.
        </p>
                <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and  typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of  type and scrambled it to make a type 
          specimen book. It has survived not  only five centuries, but also the leap into 
          electronic typesetting,  remaining essentially unchanged. It was popularised in
          the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker  including 
          versions of Lorem Ipsum.
        </p>
        </div>


      </section>
      <section className="hidden lg:flex w-1/3 flex-col items-center">hello</section>
    </main>
  );
}
