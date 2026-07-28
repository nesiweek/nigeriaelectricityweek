import Link from "next/link";
import Logo from "@/components/Logo";
import {
  contactInfo,
  footerCtaLinks,
  navItems,
  siteConfig,
  socialLinks,
} from "@/data/site";
import { InstagramIcon, LinkedInIcon, XIcon } from "@/components/ui/icons";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  "X (Twitter)": XIcon,
  Instagram: InstagramIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-gold bg-navy-deep text-white">
      <div className="px-page mx-auto max-w-[1240px] py-[clamp(3.5rem,7vw,5rem)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="min-w-0">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={60} />
              <span className="flex flex-col leading-tight">
                <span className="text-[1.05rem] font-extrabold tracking-wide text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-gold-light">
                  Nigeria Electricity Supply Industry
                </span>
              </span>
            </Link>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="font-bold text-white">
                {contactInfo.secretariat}
              </p>
              <p className="mt-1 text-sm text-white/60">
                {contactInfo.organiser}
              </p>
            </div>

            <address className="mt-4 space-y-0.5 text-sm not-italic text-white/60">
              {contactInfo.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <div className="mt-5 space-y-3 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-light">
                  Phone
                </p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="text-white/75 transition-colors hover:text-gold"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-light">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.generalEmail}`}
                  className="block break-words text-white/75 transition-colors hover:text-gold"
                >
                  {contactInfo.generalEmail}
                </a>
                <a
                  href={`mailto:${contactInfo.platformEmail}`}
                  className="block break-words text-white/75 transition-colors hover:text-gold"
                >
                  {contactInfo.platformEmail}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-light">
                  Website
                </p>
                <a
                  href={siteConfig.url}
                  className="break-words text-white/75 transition-colors hover:text-gold"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-light">
              Navigate
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-light">
              Get Involved
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerCtaLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-light">
              Follow Us
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon width={16} height={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="px-page mx-auto max-w-[1240px] py-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} {contactInfo.organiser}. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
