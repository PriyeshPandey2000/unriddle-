// Import necessary libraries and components
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Define the BentoGridSecondDemo component
export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {/* Map through the items array and render BentoGridItem for each item */}
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        >
          {/* Text inside the BentoGridItem */}
          <div className="text-center my-4 text-neutral-500 dark:text-neutral-300">
            {/* Displaying different text based on the specific item */}
            {getTextContent(item.title)}
          </div>
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
}

// Define a function to get different text based on the item title
function getTextContent(title) {
  switch (title) {
    case "The Dawn of Innovation":
      return (
        <div>
          <h2>"Psychological Impact of Virtual Reality Therapy "</h2>
          <p><br></br>
            "Psychological Impact of Virtual Reality Therapy" explores the
            transformative effects of using virtual reality (VR) as a
            therapeutic tool. Virtual reality therapy involves immersing
            individuals in computer-generated environments to simulate real-life
            situations.
          </p>
        </div>
      );
    case "The Digital Revolution":
      return (
        <div>
          <h2>" Embracing the power of technology "</h2>
          <p><br></br>
            "From reshaping industries and communication to influencing culture and societal structures.
          </p>
        </div>
      );
    case "The Art of Design":
      return (
        <div>
          <h2>" Explore the use of augmented reality (AR) in healthcare for medical training, patient education, and surgical navigation. "</h2>
          <p><br></br>
            
          </p>
        </div>
      );
    case "The Power of Communication":
      return (
        <div>
          {/* <h2>" Quantum Computing's Impact on Cryptography "</h2> */}
          <p><br></br>
            "Explore how the rise of quantum computing technology may pose a threat to traditional cryptographic methods and delve into the development of quantum-resistant cryptographic techniques. This unique characteristic grants quantum computers unparalleled computational power, posing a potential threat to current cryptographic systems.
          </p>
        </div>
      );
    default:
      return "Sample Text";
  }
}

// Define a Skeleton component for placeholder content
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6 rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

// Define an array of items with their respective properties
const items = [
  {
    title: "The Dawn of Innovation",
    description: <span className="text-green-500">TAGS: Virtual Reality Therapy, Immersive Treatment</span>,
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description:  <span className="text-green-500">TAGS: Communication Shift, Societal Restructuring</span>,
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: <span className="text-green-500">TAGS:AR in Healthcare, Surgical Navigation</span>,
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
    <span className="text-green-500">TAGS: Quantum Computing Threat, Cyber Defense</span>,
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
