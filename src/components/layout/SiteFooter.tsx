import { contactInfo, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy-deep text-white">
      <div className="px-page mx-auto flex max-w-[1240px] flex-col gap-3 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <span>
          &copy; {new Date().getFullYear()} {siteConfig.organiser}. All
          rights reserved.
        </span>
        <span className="flex flex-col gap-1 sm:flex-row sm:gap-4">
          <a
            href={`mailto:${contactInfo.generalEmail}`}
            className="transition-colors hover:text-gold"
          >
            {contactInfo.generalEmail}
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="transition-colors hover:text-gold"
          >
            {contactInfo.phone}
          </a>
        </span>
      </div>
    </footer>
  );
}
