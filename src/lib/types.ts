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
  status: "coming-soon" | "live";
};

export type NewsItem = {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
};
