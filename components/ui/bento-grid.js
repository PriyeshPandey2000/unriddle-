// Import the cn utility 
import React from 'react';
const { cn } = require("@/utils/cn");

// BentoGrid component
export const BentoGrid = ({ className, children }) => {
  return (
    React.createElement('div', {
      className: cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )
    }, children)
  );
};

// BentoGridItem component
export const BentoGridItem = ({ className, title, description, header, icon, children }) => {
  return (
    React.createElement('div', {
      className: cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )
    }, [
      // Include the children (additional text) inside the BentoGridItem above other elements
      children,
      React.createElement('div', {
        className: "flex flex-col"
      }, [
        React.createElement('div', {
          className: "group-hover/bento:translate-x-2 transition duration-200"
        }, [
          icon,
          React.createElement('div', {
            className: "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-0 mt-2"
          }, title),
        ]),
        React.createElement('div', {
          className: "font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 "
        }, description),
      ]),
      header,
    ])
  );
};