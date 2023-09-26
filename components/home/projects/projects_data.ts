export type CardType = {
  id: number;
  href: string;
  name: string;
  project_url?: string;
  tech: string[]
  platform: string[]
  title: string;
  description: string;
  date: string;
  images: string[]
};

export { projects }

const projects: CardType[] = [
  {
    id: 8,
    name: "CateringKing", href: "/", project_url: "https://play.google.com/store/apps/details?id=com.cateringking.com&pli=1",
    tech: ["React Native, Firebase, Axios"], platform: ['Mobile'],
    title: "React Native Catering App with Signup, Login, and Bidding Functionality",
    description: "React Native mobile application that allows users (customers) and caterers to sign up and interact with each other. Customers can create “events” and request various types of cuisine, and caterers can bid on those events.\nFeatures: User Authentication, bidding System, real-time Updates, Search and Filtering.\nServerless architecture, user authentication, real-time updates, and database management.\n",
    date: "2023",
    images: ["/CateringKing.png", "/CateringKing2.png", "/CateringKing3.png", "/CateringKing5.png", "/CateringKing6.png", "/CateringKing7.png"]
  },
  {
    id: 7,
    name: "Spotify/Looker API", href: "/", project_url: "intenral project", tech: ["Sveltekit, Express, Google Spreadsheets API, Spotify API"], platform: ['Web'],
    title: "App that saves Spotify API and MGID API data from multiple users and renders the data on Google Sheets/DataStudio",
    description: "The main focus of this app was on the backend, which is an Expressjs server that updates Google Spreadsheets based on Spotify API and the MGID API.\nI built a Sveltekit website that interacts with the server, allowing the client to update, add or remove spreadsheets easily.\nThe main use for this tool is internal, as it allowed the client to automate his business.",
    date: "2023",
    images: ["/spotifyAPI.png"]
  },
  {
    id: 6,
      name: "Musegy", href: "/", project_url: "https://musegy.com/", tech: ["Nextjs, Supabase, Postgres, Stripe API, Tailwind"], platform: ['Web'],
    title: "Music Services Marketplace with Subscription Model and Token System",
    description: "SvelteKit website that serves as a marketplace for a music producer to sell his services. Supabase used for database management and Stripe for handling subscription payments. Users can subscribe to the producer's services and earn tokens each month.\nKey Features: User Authentication with social login (Google) or regular email and password. Monthly and yearly Stripe subscription models.Token system based on Stripe’s API. Database Management.",
    date: "2022",
    images: ["/musegy.jpeg", "/musegy2.jpeg", "/musegy3.png"]
  },
  {
    id: 5,
    name: "LonelyPlanet", href: "/", project_url: "https://www.lonelyplanet.com/", tech: ["Reactjs, Tailwind, Authjs, Redux, Nestjs"], platform: ['Web'],
    title: "Elegant Web for planning your itinerary, with an integrated book shop.",
    description: "I implemented a visually appealing and highly functional user interface using React components styled with the versatile Tailwind CSS framework. Heavy focus on UI/UX.\nSeamless API Integration and State Management by leveraging the Redux library.\nIntegrated data from various APIs, managed the application’s state.\nRigorous testing process to ensure the application’s reliability and maintainability.\nImproved the application’s load times and overall user experience with features such as lazy loading.",
    date: "2022",
    images: ["/LonelyPlanet1.jpeg", "/LonelyPlanet2.jpeg", "/LonelyPlanet3.jpeg", "/LonelyPlanet4.jpeg"]
  },
  // {
    // id: 4,
    //   name: "ADV Specs", href: "/", project_url: "https://www.advspecs.com/", tech: ["Vuejs, Nuxt, D3js"], platform: ['Web'],
  //   title: "Advanced Motorbike Performance Analysis and Comparison Tool",
  //   description: "I developed a motorbike performance analysis and comparison application that processes hundreds of rows of motorbike data, empowering users with comprehensive tools to evaluate and contrast various models.\nData plotted on interactive charts, filterable by several inputs. Leveraged the powerful D3.js library to display the data.\nThe frontend is built with Vue.js.",
  //   date: "2022",
  //   images: []
  // },
  {
    id: 3,
    name: "Gameplex", href: "/", project_url: "https://www.gameplex.games", tech: ["React", "Next", "Electron", "Web3"], platform: ['Web'],
    title: "Crypto wallet for multiple platforms, with a beautifully designed website and blog",
    description: "I've developed Gameplex's current website. They have a beautiful design along with some trick effects and animations. Blog system uses MDX, easily storing blogs in mdx files.\nI collaborated on their Electron project. Implemented Storybook and created reusable components.",
    date: "2021",
    images: ["/gameplex1.png", "/gameplex2.png", "/gameplex3.png", "/gameplex4.png"],
  },
  {
    id: 2,
    name: "AnsweringEverything", href: "/", project_url: "https://answeringeverything.com", tech: ["React"], platform: ['Web'],
    title: "Responsive Web Application Development with Cutting-Edge Technologies",
    description: "I've worked with AnsweringEverything to improve their blog system. I'm solo transitioning the site from json based to MDX, a popular markdown library that makes writing blogs pleasurable.",
    date: "2021",
    images: ["/answer1.png", "/answer2.png"]
  },
  {
    id: 1,
    name: "OpenlyPrivate", href: "/", project_url: "https://openlyprivate.com", tech: ["React"], platform: ['Web'],
    title: "OpenlyPrivate is a Facebook-like website with Trello functionality (in beta testing).",
    description: "OpenlyPrivate is a Facebook-like website with Trello functionality (in beta testing). It's main aim is to pass down messages and memories to specific people the user selects. These messages are not to be notified, and only to be found once you search them up.\nAllows posting “blog like” posts, with images, videos and mp3 recordings.\n“Friends” system where birthdates and full name must check to be friends.\nMedia stored on AWS S3.",
    date: "2020",
    images: ["/Openly1.png", "/Openly2.png", "/Openly3.png", "/Openly4.png", "/Openly5.png"]
  },
]
