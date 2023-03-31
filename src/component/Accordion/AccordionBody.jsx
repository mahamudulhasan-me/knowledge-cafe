import React from "react";
import Accordion from "./Accordion";

const AccordionBody = () => {
  return (
    <div className="border-t border-b-clr my-12 px-[15%] text-[#e2e8f0]">
      <h1 className="text-3xl py-2 border-b border-b-clr mb-10">
        Question Answer Phase
      </h1>
      <div className="space-y-4">
        <Accordion
          question={"How Does React work?"}
          answer={
            <p>
              The difference comes in which component the data are owned. The
              state is owned locally, and the component itself updates it. Props
              are owned and read only by a parent. Props can be changed only if
              an upstream shift is caused by a callback function passed on to
              the child.
            </p>
          }
        />
        <Accordion
          question={"Difference between props vs state."}
          answer={
            <p>
              The difference comes in which component the data are owned. The
              state is owned locally, and the component itself updates it. Props
              are owned and read only by a parent. Props can be changed only if
              an upstream shift is caused by a callback function passed on to
              the child.
            </p>
          }
        />
        <Accordion
          question={"How does useState work?"}
          answer={
            <h1>
              The difference comes in which component the data are owned. The
              state is owned locally, and the component itself updates it. Props
              are owned and read only by a parent. Props can be changed only if
              an upstream shift is caused by a callback function passed on to
              the child.
            </h1>
          }
        />
        <Accordion
          question={"Purpose of useEffect other than fetching data."}
          answer={
            <h1>
              The difference comes in which component the data are owned. The
              state is owned locally, and the component itself updates it. Props
              are owned and read only by a parent. Props can be changed only if
              an upstream shift is caused by a callback function passed on to
              the child.
            </h1>
          }
        />
      </div>
    </div>
  );
};

export default AccordionBody;
