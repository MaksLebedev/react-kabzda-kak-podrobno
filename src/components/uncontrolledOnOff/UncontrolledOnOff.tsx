import React, { useState } from "react";

type PropsType = {
  // on: boolean;
  onChange: (on: boolean) => void;
};

export const UncontrolledOnOff = (props: PropsType) => {
  let [on, setOn] = useState(false);

  // const changeColorHandler = () => {
  //   setOn(!on);
  // };

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "solid black 1px",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "green" : "",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "solid black 1px",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: !on ? "red" : "",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    border: "solid black 1px",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  };

  const onClicked = () => {
    setOn(true);
    props.onChange(true);
  };

  const offClicked = () => {
    setOn(false);
    props.onChange(false);
  };

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
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
