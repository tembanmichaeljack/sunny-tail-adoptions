import puppy1 from "@/assets/puppy-1.jpg";
import puppy2 from "@/assets/puppy-2.jpg";
import puppy3 from "@/assets/puppy-3.jpg";
import puppy4 from "@/assets/puppy-4.jpg";
import puppy5 from "@/assets/puppy-5.jpg";
import puppy6 from "@/assets/puppy-6.jpg";

export type Puppy = {
  id: string;
  name: string;
  image: string;
  sex: "Male" | "Female";
  age: string;
  color: string;
  weight: string;
  price: string;
  status: "Available" | "Reserved";
  temperament: string[];
  description: string;
  included: string[];
};

export const puppies: Puppy[] = [
  {
    id: "sunny",
    name: "Sunny",
    image: puppy1,
    sex: "Female",
    age: "9 weeks",
    color: "Light cream",
    weight: "8 lbs",
    price: "$1,450",
    status: "Available",
    temperament: ["Gentle", "Cuddly", "Quick learner"],
    description:
      "Sunny is the calm one of her litter — the puppy who settles into your lap the moment you sit down. She is already sleeping through the night in her crate, walks toward new people with a soft wagging tail, and responds beautifully to her name. A wonderful match for a first-time owner or a home with young children.",
    included: ["Vet health check", "First vaccinations & deworming", "Microchip", "Starter food & blanket"],
  },
  {
    id: "cooper",
    name: "Cooper",
    image: puppy2,
    sex: "Male",
    age: "10 weeks",
    color: "Deep red gold",
    weight: "11 lbs",
    price: "$1,600",
    status: "Available",
    temperament: ["Confident", "Playful", "Loyal"],
    description:
      "Cooper is bold, bright and full of joy. He is the first to greet visitors and the last to leave a game of fetch. His deep red coat comes from a champion field line, and he already retrieves a soft toy across the yard. Best suited to an active family with a fenced yard and time for daily play.",
    included: ["Vet health check", "First vaccinations & deworming", "Microchip", "Two-year health guarantee"],
  },
  {
    id: "daisy",
    name: "Daisy",
    image: puppy3,
    sex: "Female",
    age: "8 weeks",
    color: "Golden",
    weight: "7 lbs",
    price: "$1,400",
    status: "Reserved",
    temperament: ["Sweet", "Observant", "Easy-going"],
    description:
      "Daisy watches the world with her head tilted before joining in. She is quiet, tidy, and the easiest of the litter to settle — perfect for a calmer household or apartment life with regular walks. Already used to grooming, nail trims and gentle handling.",
    included: ["Vet health check", "First vaccinations & deworming", "Microchip", "Grooming starter kit"],
  },
  {
    id: "maple",
    name: "Maple",
    image: puppy4,
    sex: "Male",
    age: "11 weeks",
    color: "Light golden",
    weight: "12 lbs",
    price: "$1,550",
    status: "Available",
    temperament: ["Energetic", "Social", "Food motivated"],
    description:
      "Maple never runs out of happy. He loves open grass, sprinklers and every dog he meets. Because he is highly food motivated, training comes easily — he already knows sit, come and the beginning of loose-leash walking. Ideal for runners, hikers, or a family with older kids.",
    included: ["Vet health check", "First vaccinations & deworming", "Microchip", "Training guide"],
  },
  {
    id: "biscuit",
    name: "Biscuit",
    image: puppy5,
    sex: "Male",
    age: "9 weeks",
    color: "Cream",
    weight: "9 lbs",
    price: "$1,500",
    status: "Available",
    temperament: ["Affectionate", "Snuggly", "Calm"],
    description:
      "Biscuit is happiest pressed against someone he loves. Raised alongside his sister, he is well socialised with other dogs and completely unbothered by household noise. He naps on cue, travels well in the car, and has the classic broad, soft English-cream head.",
    included: ["Vet health check", "First vaccinations & deworming", "Microchip", "Comfort blanket from home"],
  },
  {
    id: "willow",
    name: "Willow",
    image: puppy6,
    sex: "Female",
    age: "10 weeks",
    color: "Cream with gold ears",
    weight: "9 lbs",
    price: "$1,650",
    status: "Available",
    temperament: ["Curious", "Clever", "Devoted"],
    description:
      "Willow is the thinker. She solves puzzle toys, remembers routines after a day or two, and follows her person from room to room. Her steady, people-focused nature makes her a strong candidate for therapy or service training as well as family life.",
    included: ["Vet health check", "First vaccinations & deworming", "Microchip", "Puzzle toy & food starter"],
  },
];
