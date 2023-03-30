import React from "react";

const Bookmark = () => {
  return (
    <div>
      <h2 className="border mb-10 border-b-clr text-center text-lg font-semibold rounded-md bg-[#13263D] py-4">
        Spent Time on Read:110 Min.
      </h2>
      <div className="bg-[#13263D] p-5 rounded-md border border-b-clr">
        <h2 className="text-xl mb-6">Bookmarked Blogs: 8</h2>
        <div className="space-y-4">
          <h2 className="bg-b-clr p-2 rounded-md">
            How to Fix a Frozen Computer: 6 Ways to Troubleshoot
          </h2>
          <h2>How to Fix a Frozen Computer: 6 Ways to Troubleshoot</h2>
          <h2>How to Fix a Frozen Computer: 6 Ways to Troubleshoot</h2>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
