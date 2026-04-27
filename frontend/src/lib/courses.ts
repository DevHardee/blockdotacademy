export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  students: number;
  rating: number;
  image: string;
  price: string;
  instructor: string;
  status: "Published" | "Draft";
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Blockchain Fundamentals",
    description: "Master the core concepts of blockchain technology and distributed systems.",
    duration: "8 weeks",
    level: "Beginner",
    category: "Blockchain",
    students: 1247,
    rating: 4.9,
    image: "🔗",
    price: "Free",
    instructor: "Dr. Sarah Chen",
    status: "Published",
  },
  {
    id: 2,
    title: "Smart Contract Development",
    description: "Build and deploy smart contracts using Solidity and modern tools.",
    duration: "12 weeks",
    level: "Intermediate",
    category: "Development",
    students: 892,
    rating: 4.8,
    image: "⚡",
    price: "$99",
    instructor: "Mike Rodriguez",
    status: "Published",
  },
  {
    id: 3,
    title: "DeFi Protocol Design",
    description: "Learn to design and implement decentralized finance protocols.",
    duration: "10 weeks",
    level: "Advanced",
    category: "DeFi",
    students: 634,
    rating: 4.9,
    image: "🏦",
    price: "$149",
    instructor: "Alex Thompson",
    status: "Published",
  },
  {
    id: 4,
    title: "NFT Marketplace Development",
    description: "Create your own NFT marketplace from scratch using Web3 tools.",
    duration: "6 weeks",
    level: "Intermediate",
    category: "NFTs",
    students: 1156,
    rating: 4.7,
    image: "🎨",
    price: "$129",
    instructor: "Emma Wilson",
    status: "Draft",
  },
  {
    id: 5,
    title: "Web3 Security Fundamentals",
    description: "Learn essential security practices for Web3 applications and contracts.",
    duration: "4 weeks",
    level: "Beginner",
    category: "Security",
    students: 823,
    rating: 4.8,
    image: "🛡️",
    price: "Free",
    instructor: "David Kim",
    status: "Published",
  },
  {
    id: 6,
    title: "Advanced Solidity Patterns",
    description: "Master advanced Solidity patterns and gas optimization techniques.",
    duration: "8 weeks",
    level: "Advanced",
    category: "Development",
    students: 445,
    rating: 4.9,
    image: "🔧",
    price: "$199",
    instructor: "Lisa Park",
    status: "Published",
  },
]

export const courseMockData = [
  {
    id: 1,
    title: "Modern JavaScript Essentials",
    description:
      "Learn modern JavaScript from the ground up — from variables and functions to ES6+ and async programming.",
    category: "Web Development",
    level: "Beginner",
    duration: "6h 30m",
    students: 2500,
    rating: 4.7,
    instructor: {
      name: "John Doe",
      title: "Blockchain Research Scientist",
      avatar: "👩‍🔬",
      bio: "10+ years in blockchain research with publications in top-tier conferences"
    },
    status: "Published",
    price: "$49",
    originalPrice: "$99",
    image: "🟨",
    whatYoullLearn: [
      "Understand blockchain architecture and consensus mechanisms",
      "Learn cryptographic fundamentals and hash functions",
      "Explore different blockchain networks and their use cases",
      "Build your first simple blockchain application",
      "Understand smart contracts and their role in Web3"
    ],
    curriculum: [
      {
        module: "Getting Started",
        lessons: [
          { id: 1, title: "Introduction to JavaScript", duration: "10:32" },
          { id: 2, title: "Setting Up Your Environment", duration: "08:45" },
        ],
      },
      {
        module: "Core Concepts",
        lessons: [
          { id: 3, title: "Variables & Data Types", duration: "12:11" },
          { id: 4, title: "Functions Deep Dive", duration: "14:23" },
          { id: 5, title: "Control Flow", duration: "09:50" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "React Fundamentals",
    description:
      "Build powerful, interactive user interfaces with React — learn components, hooks, state management, and more.",
    category: "Frontend",
    level: "Intermediate",
    duration: "8h 10m",
    students: 4200,
    rating: 4.9,
    instructor: {
      name: "Dr. Sarah Chen",
      title: "Blockchain Research Scientist",
      avatar: "👩‍🔬",
      bio: "10+ years in blockchain research with publications in top-tier conferences"
    },
    status: "Published",
    price: "$79",
    originalPrice: "$129",
    image: "⚛️",
    whatYoullLearn: [
      "Understand blockchain architecture and consensus mechanisms",
      "Learn cryptographic fundamentals and hash functions",
      "Explore different blockchain networks and their use cases",
      "Build your first simple blockchain application",
      "Understand smart contracts and their role in Web3"
    ],
    curriculum: [
      {
        module: "React Basics",
        lessons: [
          { id: 1, title: "What is React?", duration: "09:40" },
          { id: 2, title: "JSX & Rendering", duration: "15:12" },
          { id: 3, title: "Components & Props", duration: "13:02" },
        ],
      },
      {
        module: "React Hooks",
        lessons: [
          { id: 4, title: "Using useState", duration: "11:09" },
          { id: 5, title: "Understanding useEffect", duration: "10:28" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Node.js API Development",
    description:
      "Master backend development with Node.js — build scalable APIs and connect your frontend to real databases.",
    category: "Backend",
    level: "Advanced",
    duration: "10h 45m",
    students: 3100,
    rating: 4.6,
    instructor: {
      name: "Alex Kim",
      title: "Blockchain Research Scientist",
      avatar: "👩‍🔬",
      bio: "10+ years in blockchain research with publications in top-tier conferences"
    },
    status: "Published",
    price: "$99",
    originalPrice: "$149",
    image: "🟩",
    whatYoullLearn: [
      "Understand blockchain architecture and consensus mechanisms",
      "Learn cryptographic fundamentals and hash functions",
      "Explore different blockchain networks and their use cases",
      "Build your first simple blockchain application",
      "Understand smart contracts and their role in Web3"
    ],
    curriculum: [
      {
        module: "Introduction",
        lessons: [
          { id: 1, title: "Why Node.js?", duration: "08:20" },
          { id: 2, title: "Installing Node & npm", duration: "06:55" },
        ],
      },
      {
        module: "Building APIs",
        lessons: [
          { id: 3, title: "Setting Up Express", duration: "13:18" },
          { id: 4, title: "Routing & Middleware", duration: "12:41" },
          { id: 5, title: "Connecting to MongoDB", duration: "14:32" },
        ],
      },
    ],
  },
]
