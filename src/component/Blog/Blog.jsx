import React from "react";
import Tag from "../Tag/Tag";

const Blog = (props) => {
  const {
    user_name,
    user_profile_pic,
    blog_title,
    blog_cover_pic,
    reading_time,
    publish_date,
  } = props.blog;
  return (
    <div className="border border-b-clr rounded-md p-3">
      <img
        src={blog_cover_pic}
        alt=""
        className="rounded-md h-[350px] w-full"
      />
      <div>
        <div className="flex justify-between my-5">
          <div className="flex gap-3 ">
            <img
              src={user_profile_pic}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-xl">{user_name}</h3>
              <p className="text-sm">{publish_date}</p>
            </div>
          </div>

          <div>
            <p>Read Time: {reading_time} Minutes</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl">{blog_title}</h1>
      <Tag />
    </div>
  );
};

export default Blog;
