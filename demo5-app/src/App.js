import { useState } from "react";
import Home from "./Home";

import { LikedSongs } from "./LikedSongs";

import { TodoList } from "./TodoList";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    <header>
      <div className="name">
        Spotify
      </div>
    </header>
    switch (page) {
      case "home":
        return <Home />;
      
      case "liked-songs":
        return <LikedSongs />;
      
      case "todo":
        return <TodoList />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <nav className="sidebar">
        
        <ul>
          <li onClick={() => setPage("home")}>Home</li>
         
          <li onClick={() => setPage("liked-songs")}>Liked Songs</li>
          
          <li onClick={() => setPage("todo")}>Todo List</li>
        </ul>
      </nav>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}
