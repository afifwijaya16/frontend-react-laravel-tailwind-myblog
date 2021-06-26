import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import Post from "./pages/Post";

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/category" exact component={Category} />
          <Route path="/post" exact component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
