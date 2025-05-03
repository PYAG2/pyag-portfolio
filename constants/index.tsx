import { JSX, SVGProps } from "react";

export const socials = [
  // {
  //   name: "X",
  //   href: "#",
  //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg
  //       fill="currentColor"
  //       viewBox="0 0 24 24"
  //       {...props}
  //       className="hover:text-primary"
  //     >
  //       <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  //     </svg>
  //   ),
  // },
  {
    name: "GitHub",
    href: "#",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    href: "/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
      fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 50"
      >
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
      </svg>
    ),
  },
  {
    name:"Mail",
    href:"",
    icon:(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
  </svg>
)
  }
];



export const work = [
  {
    name: 'Lumon Industries',
    url: "https://lumon-landing-nine.vercel.app/",
    about: "An AI-powered financial platform developed during the Achieve by Petra hackathon to democratize access to lending and financial advice for underserved individuals. Features include a peer-to-peer lending system with behavior-based risk assessment, and an AI financial assistant offering personalized guidance. Built with AI/ML for behavioral modeling, context-aware chatbot integration, secure cloud architecture, and responsive multi-platform design.",
  },
  {
    name: 'Halfer Pay',
    url: "https://www.halferpay.com/",
    about: "An innovative e-commerce platform enabling customers to purchase products through flexible installment plans. Built for a client using React for the frontend and Rust for a high-performance backend architecture. Collaborated with",
    collaborators: [{name: "Kwaame Ofori-Adjekum", url: "https://github.com/qwamicodes"}]
  },
  {
    name: "Dimba Event Organizer App",
    url: "https://organizer.dimba.app/",
    about: "A comprehensive event management solution empowering organizers to create, control, and seamlessly manage events through the Dimba platform. Features include real-time analytics, attendee management, and customizable event pages.",
    collaborators: []
  },
  {
    name: "JNA Foundation",
    url: "https://www.jnafoundation.org/",
    about: "A memorial website for the Josephine Nana Asmah Foundation, established to honor the legacy of a dear friend. The platform showcases the foundation's mission, initiatives, and impact while providing ways for visitors to contribute to its causes. Collaborated with",
    collaborators: [
      { name: "Prince", url: "https://github.com/blackprince001" },
      { name: "Amartey Ezekiel Elvis Junior", url: "https://github.com/ezekielelvis" }
    ]
  },
  {
    name: "Dimba",
    url: "https://www.dimba.app/about",
    about: "A modern event discovery and ticketing platform that connects users with local events and simplifies the ticket purchasing process. Features an intuitive interface, personalized event recommendations, and secure payment processing.",
    collaborators: []
  },
  {
    name: "404GraphVille",
    url: "https://404graphville.vercel.app/",
    about: "A visually striking client website featuring custom graphics, interactive elements, and responsive design. Developed to showcase the client's portfolio and services with an emphasis on user experience. Collaborated with",
    collaborators: [
      { name: "Nana Kwesi Asante", url: "https://www.nkasante.com/" }
    ]
  },
  {
    name: "Campus Connect",
    url: "https://github.com/PYAG1/campusconnect?tab=readme-ov-file",
    about: "A campus event management application designed to enhance student participation and streamline event discovery. By consolidating event information into a single platform, it empowers campus organizations to efficiently manage and promote their events. Key features include event listings, submission, management, and notifications, all tailored to improve communication and time management for students",
    collaborators: [
      // { name: "Nana Kwesi Asante", url: "https://www.nkasante.com/" }
    ]
  },
  {
    name: "Zomujo Foundation",
    url: "https://zomujo.org/",
    about: "The official digital presence for Zomujo, a mental health organization dedicated to raising awareness and providing resources. The website features educational content, support resources, and community engagement opportunities. Collaborated with",
    collaborators: [{ name: "Nana Kwesi Asante", url: "https://www.nkasante.com/" }]
  },
  {
    name: "HR Xpert",
    url: "https://hrxpert.vercel.app/",
    about: "A comprehensive human resources management application that streamlines administrative tasks. Administrators can manage the employee lifecycle including onboarding, offboarding, information management, leave request approvals, and department organization. Employees benefit from self-service features to update personal information, request time off, and track leave history. Developed with",
    collaborators: [{name: "Akwasi Frimpong", url: "https://github.com/frimpsss"}]
  }
];