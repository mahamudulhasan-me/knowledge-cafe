import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <div className="px-[15%] grid grid-cols-12 gap-8 mt-10">
      <div className="col-span-8 ">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} />
        ))}
      </div>
      <div className="col-span-4 sticky top-0">
        <Bookmark />
      </div>
    </div>
  );
};

export default BlogsContainer;
