export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project"
export type EqiupmentItem = {
  title: string
  link: string
}

export interface GridItemInterface {
  layout: GridItemLayout
  type: GridItemType
  title: string
  icon?: string
  username?: string
  description?: string
  color?: string
  buttonTitle?: string
  buttonLink?: string
  buttonSecondaryText?: string
  /* Mentor */
  promotion?: string
  price?: string
  oldPrice?: string
  /* Project */
  stars?: number
  /* Equipments */
  equipments?: EqiupmentItem[]
  image?: string
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    username: "@happys1ngh",
    description:
      "I am passionate about building Web3 applications and sharing my journey with the world along with teaching others who are willing to do so.",
    color: "#0078d4",
    buttonTitle: "Follow",
    buttonLink: "https://www.linkedin.com/in/happys1ngh",
    buttonSecondaryText: "1.3K",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Telegram",
    icon: "telegram",
    username: "@ethharpreet",
    buttonTitle: "Hello",
    buttonLink: "https://t.me/ethharpreet",
    buttonSecondaryText: "",
    color: "#29b6f6",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@happys1ngh",
    buttonTitle: "Follow",
    buttonSecondaryText: "16",
    buttonLink: "https://github.com/happys1ngh",
    color: "#070707",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@happys1ngh",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/happys1ngh",
    buttonSecondaryText: "436",
    color: "#1DA1F2",
    description:
      "Full-stack Web3 Developer / I love to build cool DApps and collaborate with others.",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Hashnode",
    icon: "hashnode",
    username: "@happys1ngh",
    buttonTitle: "Follow",
    buttonSecondaryText: "4",
    buttonLink: "https://hashnode.com/@HAPPYS1NGH",
    color: "#2962ff",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Resume",
    icon: "resume",
    username: "@happys1ngh",
    buttonTitle: "View",
    buttonSecondaryText: "",
    buttonLink:
      "https://drive.google.com/file/d/1QabSLLnu8ke8tcf8iYVsBJnHaIbCvbfr/view?usp=sharing",
    color: "#070707",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Arbitrum Starter Kit",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/HAPPYS1NGH/arbitrum-starter-kit",
    stars: 2,
  },
  {
    layout: "2x2",
    type: "social",
    title: "Devfolio Profile",
    username: "@happys1ngh",
    description:
      "Won EthIndia 2023 and EthTaipei 2024. Profile on Devfolio with all the projects and achievements.",
    icon: "devfolio",
    buttonTitle: "View",
    buttonLink: "https://devfolio.co/projects/derent-e262",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Arbitrum Faucet Locator",
    icon: "github",
    stars: 1,
    color: "#070707",
    buttonLink: "https://github.com/HAPPYS1NGH/arbitrum-faucet",
  },
]

export const siteConfig = {
  creator: "Harpreet Singh",
  title: "Full Stack Web3 Developer",
  bio: "Building Web3 applications and sharing my journey with the world.",
  location: "Lucknow, India",
  locationLink:
    "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh/@26.8485965,80.7777022,11z/data=!3m1!4b1!4m6!3m5!1s0x399bfd991f32b16b:0x93ccba8909978be7!8m2!3d26.8466937!4d80.946166!16zL20vMDIydHE0?entry=ttu",
  email: "harpreetsinghxp@gmail.com",
  items: GridItems,
} as const
