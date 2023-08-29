import React from "react";
import BlogGridItem from "./BlogGridItem";

const BlogGrid = ({ posts }) => {

  return (
    <div className="grid grid-cols-1 gap-4 mt-10">
      <hr className="w-1/2 place-self-center bg-violet-900"/>
      <h3 className=" text-center text-2xl font-bold text-violet-800">
        Tous nos articles
      </h3>
      {posts.map((post) => (
        <BlogGridItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
