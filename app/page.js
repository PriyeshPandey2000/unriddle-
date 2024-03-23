import React from 'react';
import BlogCard from '../components/BlogCard';
import ResearchCard from '../components/ResearchCard';
import { DotBackground } from '@/components/DotBackground';
import CoolPostForm from '@/components/CoolPostForm';
import { BentoGrid } from '@/components/ui/bento-grid';
import { BentoGridSecondDemo } from '@/components/BentoGrid';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddPostModal from '@/components/AddPostModal';



const HomePage = () => {
  // Dummy data for illustration purposes
 
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div className="h-full w-full dark:bg-black bg-black text-white relative flex flex-col items-center justify-center">
    {/* <DotBackground /> */}
    <h1 className="text-white absolute top-0 left-0 m-8 text-2xl font-bold">unriddle</h1>
    <div className="mt-16 flex-1 w-full">
        {/* Add additional components if needed */}
        <BentoGridSecondDemo />
        <div className="absolute top-20 right-10">
          {/* <AnimatedTooltip items={people} /> */}
          <AddPostModal/>
          <div className="flex items-center justify-center text-white cursor-pointer mt-4">
  {/* <FontAwesomeIcon icon={faPlus} className="mr-2" style={{ fontSize: '12px' }} />
  <span className="text-lg font-semibold">Add Post</span> */}
 
</div>


        </div>
      </div>
  </div>
  );
};

export default HomePage;
