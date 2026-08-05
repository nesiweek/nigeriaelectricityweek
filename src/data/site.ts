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

export const registrationDays = [
  { id: "day-1", label: "Day 1 — National Energy Dialogue" },
  { id: "day-2", label: "Day 2 — CEO & Policy Forum" },
  { id: "day-3", label: "Day 3 — NESI Expo" },
  { id: "day-4", label: "Day 4 — NESI Innovation Challenge" },
  { id: "day-5", label: "Day 5 — NESI Power League" },
  { id: "day-6", label: "Day 6 — NESI Energy Marathon" },
  { id: "day-7", label: "Day 7 — Dinner with NESI" },
  { id: "day-8", label: "Day 8 — NESI Awards" },
  { id: "full-week", label: "Full Week" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Register", href: "/#register" },
  { label: "Partner With Us", href: "/#partner" },
  { label: "Exhibition", href: "/exhibition" },
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
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nesi-week/" },
  // { label: "X (Twitter)", href: "#" },
  { label: "Instagram", href: "https://www.instagram.com/nesi_week/" },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61591843900072",
  },
];
