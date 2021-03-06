import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Category from "./pages/category/Category";
import CreateCategory from "./pages/category/CreateCategory";
import UpdateCategory from "./pages/category/UpdateCategory";
import Post from "./pages/Post";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar showSidebar={showSidebar} />
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/category" exact component={Category} />
          <Route path="/category/create" exact component={CreateCategory} />
          <Route path="/category/update/:id" exact component={UpdateCategory} />
          <Route path="/post" exact component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
