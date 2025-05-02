import { cn } from "@/lib/utils";
import { Marquee } from "../utils/marquee";



export function NewMarqueeDemo() {
  // Sample blog post data with descriptions and hrefs
  const blogPosts = [
    {
      id: "1",
      title: "Building with React",
      category: "Development",
      description: "A comprehensive guide to building modern user interfaces with React. Learn about hooks, context, and performance optimization techniques.",
      href: "/blog/building-with-react"
    },
    {
      id: "2",
      title: "CSS Grid Layout",
      category: "Design",
      href: "/blog/css-grid-layout"
    },
    {
      id: "3",
      title: "TypeScript Basics",
      category: "Development",
      href: "/blog/typescript-basics"
    },
    {
      id: "4",
      title: "UX Principles",
      category: "Design",
      description: "Core principles of user experience design that help create intuitive and engaging digital products users will love.",
      href: "/blog/ux-principles"
    },
    {
      id: "5",
      title: "Backend Architecture",
      category: "Development",
      href: "/blog/backend-architecture"
    },
    {
      id: "6",
      title: "UI Animation",
      category: "Design",
      href: "/blog/ui-animation"
    },
  ];

  const BigBlogCard = ({
    title,
    category,
    description = "",
    href = "#",
  }: {
    title: string;
    category: string;
    description?: string;
    href?: string;
  }) => (
    <a 
      href={href} 
      className={cn(
        "h-full rounded-xl flex flex-col justify-between p-5 border group",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transition-all duration-300 relative no-underline"
      )}
    >
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
        <h3 className="mt-2 text-xl font-medium">{title}</h3>
        {description && (
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
        )}
      </div>
      <div className="mt-auto flex items-center">
        <span className="text-sm font-medium group-hover:underline">
          Read more
        </span>
        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </a>
  );

  const SmallBlogCard = ({
    title,
    category,
    href = "#",
  }: {
    title: string;
    category: string;
    href?: string;
  }) => (
    <a 
      href={href}
      className={cn(
        "h-full rounded-xl flex flex-col justify-between p-5 border",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]",
        "no-underline"
      )}
    >
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
        <h3 className="mt-2 text-lg font-medium">{title}</h3>
      </div>
      <div className="mt-auto">
        <span className="text-sm font-medium hover:underline">
          Read more →
        </span>
      </div>
    </a>
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-5">
      <Marquee pauseOnHover className="[--duration:30s] [--gap:0.5rem]">
        <div className="flex gap-2 p-2 items-center">
          {/* First group */}
          <div className="w-[320px] h-64 mx-1">
            <BigBlogCard
              title={blogPosts[0].title}
              category={blogPosts[0].category}
              description={blogPosts[0].description}
              href={blogPosts[0].href}
            />
          </div>

          <div className="h-64 grid grid-rows-2 gap-2 w-[240px] mx-1">
            <SmallBlogCard
              title={blogPosts[1].title}
              category={blogPosts[1].category}
              href={blogPosts[1].href}
            />
            <SmallBlogCard
              title={blogPosts[2].title}
              category={blogPosts[2].category}
              href={blogPosts[2].href}
            />
          </div>

          {/* Second group */}
          <div className="w-[320px] h-64 mx-1">
            <BigBlogCard
              title={blogPosts[3].title}
              category={blogPosts[3].category}
              description={blogPosts[3].description}
              href={blogPosts[3].href}
            />
          </div>

          <div className="h-64 grid grid-rows-2 gap-2 w-[240px] mx-1">
            <SmallBlogCard
              title={blogPosts[4].title}
              category={blogPosts[4].category}
              href={blogPosts[4].href}
            />
            <SmallBlogCard
              title={blogPosts[5].title}
              category={blogPosts[5].category}
              href={blogPosts[5].href}
            />
          </div>
        </div>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}