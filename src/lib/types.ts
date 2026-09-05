export type NavItem = {
  label: string;
  href: string;
};

export type EventStat = {
  value: string;
  label: string;
};

export type Experience = {
  slug: string;
  title: string;
  description: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  // status: "coming-soon" | "Register Now" | "";
  image: string;
  status: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
};
