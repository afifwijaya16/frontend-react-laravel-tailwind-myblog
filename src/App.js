import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar showSidebar={showSidebar} />
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
      </div>
    </Router>
  );
}

export default App;
