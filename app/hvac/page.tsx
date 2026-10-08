import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { commonFaqs } from "../faqs";
import { pageMetadata } from "../seo";

const page = {
  path: "/hvac/",
  title: "HVAC for Remodels & Build-Outs in Utah County",
  description:
    "Heating and cooling for remodels, additions, and build-outs in Utah County and statewide. We coordinate qualified HVAC, plumbing, and electrical trades.",
};

export const metadata: Metadata = pageMetadata(page);

// HVAC, plumbing, and electrical work is coordinated through qualified trades, not
// performed in-house. Keep the copy framed that way.
export default function HvacPage() {
  return (
    <ServicePage
      page={page}
      eyebrow="Heating · Cooling"
      title="Heating and cooling, coordinated with your build."
      lead="Heating and cooling for your remodel, addition, or build-out. We coordinate qualified HVAC trades and manage the work as part of your project, with one schedule and one point of contact."
      icon="thermometer"
      offeringsTitle="HVAC on Your Project"
      offerings={[
        { title: "Remodels & Additions", text: "New or extended heating and cooling for added and reworked spaces, planned in from the start." },
        { title: "Commercial Build-Outs", text: "HVAC for tenant improvements and office build-outs, coordinated with the rest of the build." },
        { title: "Framing for Ductwork", text: "Soffits, chases, and framing to route ducts cleanly, built by our own crew." },
        { title: "Patch & Finish", text: "Drywall, paint, and trim repairs after equipment or duct work, so nothing is left unfinished." },
        { title: "Plumbing & Electrical", text: "Qualified plumbing and electrical trades coordinated alongside HVAC on the same schedule." },
        { title: "Project Management", text: "We schedule the trades, keep work moving, and keep you updated." },
      ]}
      highlightsTitle="One Contractor, Every Trade"
      highlights={[
        { title: "Qualified Trades", text: "HVAC, plumbing, and electrical work is done by qualified trades we coordinate." },
        { title: "Licensed & Insured", text: "A licensed Utah B100 general contractor, fully insured, managing the whole job." },
        { title: "Builder's Perspective", text: "We handle the framing, drywall, and finish work HVAC jobs often need." },
      ]}
      faqs={[
        {
          question: "Does Level Craft install HVAC systems itself?",
          answer: "No. HVAC work is done by qualified HVAC contractors that we coordinate as part of your remodel, addition, or build-out. We manage the schedule and handle the framing, drywall, and finish work around it.",
        },
        {
          question: "Can you coordinate plumbing and electrical on the same project?",
          answer: "Yes. We coordinate qualified plumbing and electrical trades alongside HVAC, so the whole project runs on one schedule with one point of contact.",
        },
        commonFaqs.licensed,
        commonFaqs.estimate,
        commonFaqs.area,
      ]}
      ctaTitle="Planning heating or cooling work?"
    />
  );
}
