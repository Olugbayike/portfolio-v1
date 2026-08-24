import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import  mysql  from "@/components/ui/svgs/mysql";
import  Linux  from "@/components/ui/svgs/linux";
import  SpringBoot  from "@/components/ui/svgs/springboot";
import  Android  from "@/components/ui/svgs/android";

export const DATA = {
  name: "Olugbayike Ade-Onojobi",
  initials: "OA",
  url: "https://dillion.io",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer and Entrepreneur. I love building software and solving real-world problems through code.",
  summary:
    "Accomplished Software Developer with 5+ years of experience in designing and developing responsive web and mobile " +
    "applications. Expertise in Kotlin, Java, JavaScript, HTML, CSS, PHP, MySQL, and Git, with a strong focus on front-end and " +
    "Android application development. Builds scalable, user-centered solutions and collaborates with cross-functional teams to deliver " +
    "high-quality software in agile environments.",
  avatarUrl: "/olugbayike.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    // { name: "Typescript", icon: Typescript },
    { name: "Linux", icon: Linux },
    { name: "Python", icon: Python },
    { name: "MySql", icon: mysql },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "Java", icon: Java },
    { name: "Android", icon: Android }
    
    // { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Olugbayike",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/olugbayike-ade-onojobi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Olugbayike",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@olugbayikeadeonojobi4678",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "EASYWARE (U.K.) LIMITED",
      href: "www.easyware.co.uk",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "",
      start: "Feb 2020",
      end: "Jun 2025",
      description:
        "• Led front end development for enterprise and client-facing web applications, including Auto breakdown, Football-NG, and JobsAfrique, delivering scalable and high-performance solutions that met business objectives.\n" +
        "• Designed and developed responsive, mobile-first user interfaces using modern front-end technologies, ensuring cross browser compatibility, accessibility, and an exceptional user experience across desktop and mobile platforms.\n" +

        "• Established and implemented consistent UI/UX design systems and reusable component libraries, improving brand consistency, accelerating development cycles, and enhancing application maintainability.\n" +
        "• Collaborated with cross-functional teams, including designers and product managers, to translate business requirements into user-centric web applications, ensuring seamless feature integration and enhancing overall user satisfaction.\n" +
        "• Provided back-end development support using PHP, contributing to full stack application development, API integration, performance optimisation, code quality, and the successful delivery of robust, production-ready software.",
    },
    {
      company: "EASYWARE (U.K.) LIMITED",
      href: "www.easyware.co.uk",
      badges: [],
      location: "Remote",
      title: "Junior Developer",
      logoUrl: "",
      start: "Feb 2020",
      end: "May 2020",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Middlesex University",
      href: "https://www.mdx.ac.uk/",
      degree: "Bachelor's Degree of Computer Science (Systems Engineering) (BCS)",
      logoUrl: "/mdx.jpg",
      start: "2021",
      end: "2022",
    },
    {
      school: "Aptech Computer Education",
      href: "https://aptech-nigeria.com/",
      degree: "Advanced diploma in Software Engineering",
      logoUrl: "/Aptech_Logo.png",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Symphony",
      dates: "August 2024 - Present",
      href: "",
      active: true,
      description:
        "Developing an Android music application integrating Spotify, MusicBrainz, Last.fm, and Genius APIs.\n" +
        "Implemented Spotify App Remote for music playback and building search and discovery features.",
      technologies: [
        "Android Development",
        "Kotlin",
        "Kotlin coroutines",
        "Android Stuio",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "https://imgtree.co/direct/Jf3cMRPP.png",
      video: ""
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Ven",
      href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEYkMAAAAAAUL_rxNlc9zqR4jopua_pzM?e=S1bhWm",
      dates: "November 2021 - Present",
      active: true,
      description:
        "Advisor: Dr. Ing Clifford de Raffaele. \n" +
        "Built an A.I. designed to prevent mental issues that start with emotional distress at early stages with guidance from Dr Ing Clifford de Raffaele. It uses a Convolutional Neural Network at its core for detecting emotions.",
      technologies: [
        "Tensorflow",
        "Keras",
        "Python",
        "OpenCV-python",
        "JDK"
      ],
      links: [
        {
          type: "Documentation",
          href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEYkMAAAAAAUL_rxNlc9zqR4jopua_pzM?e=S1bhWm",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "https://imgtree.co/direct/F_ouWIGq.png",
      video: ""
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Symphony of Technologies",
      href: "https://www.symphonyoftechnologies.com",
      dates: "March 2026 - April 2026",
      active: true,
      description:
        "Developed the official website of Symphony of Technologies using react, shadcn and Next.js frameworks. The website can be found on symphonyoftechnologies.com.",
      technologies: [
        "Next.js",
        "Typescript",
        "React.js",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.symphonyoftechnologies.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://imgtree.co/direct/6QEqW58m.png",
      video: ""
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Caadi Waitlist API",
      href: "https://1drv.ms/b/c/c49458bd9d158a66/IQAhu4fTN1GUTKkJHv2M_w1RAaYJQpcQaJKiPER4CJizfRI?e=CAqdcu",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed RESTful API endpoints using Java (Spring Boot) and PostgreSQL to manage waitlist users. \n" +
        "Built scalable backend functionality and produced technical documentation.",
      technologies: [
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "Docker",
        "Intellij Idea",
      ],
      links: [
        {
          type: "Documentation",
          href: "https://1drv.ms/b/c/c49458bd9d158a66/IQAhu4fTN1GUTKkJHv2M_w1RAaYJQpcQaJKiPER4CJizfRI?e=CAqdcu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://imgtree.co/direct/B8hU8mHO.png",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Coda Pizza",
      href: "https://github.com/Olugbayike/Android-Tutorials-Big-Nerd-Ranch/tree/main/CodaPizza",
      dates: "Jun 2024 - Aug 2024",
      active: true,
      description:
        "Built an Android application using Jetpack Compose with an interactive pizza customization interface.\n" +
        "Applied modern UI state management and responsive design principles.",
      technologies: [
        "Android Jetpack",
        "Android SDK",
        "Kotlin Coroutines",
        "Kotlin",
        "Jetpack Compose",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/Olugbayike/Android-Tutorials-Big-Nerd-Ranch/tree/main/CodaPizza",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://imgtree.co/direct/BIYk00Hj.png",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Photo Gallery",
      href: "https://github.com/Olugbayike/Android-Tutorials-Big-Nerd-Ranch/tree/main/PhotoGallery",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "Developed an Android application that retrieves and searches images using the Flickr API.\n" +
        "Implemented network communication with Retrofit and OkHttp.",
      technologies: [
        "Android Jetpack",
        "Android SDK",
        "Kotlin Coroutines",
        "Kotlin",
        "Retrofit",
        "OkHTTP"
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/Olugbayike/Android-Tutorials-Big-Nerd-Ranch/tree/main/PhotoGallery",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://imgtree.co/direct/4vV04weI.png",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Criminal Intent",
      href: "https://github.com/Olugbayike/Android-Tutorials-Big-Nerd-Ranch/tree/main/CriminalIntent",
      dates: "January 2024 - February 2024",
      active: true,
      description:
        "Built an Android application for managing crime records using Room and SQLite.\n" +
        "Implemented efficient local data persistence and CRUD operations.",
      technologies: [
        "Android Jetpack",
        "Android SDK",
        "Kotlin Coroutines",
        "Kotlin",
        "SQLite",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/Olugbayike/Android-Tutorials-Big-Nerd-Ranch/tree/main/CriminalIntent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://imgtree.co/direct/eRpFGoW_.png",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Car Sales Dataset Analysis",
      href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEAkMAAAAAARPPZ_0_3aMDiunX8mgIiE0?e=X3z540",
      dates: "January 2022 - March 2022",
      active: true,
      description:
        "Analyzed vehicle sales data using Tableau and Weka to identify trends and business insights.",
      technologies: [
        "Tableu",
        "Weka",
      ],
      links: [
        {
          type: "Documentation",
          href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEAkMAAAAAARPPZ_0_3aMDiunX8mgIiE0?e=X3z540",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Digit Recognition using K-Nearest Neigbour",
      href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEqkIAAAAAAeNdzP-FoTu__ByDj9bXTV0?e=qWtW2X",
      dates: "January 2022 - March 2022",
      active: true,
      description:
        "Developed a K-Nearest Neighbors (KNN) model to recognize handwritten digits from the MNIST dataset.",
      technologies: [
        "Java",
      ],
      links: [
        {
          type: "Documentation",
          href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEqkIAAAAAAeNdzP-FoTu__ByDj9bXTV0?e=qWtW2X",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/Olugbayike/DigitRecognition",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Transport robot",
      href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEEUMAAAAAAZIAWJO64a71CIm6oRS5WPI?e=D0VMlO",
      dates: "October 2021 - March 2022",
      active: true,
      description:
        "Designed and simulated a mobile transport robot using ROS and The Construct simulation platform.",
      technologies: [
        "ROS",
        "Python",
      ],
      links: [
        {
          type: "Documentation",
          href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEEUMAAAAAAZIAWJO64a71CIm6oRS5WPI?e=D0VMlO",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://imgtree.co/direct/bY40Z9zW.png",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Football (Soccer) Analytics",
      href: "https://github.com/Olugbayike/DigitRecognition",
      dates: "September 2021 - December 2021",
      active: true,
      description:
        "Designed a data analytics solution incorporating ETL, data warehousing, and OLAP to support decision-making.",
      technologies: [
      ],
      links: [
        {
          type: "Documentation",
          href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEW0IAAAAAAXSHzHCAtLTtZ6GndunaOZg?e=y2F0NU",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "TSP with Genetic Algorithm",
      href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEO0IAAAAAASZwiPb28VnP_7U3ZLhuvC0?e=ztUfHJ",
      dates: "November 2021 - December 2022",
      active: true,
      description:
        "Developed a K-Nearest Neighbors (KNN) model to recognize handwritten digits from the MNIST dataset.",
      technologies: [
        "Java",
      ],
      links: [
        {
          type: "Documentation",
          href: "https://1drv.ms/b/c/c49458bd9d158a66/IQBmihWdvViUIIDEO0IAAAAAASZwiPb28VnP_7U3ZLhuvC0?e=ztUfHJ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/Olugbayike/TSP-with-Genetic-Algorithm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: ""
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
