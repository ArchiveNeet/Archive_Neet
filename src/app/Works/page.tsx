import Posts from "@/components/Posts";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"

export default function page() {
  // Sample current projects data
  const currentProjects = [
    {
      image_url: "https://imgur.com/sZwU1Rm.png",
      name: "Archive Neet",
      link: "/",
      description: "Personal portfolio and blog platform"
    },
  
  ];

  // Sample past projects data
  // const pastProjects = [
  //   {
  //     image_url: "https://imgur.com/sZwU1Rm.png",
  //     name: "Legacy System",
  //     link: "/legacy",
  //     description: "Completed web application from 2024"
  //   },

  // ];

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start py-8 px-4 space-y-12">
      {/* Current Projects Section */}
      <div className="w-full max-w-6xl space-y-6">
      
          <Badge variant="secondary" className="bg-blue-800/50 text-blue-200 hover:bg-blue-800/70 text-base px-4 py-2">
            Currently working on
          </Badge>
   
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {currentProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="flex justify-center">
                  <Posts
                    image_url={project.image_url}
                    name={project.name}
                    link={project.link}
                    description={project.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>

      {/* Past Projects Section */}
      <div className="w-full max-w-6xl space-y-6">
          <Badge variant="secondary" className="bg-amber-800/50 text-amber-200 hover:bg-amber-800/70 text-base px-4 py-2">
            Past Projects
          </Badge>

        
        <Carousel className="w-full">
          {/* <CarouselContent className="-ml-2 md:-ml-4">
            {pastProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="flex justify-center">
                  <Posts
                    image_url={project.image_url}
                    name={project.name}
                    link={project.link}
                    description={project.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent> */}

        </Carousel>
      </div>

      {/* Mobile Navigation Dots (Optional) */}
      <div className="md:hidden text-center text-sm text-stone-400">
        Swipe to see more projects →
      </div>
    </main>
  )
}