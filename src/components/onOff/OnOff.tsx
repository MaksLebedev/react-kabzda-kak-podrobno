import React, { useState } from "react";

type PropsType = {
  on: boolean;
  onChange: (on: boolean) => void;
};

export const OnOff = (props: PropsType) => {

  // const changeColorHandler = () => {
  //   setOn(!on);
  // };

  console.log('on:', props.on);
  

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "solid black 1px",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? "green" : "",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "solid black 1px",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: !props.on ? "red" : "",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    border: "solid black 1px",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : "red",
  };

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          props.onChange(true)
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onChange(false)
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

//-------------------------------------------------------------------

// import React from "react";
// import "./OnOffStyles.css";

// type OnOffPropsType = {
//   control: boolean;
// };

// export const OnOff = (props: OnOffPropsType) => {
//   if (props.control === true) {
//     return (
//       <div style={{ margin: "50px" }}>
//         <span className="squareOn" style={{ backgroundColor: "green" }}>
//           ON
//         </span>
//         <span className="squareOff">OFF</span>
//         <span className="radioBtn" style={{ backgroundColor: "green" }}></span>
//       </div>
//     );
//   } else {
//     return (
//       <div style={{ margin: "50px" }}>
//         <span className="squareOn">ON</span>
//         <span className="squareOff" style={{ backgroundColor: "red" }}>
//           OFF
//         </span>
//         <span className="radioBtn" style={{ backgroundColor: "red" }}></span>
//       </div>
//     );
//   }
// };

// export const OnOff = (props: OnOffPropsType) => {
//   if (props.control === true) {
//     return (
//       <div style={{ margin: "50px" }}>
//         <span className="squareOn" style={{ backgroundColor: "green" }}>
//           ON
//         </span>
//         <span className="squareOff">OFF</span>
//         <span className="radioBtn" style={{ backgroundColor: "green" }}></span>
//       </div>
//     );
//   } else {
//     return (
//       <div style={{ margin: "50px" }}>
//         <span className="squareOn">ON</span>
//         <span className="squareOff" style={{ backgroundColor: "red" }}>
//           OFF
//         </span>
//         <span className="radioBtn" style={{ backgroundColor: "red" }}></span>
//       </div>
//     );
//   }
// };
