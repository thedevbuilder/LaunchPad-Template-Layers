/**
 * -------------------------------------------------------------------------------------------
 * SITE CONFIGURATION GUIDE
 * -------------------------------------------------------------------------------------------
 * This file is the "Brain" of your landing page. 
 * Most of the text, links, and images you see on the site can be changed right here.
 * * Instructions for Non-Coders:
 * 1. Text: Anything inside "quotes" can be safely edited.
 * 2. Links: Ensure links start with # (for sections) or https:// (for external pages).
 * 3. Images: To change images, replace the files in the @/assets/images folder.
 * -------------------------------------------------------------------------------------------
 */

import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

export const siteConfig = {
  /** The name of your website. Shows up in the browser tab and Google search results. */
  title: "Layers: LaunchPad Template",

  /** A short summary of your site (1-2 sentences). Important for SEO ranking. */
  description: "A SaaS Landing Page template for SaaS startups.",

  /** * The links at the top of your page. 
   * 'label' is the text people see. 'link' is where they go when clicked.
   */
  navLinkHeader: [
    { label: "Home", link: "#home" },
    { label: "Features", link: "#Features" },
    { label: "Integrations", link: "#Integrations" },
    { label: "Faqs", link: "#faqs" },
  ],

  /** The links at the very bottom of your page (e.g., Legal or Social links). */
  navLinkFooter: [
    { link: "#", label: "Contact" },
    { link: "#", label: "Privacy Policy" },
    { link: "#", label: "Terms & Conditions" },
  ],

  /** * The "Hero" is the first thing people see. 
   * 'hook' is the small text above the title. 
   */
  Hero: {
    hook: "$7.5M seed round raised",
    title: "Impactful design, created effortlessly",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero libero soluta enim, et est perferendis ad, facilis velit sapiente iure.",
  },

  /** * The scrolling bar of company logos. 
   * Add or remove objects here to show who uses your product. 
   */
  LogoTicker: {
    logos: [
      { name: "Quantum", image: quantumLogo },
      { name: "Acme Corp", image: acmeLogo },
      { name: "Echo Valley", image: echoValleyLogo },
      { name: "Pulse", image: pulseLogo },
      { name: "Outside", image: outsideLogo },
      { name: "Apex", image: apexLogo },
      { name: "Celestial", image: celestialLogo },
      { name: "Twice", image: twiceLogo },
    ],
  },

  /** The section right below the Hero to introduce your main concept. */
  introduction: {
    headline: "Introducing Layers",
    hook: "Your Creative Process deserve better",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laudantiuum tempore rem, quasi excepturi.",
    conclusion: "That's why we built layers",
  },

  /** * Your product's superpowers. 
   * 'powerWord' is usually styled differently (e.g., colorful or bold). 
   */
  features: {
    headline: "Features",
    hook: "Where Power meets",
    powerWord: "simplicity",
    images: {
      avatar1: avatar1,
      avatar2: avatar2,
      avatar3: avatar3,
    },
    /** A simple list of feature names. Just add more strings to add more features. */
    list: [
      "Asset Library",
      "Code Preview",
      "Flow Mode",
      "Smart Sync",
      "Auto Layout",
      "Fast Search",
      "Smart Guides",
    ],
  },

  /** Section showing which other apps your SaaS connects to. */
  Integrations: {
    headline: "Integration",
    hook: "Plays well with",
    powerWord: "others",
    paragraph: "Layers seamlessly connect with your favorite tools, making it easy to plug in any workflow.",
  },

  /** Frequently Asked Questions. */
  Faqs: {
    headline: "faqs",
    hook: "Questions? We've got",
    powerWord: "answers",
    /** Each FAQ needs a 'question' and an 'answer'. */
    QA: [
      {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power.",
      },
      {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours.",
      },
      {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned.",
      },
      {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online.",
      },
      {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects and share feedback.",
      },
    ],
  },
};