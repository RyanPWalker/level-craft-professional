import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { commonFaqs } from "../faqs";
import { pageMetadata } from "../seo";

const page = {
  path: "/concrete/",
  title: "Concrete Driveways & Patios in Utah County",
  description:
    "Concrete driveways, patios, walkways, and pads in Utah County and across Utah from a licensed, insured general contractor. Free estimates.",
};

export const metadata: Metadata = pageMetadata(page);

export default function ConcretePage() {
  return (
    <ServicePage
      page={page}
      eyebrow="Concrete"
      title="Concrete driveways, patios, and walkways."
      lead="Concrete flatwork across Utah, formed, poured, and finished by our own crew, on its own or as part of a larger remodel or addition."
      icon="grid"
      offeringsTitle="Concrete Services"
      offerings={[
        { title: "Driveways", text: "New concrete driveways and driveway extensions." },
        { title: "Patios", text: "Backyard patios and outdoor living spaces." },
        { title: "Walkways", text: "Front walks, side paths, and connections between spaces." },
        { title: "Pads", text: "Concrete pads for sheds, equipment, and other structures." },
        { title: "Prep & Forming", text: "Base preparation and forms set before every pour." },
        { title: "Part of a Larger Project", text: "Concrete scheduled alongside your remodel or addition, with one point of contact." },
      ]}
      highlightsTitle="Concrete From a General Contractor"
      highlights={[
        { title: "Licensed & Insured", text: "A licensed Utah B100 general contractor with general liability coverage." },
        { title: "In-House Crew", text: "Our own crew forms, pours, and finishes the work." },
        { title: "Clear Communication", text: "A written estimate, a realistic schedule, and updates along the way." },
      ]}
      faqs={[
        {
          question: "What concrete work do you do?",
          answer: "Driveways, patios, walkways, and pads, either on their own or as part of a remodel or addition.",
        },
        {
          question: "Can concrete be part of a bigger project?",
          answer: "Yes. We can schedule concrete alongside a remodel or addition so the whole project is managed by one contractor.",
        },
        commonFaqs.licensed,
        commonFaqs.estimate,
        commonFaqs.area,
      ]}
      ctaTitle="Planning a driveway or patio?"
    />
  );
}
