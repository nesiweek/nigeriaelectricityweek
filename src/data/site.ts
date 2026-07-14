import type { NavItem } from "@/lib/types";

export const siteConfig = {
  name: "NESI Week",
  fullName: "NESI (Nigeria Electricity Supply Industry) Week 2026",
  tagline: "Powering the Future",
  pillars: ["Innovation", "Investment", "Collaboration", "Industry Excellence"],
  description:
    "Nigeria's premier annual electricity and energy ecosystem platform bringing together policymakers, regulators, utilities, investors, technology providers, innovators, development partners and consumers to shape the future of the Nigerian Electricity Supply Industry.",
  motto: "One Ecosystem. One Platform. One Future.",
  eventDates: "15–22 November 2026",
  eventLocation: "Abuja, Nigeria",
  url: "https://www.nigeriaelectricityweek.com",
  organiser: "NESI Platform Limited",
};

export const contactInfo = {
  secretariat: "Nigeria Electricity Week Secretariat",
  organiser: "NESI Platform Limited",
  generalEmail: "info@nigeriaelectricityweek.com",
  platformEmail: "info@nesiplatform.com",
  partnershipsEmail: "partnerships@nigeriaelectricityweek.com",
  // mediaEmail: "media@nigeriaelectricityweek.com",
  phone: "+234 902 718 2860",
  website: "www.nigeriaelectricityweek.com",
  addressLines: [
    "2nd Floor, 21 Blantyre Crescent",
    "Beside Barcelona Hotels",
    "Off Adetokunbo Ademola Crescent",
    "Wuse II, Abuja",
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerCtaLinks: NavItem[] = [
  { label: "Register Now", href: "/contact" },
  { label: "Partner With Us", href: "/contact" },
  // { label: "Join Innovation Challenge", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Instagram", href: "#" },
];
