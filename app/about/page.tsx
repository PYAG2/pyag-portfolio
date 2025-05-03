import { SpinningText } from "@/components/utils/spinning-text";
import { socials } from "@/constants";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 relative">
        {/* Introduction */}
        <section className="mb-16">
          <h1 className="sm:text-4xl font-bold tracking-tight text-2xl font-bricolage text-foreground mb-6">
            Hi again, I&apos;m Papa Yaw
          </h1>
          <p className="text-md sm:text-xl mb-4">
            <p
              className="italic text-[#3fcf8f]"
             
            >
              Software Engineer &  Data Enthusiast
            </p>

            
          </p>
          <div className="prose prose-zinc dark:prose-invert">
            <p className="mb-4">
              I&apos;m a Computer Engineering graduate with a passion for building elegant, user-centered applications and uncovering meaningful insights from data. My journey in tech blends creative problem-solving with a focus on delivering high-quality, reliable solutions that provide real value. I pay close attention to detail and always prioritize the user experience. Whether I’m designing responsive interfaces, optimizing systems, or analyzing data trends, I approach each challenge with curiosity, purpose, and a strong sense of responsibility.
            </p>
            <p>
            At this stage of my journey, I’m eager to explore the evolving world of technology—learning from every opportunity and discovering how I can use my knowledge and experience to be a blessing to others. I&apos;m a team-oriented individual who believes in collaboration, continuous growth, and giving clients more than just a service — but solutions that make a lasting impact.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold font-bricolage mb-6">
            Professional Journey
          </h2>
          
          {/* Current Role */}
          <div className="mb-10">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-medium">Associate Software Analyst</h3>
              <span className="text-sm text-muted-foreground">Oct. 2024 - Present</span>
            </div>
            <p className="text-primary font-medium mb-3">Rancard Solutions Ltd</p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
              <li>
                Architecting responsive user interfaces with React, TypeScript, and modern 
                front-end technologies while implementing SOLID principles
              </li>
              <li>
                Conducting comprehensive software testing and continuously refactoring code 
                to reduce technical debt and maintain quality standards
              </li>
              <li>
                Implementing clean code practices including DRY, KISS, and meaningful naming 
                conventions through collaborative code reviews
              </li>
            </ul>
          </div>
          
          {/* Previous Roles */}
          <div className="mb-10">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-medium">Intern Software Engineer</h3>
              <span className="text-sm text-muted-foreground">Aug. 2021 - July 2022</span>
            </div>
            <p className="text-primary font-medium mb-3">Polymorph Labs</p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
              <li>
                Developed user-friendly interfaces using React, TypeScript, and Tailwind CSS, 
                resulting in improved engagement metrics
              </li>
              <li>
                Utilized Apollo Client queries and mutations to enhance software performance
                and reduce loading times
              </li>
              <li>
                Conducted regular software testing to ensure optimal functionality
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-medium">Frontend Intern</h3>
              <span className="text-sm text-muted-foreground">Dec. 2020 - July 2021</span>
            </div>
            <p className="text-primary font-medium mb-3">Casantey Business Solutions Group</p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
              <li>
                Implemented responsive design techniques using React JS and Tailwind CSS
              </li>
              <li>
                Collaborated with cross-functional teams to troubleshoot frontend issues
              </li>
              <li>
                Successfully completed assigned tasks within project deadlines
              </li>
            </ul>
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold font-bricolage mb-6">
            Education
          </h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-medium">Kwame Nkrumah University of Science and Technology</h3>
              <span className="text-sm text-muted-foreground">Graduated Sept. 2024</span>
            </div>
            <p className="text-primary font-medium mb-3">B.Sc. Computer Engineering</p>
            <p className="text-muted-foreground mb-2">Kumasi, Ghana</p>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {["Object-Oriented Programming", "Data Structures", "Python Programming", 
                "Web Design & Programming", "Data Science", "Database Management Systems"].map((course) => (
                  <span 
                    key={course}
                    className="px-3 py-1 rounded-full bg-muted text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-medium">Google Data Analytics Certificate</h3>
              <span className="text-sm text-muted-foreground">2023</span>
            </div>
            <p className="text-muted-foreground">
              Comprehensive training in data collection, cleaning, analysis, and visualization 
              using SQL, Google Sheets, and Tableau
            </p>
          </div>
        </section>
        
        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold font-bricolage mb-6">
            Technical Toolkit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", 
                "React Query", "Redux"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Backend & Data</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "Nest.js", "PostgreSQL", "SQL", 
                "Data Visualization", "Data Cleaning"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Personal Touch */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold font-bricolage mb-6">
            Beyond the Code
          </h2>
          <div className="prose prose-zinc dark:prose-invert">
            <p>
              When I&apos;m not immersed in code, I enjoy exploring new technologies, 
              contributing to open-source projects, and staying updated with industry trends.
              I&apos;m passionate about creating accessible, efficient solutions that solve real-world 
              problems and enhance user experiences.
            </p>
          </div>
        </section>
        
        {/* Connect */}
        <section>
          <h2 className="text-2xl font-semibold font-bricolage mb-6">
            Let&apos;s Connect
          </h2>
          <p className="mb-6 text-muted-foreground">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="hover:scale-110 transition-transform"
                aria-label={`Connect on ${social.name}`}
              >
                {social.icon({
                  className: "h-6 w-6 text-gray-200 hover:text-primary",
                })}
              </a>
            ))}
          </div>
        </section>
        
        <div className="mt-16 w-fit mx-auto">
          <SpinningText>learning • building • growing • creating •</SpinningText>
        </div>
      </div>
    </div>
  );
}
