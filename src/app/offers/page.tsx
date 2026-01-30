import { createMetadata } from "@/src/lib/seo";
import OfferCard from "@/src/components/OfferCard";

export const metadata = createMetadata({
  title: "Offers & Experiences",
  description:
    "Discover SKY AVENUE's latest rooftop restaurant offers including sunset happy hours, chef's tastings and seasonal events.",
  path: "/offers"
});

const offers = [
  {
    title: "Sunset Hour • 2-for-1 Signature Cocktails",
    description:
      "Join us daily from 5:00–7:00 PM for 2-for-1 on selected signature cocktails and rooftop bar bites.",
    badge: "Daily",
    endsAt: undefined
  },
  {
    title: "Skyline Date Night – 3-Course Dinner for Two",
    description:
      "A curated 3-course menu with a shared dessert, welcome cocktail, and window seating (subject to availability).",
    badge: "Limited",
    endsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    title: "Chef’s Skyline Tasting – Weekend Experience",
    description:
      "Indulge in a 5-course tasting menu featuring seasonal highlights. Optional wine pairing available.",
    badge: "Weekends",
    endsAt: undefined
  }
];

export default function OffersPage() {
  return (
    <div className="section section-padding">
      <header className="max-w-2xl">
        <h1 className="heading-1 text-4xl sm:text-5xl">Offers & Experiences</h1>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          From intimate date nights to group celebrations, discover curated
          offers that make your rooftop visit even more memorable.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {offers.map((offer) => (
          <OfferCard
            key={offer.title}
            title={offer.title}
            description={offer.description}
            badge={offer.badge}
            endsAt={offer.endsAt}
          />
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-400">
        * Offers are subject to availability and may change without prior
        notice. Please confirm when reserving your table.
      </p>
    </div>
  );
}