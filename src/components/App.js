import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const posts = [
  { id: 1, title: "My First Post", date: "2024-11-11", preview: "This is the preview of my first post." },
  { id: "2", title: "My Second Post", date: "2024-07-10", preview: "Preview of another post here." },
];

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
