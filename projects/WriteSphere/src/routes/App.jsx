import "../routes/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Slidebar from "../component/Slidebar";
import CreatePost from "../component/CreatePost";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostList from "../component/PostList";
import PostListProvider from "../store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="container-app">
        <Slidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="headFoot">
          <Header />
          {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
