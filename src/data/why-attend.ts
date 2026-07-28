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
};

export const whyAttendItems: WhyAttendItem[] = [
  {
    icon: "connect",
    title: "Connect",
    description: "Government, utilities, regulators & investors",
  },
  {
    icon: "learn",
    title: "Learn",
    description: "Insights from Africa's energy leaders",
  },
  {
    icon: "invest",
    title: "Invest",
    description: "Opportunities across generation to distribution",
  },
  {
    icon: "innovate",
    title: "Innovate",
    description: "Technologies shaping the future grid",
  },
  {
    icon: "collaborate",
    title: "Collaborate",
    description: "Partnerships that accelerate industry growth",
  },
  {
    icon: "celebrate",
    title: "Celebrate",
    description: "Excellence and the human side of energy",
  },
];
