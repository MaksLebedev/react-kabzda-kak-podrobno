import { useReducer, useState } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("UncontrolledAccordion rendering");

  // let [collapsed, setCollapsed] = useState(false);

  let [state, dispatch] = useReducer(reducer, {collapsed: false});

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        // onClick={() => setCollapsed(!collapsed)}
        onClick={() => {
          dispatch({ type: TOGGLE_COLLAPSED });
        }}
      />
      {/* <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button> */}
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");

  return (
    <h3
      onClick={() => {
        props.onClick();
      }}
    >
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");

  return (
    <>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </>
  );
}
