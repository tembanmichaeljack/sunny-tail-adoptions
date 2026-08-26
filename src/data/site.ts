export const site = {
  name: "Golden Sunny Tail",
  tagline: "Family-raised Golden Retriever puppies",
  email: "goldensunnytail@gmail.com",
  phone: "+1 (347) 460-6164 ",
  location: "Salem, Oregon",
  hours: "Visits by appointment, 9am – 6pm",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/puppies", label: "Our Puppies" },
  { to: "/about", label: "About" },
  { to: "/adoption", label: "Adoption Process" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
