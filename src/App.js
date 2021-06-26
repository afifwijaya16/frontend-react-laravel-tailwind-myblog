import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar showSidebar={showSidebar} />
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </div>
  );
}

export default App;
