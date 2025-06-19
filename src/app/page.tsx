import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Favicon from "~/icon.svg";
import Link from "next/link";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  created_at: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  private: boolean;
}

//github repos
const githubRepo = await fetch('https://api.github.com/users/ArchiveNeet/repos');
const repos: GitHubRepo[] = await githubRepo.json();

//substack posts
interface SubstackPost {
  title: string;
  url: string;
  publishedAt?: string;
}

const SubstackPosts: SubstackPost[] = [
  {
    title: "Coming soon!",
    url: "https://archiveneet.substack.com/p/coming-soon",
    publishedAt: "2024-01-01"
  },
];

//youtube videos
interface Posts {
  title: string;
  url: string; // This should be the YouTube video ID
  publishedAt: string;
}

const YoutubeVideos: Posts[] = [
  // {
  //   title: "Hacks",
  //   url: "dQw4w9WgXcQ", // Example YouTube Video ID
  //   publishedAt: "2023-10-01T00:00:00Z",
  // }
];

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
                <a href='https://archiveneet.substack.com/'>
                  <SiSubstack className='hover:text-orange-300 transition-colors' />
                </a>
                <a href='https://github.com/ArchiveNeet'>
                  <FaGithub className='hover:text-purple-400 transition-colors' />
                </a>
                <a href='https://www.youtube.com/channel/UC35viV3Agj-YLT15IPrrVFg'>
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
                <a href='https://archiveneet.substack.com/'>
                  <SiSubstack className='hover:text-orange-300 transition-colors' />
                </a>
                <a href='https://github.com/ArchiveNeet'>
                  <FaGithub className='hover:text-purple-400 transition-colors' />
                </a>
                <a href='https://www.youtube.com/channel/UC35viV3Agj-YLT15IPrrVFg'>
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
              <TabsTrigger value="Projects">Projects</TabsTrigger>
              <TabsTrigger value="Blog Posts">Blog Posts</TabsTrigger>
              <TabsTrigger value="Videos">Videos</TabsTrigger>
            </TabsList>

            <TabsContent value="Projects">
              <div className='flex flex-col items-center gap-4 w-full justify-center'>
                {repos.map((repo: GitHubRepo) => (
                  <div key={repo.id} className='w-full max-w-3xl'>
                    <Link href={repo.html_url}>
                      <div className="flex flex-col gap-4 p-6 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaGithub className="text-white text-sm" />
                          </div>
                          <div className="flex-1">
                            <h2 className='text-xl font-semibold text-purple-200 mb-2'>{repo.name}</h2>
                            <p className='text-sm text-muted-foreground mb-3'>
                              {repo.description || 'No description available'}
                            </p>
                            <div className="flex items-center justify-between">
                              <p className='text-xs text-muted-foreground'>
                                Last updated: {new Date(repo.updated_at).toLocaleDateString()}
                              </p>
                              <div className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
                                View on GitHub →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="Blog Posts">
              <div className='flex flex-col items-center gap-4 w-full justify-center'>
                {SubstackPosts.map((post: SubstackPost, index: number) => (
                  <div key={index} className='w-full max-w-3xl'>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-col gap-4 p-6 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <SiSubstack className="text-white text-sm" />
                          </div>
                          <div className="flex-1">
                            <h2 className='text-xl font-semibold text-purple-200 mb-2'>{post.title}</h2>
                            <div className="flex items-center justify-between">
                              {post.publishedAt && (
                                <p className='text-xs text-muted-foreground'>
                                  Published: {new Date(post.publishedAt).toLocaleDateString()}
                                </p>
                              )}
                              <div className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
                                Read on Substack →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="Videos">
              <div className='flex flex-col items-center gap-6 w-full justify-center'>
                {YoutubeVideos.map((video: Posts) => (
                  <div key={video.url} className='w-full max-w-3xl'>
                    <div className="flex flex-col gap-4 p-6 rounded-lg border">
                      {/* Video Title and Info */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaYoutube className="text-white text-sm" />
                        </div>
                        <div className="flex-1">
                          <h2 className='text-xl font-semibold text-purple-200 mb-2'>{video.title}</h2>
                          <p className='text-xs text-muted-foreground mb-4'>
                            Published: {new Date(video.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {/* YouTube Embed */}
                      <div className="relative w-full aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.url}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
}