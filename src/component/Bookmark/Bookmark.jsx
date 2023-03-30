import React from "react";

const Bookmark = (props) => {
  return (
    <div className="sticky top-5">
      <h2 className="border  text-[#6047EC] mb-10 border-b-clr text-center text-lg font-semibold rounded-md bg-[#13263D] py-4">
        Spent Time on Read: {props.readingTime} Min.
      </h2>
      <div className="bg-[#13263D] p-5 rounded-md border border-b-clr">
        <h2 className="text-xl mb-6 border-b-2 border-b-clr">
          Bookmarked Blogs: 8
        </h2>
        <div className="space-y-4">
          <h2 className="bg-b-clr p-3 rounded-md">
            How to Fix a Frozen Computer: 6 Ways to Troubleshoot
          </h2>
          <h2 className="bg-b-clr p-3 rounded-md">
            How to Fix a Frozen Computer: 6 Ways to Troubleshoot
          </h2>
          <h2 className="bg-b-clr p-3 rounded-md">
            How to Fix a Frozen Computer: 6 Ways to Troubleshoot
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
