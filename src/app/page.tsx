import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Favicon from "~/icon.svg"
//github repos
const githubRepo = await fetch('https://api.github.com/users/ArchiveNeet/repos')
const repos = await githubRepo.json()

//substack posts
const substackPosts = await fetch('https://api.substackapi.dev/posts/latest?publication_url=archiveneet.substack.com', {
  headers: {
    'X-API-Key': process.env.SUBSTACK_API_KEY,
  }
})
const SubstackPosts = await substackPosts.json()


//youtube videos
const youtubeVideos = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + process.env.YOUTUBE_API_KEY + '&channelId=UC35viV3Agj-YLT15IPrrVFg&part=snippet,id&order=date&maxResults=20')
const YoutubeVideos = await youtubeVideos.json()
console.log(YoutubeVideos)
export default function page() {
  return (
    <main className='w-full h-full flex flex-col items-center px-4'>
      <div className='w-full max-w-4xl'>
        <section className='w-full' id='header'>
          {/* Mobile layout - stacked */}
          <div className='flex flex-col items-center gap-6 md:hidden'>
            <Image src={Favicon} alt="Icon" className='w-32 h-32 object-contain' />
            <div className='flex flex-col items-center text-center space-y-4'>
              <div>
                <h1 className='text-4xl font-bold text-purple-200'>Archive NEET</h1>
                <p className='text-xs text-muted-foreground mt-2'>
                  Interests include Software, Hardware, and misc topics.
                </p>
              </div>
              <div className='flex flex-row items-center gap-4 text-2xl'>
                <a href='https://x.com/ArchiveNeet'>
                  <FaXTwitter className='hover:text-purple-300 transition-colors' />
                </a>
                <a href='https://substack.com/profile/posts'>
                  <SiSubstack className='hover:text-orange-300 transition-colors' />
                </a>
                <a href='https://github.com/ArchiveNeet'>
                  <FaGithub className='hover:text-purple-400 transition-colors' />
                </a>
                <a href='https://www.youtube.com/@ArchiveNeet'>
                  <FaYoutube className='hover:text-red-300 transition-colors' />
                </a>
              </div>

              <p className='text-lg text-center leading-relaxed'>
                Hello, the goal for this site is to allow me to jot down my thoughts, ideas, and show off projects that I am working on.
              </p>


            </div>
          </div>

          {/* Desktop layout - side by side */}
          <div className='hidden md:flex md:items-center md:gap-8'>
            <div className='flex-shrink-0'>
              <Image src={Favicon} alt="Icon" className='' />
            </div>

            <div className='flex flex-col items-start space-y-2 flex-1'>
              <div>
                <h1 className='text-5xl font-bold text-purple-200'>Archive NEET</h1>
                <p className='text-sm text-muted-foreground mt-2'>
                  Interests include Software, Hardware, and misc topics.
                </p>
              </div>

              <div className='flex flex-row items-center gap-4 text-2xl'>
                <a href='https://x.com/ArchiveNeet'>
                  <FaXTwitter className='hover:text-purple-300 transition-colors' />
                </a>
                <a href='https://substack.com/profile/posts'>
                  <SiSubstack className='hover:text-orange-300 transition-colors' />
                </a>
                <a href='https://github.com/ArchiveNeet'>
                  <FaGithub className='hover:text-purple-400 transition-colors' />
                </a>
                <a href='https://www.youtube.com/@ArchiveNeet'>
                  <FaYoutube className='hover:text-red-300 transition-colors' />
                </a>
              </div>

              <p className='text-xl leading-relaxed'>
                Hello, the goal for this site is to allow me to jot down my thoughts, ideas, and show off projects that I am working on.
              </p>
            </div>
          </div>
        </section>
        <section className='h-full w-full mt-8 flex flex-col items-center justify-center'>

          <Tabs defaultValue="Projects" className="w-full">
            <TabsList className='w-full'>
              <TabsTrigger value="Projects" >Projects</TabsTrigger>
              <TabsTrigger value="Blog Posts">Blog Posts</TabsTrigger>
              <TabsTrigger value="Videos">Videos</TabsTrigger>
            </TabsList>
            <TabsContent value="Projects">
              Projects
            </TabsContent>
            <TabsContent value="Blog Posts" className="overflow-y-scroll">
            </TabsContent>
            <TabsContent value="Videos">
              Videos

            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
}
