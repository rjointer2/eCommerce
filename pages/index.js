
// components
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

// hooks 
import { useState } from "react";

export default function Home() {

  // we will psss the components and pages as props 
  // for the sidebar if the prop is a bool then the style will show
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      Hello World
    </div>
  )
}
