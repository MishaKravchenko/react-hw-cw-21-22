import React from 'react';

import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import Comments from "./components/comments/comments";
import "./App.css"

function App() {
  return (
      <div className={"container_general"}>
        <Users/>
        <Posts/>
        <Comments/>
      </div>
  );
}

export default App;