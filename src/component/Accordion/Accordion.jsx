import React from "react";

const Accordion = (props) => {
  return (
    <>
      <div className="collapse border border-b-clr rounded-xl">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {props.question}
        </div>
        <div className="collapse-content border-t border-b-clr">
          <p>{props.answer}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
