import { site } from "./site";

export type Faq = { question: string; answer: string };

// Answers shared across service pages. Keep them consistent with the business facts in AGENTS.md.
export const commonFaqs = {
  licensed: {
    question: "Is Level Craft licensed and insured?",
    answer: `Yes. ${site.name} is a licensed ${site.license.type} and is insured, with general liability coverage.`,
  },
  estimate: {
    question: "Do you offer free estimates?",
    answer: `Yes. Call ${site.phone.display} to schedule a site visit. We'll scope the work with you and follow up with a written estimate.`,
  },
  area: {
    question: "What areas do you serve?",
    answer: `We're based in ${site.city} and take on projects across all of ${site.serviceArea}, from ${site.serviceCities[2]} and ${site.serviceCities[3]} to ${site.serviceCities[10]}. Have a project outside ${site.serviceArea}? Get in touch. We consider out-of-state work case by case.`,
  },
} satisfies Record<string, Faq>;
