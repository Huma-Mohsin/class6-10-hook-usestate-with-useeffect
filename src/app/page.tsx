"use client"
// Importing the Image component from Next.js and hooks from React

import { useEffect, useState } from "react";

// Defining the default functional component for the Home page
export default function Home() {
  // Initializing a state variable 'count' with initial value 0, and 'setCount' function to update it
  const [count, setCount] = useState(0);

  // Defining a function 'increment' to increase the count value by 1
  const increment = () => {
    setCount(count + 1); // Updating 'count' state with incremented value
  };

  // useEffect hook runs a side effect after the component is rendered
  useEffect(() => {
    console.log("Fire first useEffect"); // Logs a message when the component is first rendered
  }, []); // Empty dependency array ensures this runs only once on initial render

  // Rendering the component's UI
  return (
    // Wrapper div with grid layout, minimum height, padding, and custom font styling
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Paragraph element displays 'Count' and the current count value */}
      {/* Calls 'increment' function on click to increase count */}
      <p onClick={increment} className="text-center text-bold text-red-500 text-8xl cursor-pointer">Count: {count}</p>
    </div>
  );
}
