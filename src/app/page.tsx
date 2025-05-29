import Image from "next/image";
import { Badge } from "@/components/ui/badge";
export default function Page() {

  return (
    <main className="w-full min-h-full flex flex-col items-center justify-center px-4 space-y-6 overflow-hidden">
      <div className="flex flex-col items-center justify-center px-4 py-8 md:py-16">
        <div className="max-w-md md:max-w-lg w-full text-center space-y-6">
          {/* Hero Image */}
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <Image
              src="https://i.imgur.com/6Zem1Ew.png" // Replace with your actual image URL
              alt="Retro computer setup"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Hero Text */}
          <Badge variant="secondary" className="bg-blue-800/50 text-blue-200 hover:bg-blue-800/70">
            Hello, just living through interesting times
          </Badge>

          {/* About Me Section */}
          <div className="text-left space-y-4">
            <Badge variant="secondary" className="bg-red-800/50 text-red-200 hover:bg-red-800/70">
              About Me
            </Badge>

            <p className="text-sm md:text-base leading-relaxed">
              Hello, the goal for this site is to allow me to jot down my thoughts, ideas, and show 
              off projects that I am working on. Somethings to know about me; I am mind rotted to the 
              nth degree. I want to be more genuine in my interests and hobbies. I hate eternal irony 
              that is prevalent in many places on the internet.
            </p>
          </div>

          {/* Goals Section */}
          <div className="text-left space-y-4">
            <Badge variant="secondary" className="bg-amber-800/50 text-amber-200 hover:bg-amber-800/70">
              Goals 2025
            </Badge>

            <ul className=" text-sm md:text-base space-y-2">
              <li>• BW: 220 lb → 190 lb</li>
              <li>• Ship 1 Project</li>
              <li>• publish 3 long blog post</li>
            </ul>
          </div>

        </div>
      </div>


    </main>
  );
}