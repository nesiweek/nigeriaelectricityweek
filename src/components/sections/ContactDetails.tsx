import { Container } from "@/components/ui/Container";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { contactInfo } from "@/data/site";

const details = [
  {
    label: "Office Address",
    icon: PinIcon,
    content: (
      <address className="space-y-0.5 not-italic">
        {contactInfo.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </address>
    ),
  },
  {
    label: "Telephone",
    icon: PhoneIcon,
    content: (
      <a
        href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
        className="transition-colors hover:text-blue"
      >
        {contactInfo.phone}
      </a>
    ),
  },
  {
    label: "General Enquiries",
    icon: MailIcon,
    content: (
      <a
        href={`mailto:${contactInfo.generalEmail}`}
        className="break-words transition-colors hover:text-blue"
      >
        {contactInfo.generalEmail}
      </a>
    ),
  },
  {
    label: "Partnerships & Sponsorships",
    icon: MailIcon,
    content: (
      <a
        href={`mailto:${contactInfo.partnershipsEmail}`}
        className="break-words transition-colors hover:text-blue"
      >
        {contactInfo.partnershipsEmail}
      </a>
    ),
  },
];

export function ContactDetails() {
  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
          <span className="h-[2px] w-7 bg-gold" />
          Contact
        </span>
        <h2 className="mb-[clamp(2.5rem,5vw,3.5rem)] text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
          Contact Details
        </h2>

        <div className="grid divide-y divide-slate-200 border-y-2 border-gold bg-white sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {details.map((detail) => (
            <div key={detail.label} className="min-w-0 px-6 py-8">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-gold">
                <detail.icon width={16} height={16} />
                {detail.label}
              </div>
              <div className="text-[0.95rem] leading-[1.6] text-slate-600">
                {detail.content}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
