import type { NavItem } from "@/lib/types";

export const siteConfig = {
  name: "NESI Week",
  fullName: "Nigeria Electricity Week (NESI Week) 2026",
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
  generalEmail: "info@nigeriaelectricityweek.com",
  partnershipsEmail: "partnerships@nigeriaelectricityweek.com",
  mediaEmail: "media@nigeriaelectricityweek.com",
  phone: "+234 902 718 2860",
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
