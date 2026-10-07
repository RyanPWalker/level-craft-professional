import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { commonFaqs } from "../faqs";
import { pageMetadata } from "../seo";

const page = {
  path: "/basement-finishing/",
  title: "Basement Finishing in Utah County",
  description:
    "Basement finishing and remodels in Orem and across Utah County. Framing, drywall, paint, tile, and trim from a licensed, insured general contractor.",
};

export const metadata: Metadata = pageMetadata(page);

// Plumbing, electrical, and HVAC are coordinated through qualified trades. Keep the copy framed that way.
export default function BasementFinishingPage() {
  return (
    <ServicePage
      page={page}
      eyebrow="Basement Finishing"
      title="Finished basements, built like the rest of your home."
      lead="Turn unfinished square footage into bedrooms, family rooms, and storage. Our crew frames, finishes, and trims the space, and we coordinate the plumbing, electrical, and HVAC trades, all on one schedule."
      icon="layers"
      offeringsTitle="Basement Finishing Services"
      offeringsIntro="Full basement finishes, partial finishes, and remodels of basements that are already finished."
      offerings={[
        { title: "Framing", text: "Wood or metal framing for walls, closets, soffits, and new rooms." },
        { title: "Drywall", text: "Drywall hanging, taping, and finishing for walls and ceilings." },
        { title: "Paint", text: "Interior painting for walls, ceilings, doors, and trim." },
        { title: "Tile", text: "Tile floors, showers, and walls for basement bathrooms and laundry areas." },
        { title: "Doors & Trim", text: "Doors, casing, baseboards, and custom carpentry to finish each room." },
        { title: "Plumbing, Electrical & HVAC", text: "Coordinated through qualified trades and scheduled as part of your project." },
      ]}
      highlightsTitle="One Contractor for the Whole Basement"
      highlights={[
        { title: "One Point of Contact", text: "We schedule every trade and keep the job moving, from framing through final trim." },
        { title: "Licensed & Insured", text: "A licensed Utah B100 general contractor with general liability coverage." },
        { title: "Clear Communication", text: "A written scope, a realistic schedule, and updates along the way." },
      ]}
      faqs={[
        {
          question: "Do you handle the plumbing, electrical, and HVAC in a basement finish?",
          answer: "Those trades are done by qualified plumbing, electrical, and HVAC contractors that we coordinate and schedule as part of your project. Our own crew handles framing, drywall, paint, tile, and finish carpentry.",
        },
        {
          question: "Can you finish part of a basement or remodel one that's already finished?",
          answer: "Yes. We take on full basement finishes, partial finishes, and remodels of existing finished basements.",
        },
        commonFaqs.licensed,
        commonFaqs.estimate,
        commonFaqs.area,
      ]}
      ctaTitle="Ready to finish your basement?"
    />
  );
}
