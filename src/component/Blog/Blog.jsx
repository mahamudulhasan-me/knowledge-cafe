import { faBlog, faBookmark, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="border border-b-clr rounded-md p-3 mb-8 ">
      <img
        src={blog_cover_pic}
        alt=""
        className="rounded-md md:h-[350px] w-full"
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
              <h3 className="md:text-xl">{user_name}</h3>
              <p className="text-sm">{publish_date}</p>
            </div>
          </div>

          <div className="flex  gap-3 items-center">
            <p className="text-sm">{reading_time} Min. Read</p>

            <div
              className="text-xl text-[#e2e8f0] cursor-pointer"
              onClick={() => props.bookmarked(blog_title)}
            >
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
        </div>
      </div>
      <h1 className="md:text-2xl text-xl md:font-semibold">
        <a href="">{blog_title}</a>
      </h1>
      <div className="flex gap-2 my-4">
        <Tag icon={<FontAwesomeIcon icon={faBlog} />} title="Blog Post" />
        <Tag icon={<FontAwesomeIcon icon={faTag} />} title="Troubleshooting" />
        <Tag icon={<FontAwesomeIcon icon={faTag} />} title="IT" />
      </div>
      <p
        className="underline cursor-pointer text-lg text-[#6047EC]"
        onClick={() => props.readingTime(reading_time)}
      >
        Make as read.
      </p>
    </div>
  );
};

export default Blog;
