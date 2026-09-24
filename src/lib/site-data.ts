/**
 * Single source of truth for all site content.
 * Every media file lives in /public and is referenced with an absolute path,
 * so it works identically on the preview, on Lovable hosting and on Vercel.
 */

export const img = {
  logo: "/logo.jpeg",

  // Photoreal hero / feature photography
  spanishVilla: "/homes/hero-spanish.jpg",
  luxuryVilla: "/homes/hero-villa.jpg",
  luxuryHouse: "/homes/hero-luxury.jpg",
  courtyard: "/homes/hero-courtyard.jpg",

  // Real house photography
  modernVilla: "/homes/home-1.jpg",
  classicMansion: "/homes/home-2.jpg",
  greyClassic: "/homes/home-3.jpg",
  completedVilla: "/homes/home-4.jpg",
  brickFront: "/homes/home-5.jpg",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "Barkat Engineering",
  short: "Barkat",
  fullName: "Barkat Engineering — Construction Company",
  tagline: "Construction Company",
  logo: img.logo,
  address: "Office No. 502, Building 92, Street-E, Midway Commercial-A, Bahria Town, Karachi.",
  addressShort: "Bahria Town, Karachi",
  email: "barkatengineering@gmail.com",
  phone: "+92 333 3366 523",
  phoneTel: "+923333366523",
  secondaryPhone: "+92 300 3195 203",
  secondaryPhoneTel: "+923003195203",
  facebook: "https://facebook.com/AspiringHomes",
  instagram: "https://instagram.com/aspiringhomesofficial",
  youtube: "https://youtube.com/@AspiringHomes",
  whatsapp: "https://wa.me/923333366523?text=Hello%20Barkat%20Engineering%2C%20I%20would%20like%20a%20free%20quotation.",
  hours: [
    { day: "Monday to Thursday", time: "9am to 7pm" },
    { day: "Friday", time: "9am to 12pm & 3pm to 7pm" },
    { day: "Saturday", time: "9am to 5pm" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    title: "We Build Your Vision — Building A Better Tomorrow",
    highlight:
      "Since 2016, Barkat Engineering is Karachi's trusted name for Civil, Electrical & Mechanical construction. Residential, Commercial & Industrial — We do it all.",
    image: img.luxuryVilla,
  },
];

export const stats = [
  { value: "8+", label: "Years experience" },
  { value: "A-Z", label: "Complete solutions" },
  { value: "100%", label: "Quality focused" },
];

/** Branded social posts — shown full-frame, never cropped. */
export const posts = [
  { image: "/posts/post1.jpeg", title: "Modern Facade Residence", location: "Karachi", tag: "Latest Project" },
  { image: "/posts/post2.jpeg", title: "Building A Better Tomorrow", location: "Karachi", tag: "Latest Project" },
];

export const videoGallery = [
  { src: "/videogrally/video1.mp4", poster: img.luxuryVilla, title: "Project Showreel", caption: "Design to handover" },
  { src: "/videogrally/video2.mp4", poster: img.spanishVilla, title: "Spanish Villa Walkthrough", caption: "Elevation study" },
  { src: "/videogrally/video3.mp4", poster: img.luxuryHouse, title: "Site Progress Film", caption: "Grey structure" },
  { src: "/videogrally/video4.mp4", poster: img.courtyard, title: "Interior Reveal", caption: "Finishing stage" },
];

export const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner · DHA Phase 6, Lahore",
    quote:
      "They handled drawings, material and labour themselves. I never had to chase three different people — the house looks exactly like the 3D they showed me.",
  },
  {
    name: "Sana Iqbal",
    role: "Homeowner · Citi Housing, Faisalabad",
    quote:
      "The elevation work is beautiful and the finishing is clean. Weekly site photos meant I always knew what was happening on my plot.",
  },
  {
    name: "Bilal Hussain",
    role: "Developer · Sialkot",
    quote:
      "Professional team, honest quantities and on-time slabs. We handed them a second duplex before the first one was even finished.",
  },
  {
    name: "Hira Nadeem",
    role: "Homeowner · Model Town, Lahore",
    quote:
      "Interiors were designed and installed by the same team that built the structure, so nothing had to be broken and redone.",
  },
  {
    name: "Usman Tariq",
    role: "Homeowner · Johar Town, Lahore",
    quote:
      "Renovation of a 20-year-old house — new facade, new layout, finished in time and within the range they quoted.",
  },
];

export const services = [
  {
    slug: "civil-construction",
    title: "Civil Construction",
    image: img.luxuryHouse,
    short: "Grey structure, finishing, renovation and interior works for houses, plazas and apartments.",
    body: "Grey structure, finishing, renovation and interior works for houses, plazas and apartments.",
  },
  {
    slug: "electrical-works",
    title: "Electrical Works",
    image: img.brickFront,
    short: "Complete wiring, lighting systems, industrial panels and maintenance.",
    body: "Complete wiring, lighting systems, industrial panels and maintenance for residential, commercial and industrial projects.",
  },
  {
    slug: "mechanical-works",
    title: "Mechanical Works",
    image: img.greyClassic,
    short: "HVAC, plumbing, fabrication and mechanical installations.",
    body: "HVAC, plumbing, fabrication and mechanical installations delivered by an experienced team.",
  },
];

export const registrations = [
  "Lahore",
  "Faisalabad",
  "Sialkot",
  "Architecture Design",
  "Interior Design Studio",
  "Construction Company",
];

export const process = [
  { step: "01", title: "Consultation", body: "We discuss your plot, budget and requirements — in person or on WhatsApp." },
  { step: "02", title: "Design", body: "Floor plans and 3D elevations are developed until you approve every detail." },
  { step: "03", title: "Execution", body: "Grey structure and finishing delivered by our own supervised site teams." },
  { step: "04", title: "Handover", body: "Final finishing, cleaning and a walk-through before your keys are handed over." },
];

export const galleryImages = [
  img.luxuryVilla,
  img.spanishVilla,
  img.luxuryHouse,
  img.courtyard,
  img.modernVilla,
  img.classicMansion,
  img.greyClassic,
  img.completedVilla,
  img.brickFront,
];
