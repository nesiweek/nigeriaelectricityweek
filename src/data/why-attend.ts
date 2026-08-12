export type WhyAttendIcon =
  | "connect"
  | "learn"
  | "invest"
  | "innovate"
  | "collaborate"
  | "celebrate";

export type WhyAttendItem = {
  icon: WhyAttendIcon;
  title: string;
  description: string;
  image: string;
};

export const whyAttendItems: WhyAttendItem[] = [
  {
    icon: "connect",
    title: "Connect",
    description: "Government, utilities, regulators & investors",
    image: "/images/reasons/connect.jpg",
  },
  {
    icon: "learn",
    title: "Learn",
    description: "Insights from Africa's energy leaders",
    image: "/images/reasons/learn.jpg",
  },
  {
    icon: "invest",
    title: "Invest",
    description: "Opportunities across generation to distribution",
    image: "/images/reasons/invest.jpg",
  },
  {
    icon: "innovate",
    title: "Innovate",
    description: "Technologies shaping the future grid",
    image: "/images/reasons/innovate.jpg",
  },
  {
    icon: "collaborate",
    title: "Collaborate",
    description: "Partnerships that accelerate industry growth",
    image: "/images/reasons/collaborate.jpg",
  },
  {
    icon: "celebrate",
    title: "Celebrate",
    description: "Excellence and the human side of energy",
    image: "/images/reasons/celebrate.jpg",
  },
];
