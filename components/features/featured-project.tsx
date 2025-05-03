interface FeatureItem {
  title: string;
  description: string;
  image: string;
  href: string;           // URL to navigate to when clicking the arrow
  sourceHref?: string;    // GitHub source URL (optional)
}

interface FeatureProps {
  heading?: string;
  description?: string;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    href: "https://example.com/uiux-project",
    sourceHref: "https://github.com/username/uiux-project",
  },
  {
    title: "Responsive Development",
    description:
      "Building websites that look and function perfectly across all devices and screen sizes.",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    href: "https://example.com/responsive-project",
    sourceHref: "https://github.com/username/responsive-project",
  },
  {
    title: "Brand Integration",
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    href: "https://example.com/brand-project",
    sourceHref: "https://github.com/username/brand-project",
  },
  {
    title: "Performance Optimization",
    description:
      "Ensuring fast loading times and smooth performance through optimized code and assets.",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    href: "https://example.com/performance-project",
    sourceHref: "https://github.com/username/performance-project",
  },
];

const Feature = ({
  heading = "Featured Projects",
  features = defaultFeatures,
}: FeatureProps) => {
  return (
    <section className="py-32 mt-16 w-full">
      <div className="container px-4 mx-auto w-full">
        <div className="mb-16 flex flex-col items-start gap-3">
          <p className="text-sm text-zinc-500 uppercase">Projects</p>
          <h1 className=" sm:text-4xl font-bricolage  font-bold tracking-tight text-2xl text-center text-foreground">
            {heading}
          </h1>
        </div>
        <div className="relative flex justify-center w-full">
          <div className="border-muted2 relative flex w-full flex-col border">
            <div className="relative flex flex-col lg:flex-row">
              <FeatureBox feature={features[0]} isWider={true} />
              <FeatureBox feature={features[1]} />
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <FeatureBox feature={features[2]} />
              <FeatureBox feature={features[3]} isWider={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for individual feature boxes
const FeatureBox = ({ 
  feature, 
  isWider = false 
}: { 
  feature: FeatureItem; 
  isWider?: boolean;
}) => {
  return (
    <div 
      className={`group relative border-muted2 flex flex-col justify-between border-b border-solid p-10 
        ${isWider ? "lg:w-3/5" : "lg:w-2/5"} 
        ${isWider && !feature.title.includes("Performance") ? "lg:border-r" : ""} 
        ${!isWider && feature.title.includes("Brand") ? "lg:border-r" : ""}
        lg:border-b-0 hover:bg-slate-50/5 transition-colors duration-200`}
    >
      {/* Top-right arrow link that appears on hover */}
      <a 
        href={feature.href} 
        target="_blank"
        rel="noopener noreferrer" 
        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label={`Visit ${feature.title} project`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary"
        >
          <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      </a>

      {/* Title with hover effect - now a link to href */}
      <a 
        href={feature.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        aria-label={`Visit ${feature.title} project`}
      >
        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200 hover:underline">
          {feature.title}
        </h2>
      </a>
      
      {/* Description */}
      <p className="text-muted-foreground my-4">
        {feature.description}
      </p>
      
      {/* GitHub link at the bottom */}
      {feature.sourceHref && (
        <div className="mt-6">
          <a 
            href={feature.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
            aria-label={`View ${feature.title} source code on GitHub`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Source Code</span>
          </a>
        </div>
      )}
    </div>
  );
};

export { Feature };
