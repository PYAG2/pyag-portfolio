import { LinkPreview } from "@/components/utils/link-preview";
import { work } from "@/constants";

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 relative ">
    <div className=" space-y-5">
    <p>
          <span className=" sm:text-4xl font-bold tracking-tight font-bricolage  text-2xl text-center text-foreground">
            Projects
          </span>
        </p>
        <p className=" text-zinc-400 space-x-1 ">
This is a collection of my projects, side quests ⛳ and client work. <br/>If you have a project in mind or want to collaborate, feel free to reach out!
        </p>
    </div>

    <div className="mt-16 space-y-8">
      {
        work?.map((item) => (
          <div
            key={item?.name}
            className="hover:border-l-4 border-l-primary hover:pl-2 duration-300"
          >
            <LinkPreview url={item?.url} className="text-[1.1rem]">
              {item?.name}
            </LinkPreview>
            <p className="font-light text-[0.89rem]">
              {item.about}
              {/* {renderCollaborators(item.collaborators)} */}
            </p>
          </div>
        ))
      }
    </div>
      </div>
    </div>
  );
}
