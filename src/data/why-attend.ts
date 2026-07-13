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
    description:
      "Meet decision-makers from government, utilities, regulators, investors, financial institutions and technology companies.",
  },
  {
    icon: "learn",
    title: "Learn",
    description:
      "Gain insights from industry leaders shaping the future of electricity in Nigeria and across Africa.",
  },
  {
    icon: "invest",
    title: "Invest",
    description:
      "Discover emerging opportunities across generation, transmission, distribution, renewable energy and digital infrastructure.",
  },
  {
    icon: "innovate",
    title: "Innovate",
    description:
      "Experience cutting-edge technologies and ground-breaking ideas driving the future grid.",
  },
  {
    icon: "collaborate",
    title: "Collaborate",
    description:
      "Build strategic partnerships that accelerate industry growth and national development.",
  },
  {
    icon: "celebrate",
    title: "Celebrate",
    description:
      "Recognise excellence, inspire innovation and experience the human side of energy.",
  },
];
