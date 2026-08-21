export const site = {
  name: "Golden Meadow Kennel",
  tagline: "Family-raised Golden Retriever puppies",
  email: "hello@goldenmeadowkennel.com",
  phone: "+1 (555) 214-8890",
  location: "Salem, Oregon",
  hours: "Visits by appointment, 9am – 6pm",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/puppies", label: "Our Puppies" },
  { to: "/about", label: "About" },
  { to: "/adoption", label: "Adoption Process" },
  { to: "/testimonials", label: "Families" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
