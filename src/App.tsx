
import { useState, useEffect } from 'react';
import FullLogo from "~/FullLogo.svg"
import { Separator } from "@/components/ui/separator"
interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  updated_at: string;
  pushed_at: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export default function App() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ArchiveNeet/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data: GitHubRepo[] = await response.json();

        // Sort by last modified (updated_at) in descending order
        const sortedRepos = data.sort((a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setRepos(sortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <div className="text-muted-foreground">Loading repositories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <div className="text-destructive">Error: {error}</div>
      </div>
    );
  }

  return (
    <main className="h-full w-full flex items-center justify-center flex-col font-serif text-normal p-2">
      <div className="flex flex-col items-center justify-center  md:max-w-2xl">
        <img src={FullLogo} alt="full logo" />
        <section className="w-full items-center  " id="#about">
          <h1 className="italic text-2xl font-bold ">About</h1>
          <Separator className="mb-5" />
          <p className="pb-2 indent-4">
            Hello 👋, this site is meant to be a anonyms site for me to organize all of the posting I do under this name.
            To be clear, I am not a neet, I just thought the name sounded cool. Hopefully this does not bite me in the ass later.

          </p>

        </section>
        <section className="w-full items-center justify-center " id="#projects">
          <h1 className="italic text-2xl font-bold ">Projects</h1>
          <Separator className="mb-5" />
          <p className=" indent-4 font-light mb-2">
            These are projects that I am actively working on or have worked on in the past. I will try to keep this list up to date, but I am not perfect.
            The Goal of these projects is to learn concepts and to have fun while at the same time making practical tool.
          </p>
          <div className="space-y-4 w-full flex flex-col ">
            {repos.map((repo) => (
              <div className="inline-flex max-w-sm min-w-sm justify-between">
                <div className="flex items-start justify-between mb-3">
                  <time className="text-sm font-mono">
                    Last Modified: {formatDate(repo.updated_at)}
                  </time>
                </div>
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group hover:underline hover:text-purple-200"
                >
                  <h3 className="text-xl font-semibold mb-2 transition-colors">
                    {repo.name}
                  </h3>
                  <p className="italic text-sm leading-relaxed text-muted-foreground">
                    {repo.description || "No description available."}
                  </p>
                </a>
              </div>
            ))}
          </div>


        </section>
        <section id="#Blogs">
          <h1 className="italic text-2xl font-bold ">Projects</h1>
          <Separator className="mb-5" />
          <p className=" indent-4 font-light mb-2">
            These are projects that I am actively working on or have worked on in the past. I will try to keep this list up to date, but I am not perfect.
            The Goal of these projects is to learn concepts and to have fun while at the same time making practical tool.
          </p>
          <div className="space-y-4 w-full flex flex-col ">
            {repos.map((repo) => (
              <div className="inline-flex max-w-sm min-w-sm justify-between">
                <div className="flex items-start justify-between mb-3">
                  <time className="text-sm font-mono">
                    Last Modified: {formatDate(repo.updated_at)}
                  </time>
                </div>
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group hover:underline hover:text-purple-200"
                >
                  <h3 className="text-xl font-semibold mb-2 transition-colors">
                    {repo.name}
                  </h3>
                  <p className="italic text-sm leading-relaxed text-muted-foreground">
                    {repo.description || "No description available."}
                  </p>
                </a>
              </div>
            ))}
          </div>

        </section>
      </div>
    </main>
  )
}
