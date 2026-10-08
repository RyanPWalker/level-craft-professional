import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { commonFaqs } from "../faqs";
import { pageMetadata } from "../seo";

const page = {
  path: "/home-renovation/",
  title: "Home Remodeling & Additions in Utah",
  description:
    "Home remodels, additions, repairs, and improvements in Orem and across Utah, built by a licensed, insured Utah B100 general contractor.",
};

export const metadata: Metadata = pageMetadata(page);

export default function HomeRenovationPage() {
  return (
    <ServicePage
      page={page}
      eyebrow="Home Renovation"
      title="Home remodels and additions, built right."
      lead="Remodels, additions, repairs, and improvements across Utah — planned carefully and built to last, so you can love the home you already have."
      icon="home"
      offeringsTitle="Renovations We Build"
      offerings={[
        { title: "Remodels", text: "Kitchens, bathrooms, basements, and whole rooms, managed as one project with one team." },
        { title: "Additions", text: "More room without the move — additions that blend with your existing home." },
        { title: "Repairs & Improvements", text: "Fixes and upgrades large and small, done right the first time." },
        { title: "Drywall & Paint", text: "Drywall hanging, finishing, and repairs, plus interior and exterior painting." },
        { title: "Tile", text: "Tile floors, showers, and walls." },
        { title: "Concrete", text: "Driveways, patios, walkways, and pads." },
      ]}
      highlightsTitle="Renovation Without the Headaches"
      highlights={[
        { title: "Licensed & Insured", text: "A licensed Utah B100 general contractor with general liability coverage." },
        { title: "One Point of Contact", text: "We coordinate every trade, including plumbing, electrical, and HVAC, so you don't have to." },
        { title: "Clear Communication", text: "A written plan, a realistic schedule, and updates along the way." },
      ]}
      faqs={[
        {
          question: "Do you do the plumbing, electrical, and HVAC work on a remodel?",
          answer: "Those trades are handled by qualified plumbing, electrical, and HVAC contractors that we coordinate and schedule as part of your project. Our own crew handles framing, drywall, paint, tile, concrete, and carpentry.",
        },
        {
          question: "What kinds of home projects do you take on?",
          answer: "Remodels, additions, basement finishing, repairs, and improvements, from a single room to larger projects managed as one job.",
        },
        commonFaqs.licensed,
        commonFaqs.estimate,
        commonFaqs.area,
      ]}
      ctaTitle="Ready to renovate?"
    />
  );
}
