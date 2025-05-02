import { NewMarqueeDemo } from "@/components/features/blog-marquee";
import { Feature } from "@/components/features/featured-project";
import { LineShadowText } from "@/components/utils/line-shadow-text";
import { SpinningText } from "@/components/utils/spinning-text";
import { socials } from "@/constants";

export default function Home() {
  return (
 
      <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 relative ">
          <div>
            <h1 className="text-balance text-lg font-semibold leading-none tracking-tighter sm:text-3xl ">
              Papa Yaw Agyeman-Gyekye
            </h1>
            <p className="text-md sm:text-xl space-x-1">
              <LineShadowText
                className="italic text-[#3fcf8f]"
                shadowColor={"#3fcf8f"}
              >
                Creative
              </LineShadowText>
            </p>
          </div>
          <div className="mt-10 space-y-5">
            <p>
              Exploring tech with purpose — building full-stack solutions that
              think for themselves.
            </p>
            <p>
              👋 Hi, I design and build intuitive web and mobile applications with
              a focus on clean architecture and great user experience. From
              frontend interfaces to backend systems, I enjoy working across the
              stack to bring ideas to life. .
            </p>

            <p>
              Recently, I&apos;ve been exploring the world of AI and data analytics —
              creating real-time tools, experimenting with interactive agents, and
              using Python for data visualization and insights.
            </p>
            <p>
              Curious and creative at heart, I&apos;m always learning, building, and
              looking for new ways to solve meaningful problems.
            </p>
          </div>
          <div className="my-10">
            {
              socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className=""
                >
                  {social.icon({
                    className: "h-8 w-8 inline-block mr-4 text-gray-200 dark:hover:text-primary",
                  })}
                </a>
              ))
            }
          </div>
          <div className=" my-24 pl-14 w-fit  h-fit">
            <SpinningText>Proudly alive • earn more • grow more •</SpinningText>
          </div>
        </div>
        <div className="w-full">
          
        <Feature />
      </div>
<div className="space-y-5">
  <div className="flex flex-col items-start gap-3">
    <p className="text-sm text-zinc-500">BLOG</p>
    <p className="text-2xl sm:text-4xl">Recent Posts</p>
  </div>


<NewMarqueeDemo/>
</div>
      </div>

    
     

  );
}
