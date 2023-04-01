import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);

  // this function get time from blog child
  const getReadingTime = (time) => {
    setReadingTime(readingTime + time);
  };

  // this function get blog title from blog child
  const getBookmarkedItem = (blog) => {
    let alreadyMarked = bookmarked.find((item) => item === blog);
    if (alreadyMarked) {
      toast("Already Bookmarked This Blog");
    } else {
      let bookmark = [...bookmarked, blog];
      setBookmarked(bookmark);
    }
  };
  // fetching data from our local json/feck data
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div className="md:px-[15%] px-[5%] md:grid grid-cols-12 gap-8 mt-10">
      <div className="col-span-8 ">
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog.id}
            readingTime={getReadingTime}
            bookmarked={getBookmarkedItem}
          />
        ))}
      </div>
      <div className="col-span-4 ">
        <Bookmark readingTime={readingTime} bookmarked={bookmarked} />
      </div>
    </div>
  );
};

export default BlogsContainer;
