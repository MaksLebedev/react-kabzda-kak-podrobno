import React from "react";
import "./OnOffStyles.css";

type OnOffPropsType = {
  control: boolean;
};

export const OnOff = (props: OnOffPropsType) => {
  if (props.control === true) {
    return (
      <div style={{ margin: "50px" }}>
        <span className="squareOn" style={{ backgroundColor: "green" }}>
          ON
        </span>
        <span className="squareOff">OFF</span>
        <span className="radioBtn" style={{ backgroundColor: "green" }}></span>
      </div>
    );
  } else {
    return (
      <div style={{ margin: "50px" }}>
        <span className="squareOn">ON</span>
        <span className="squareOff" style={{ backgroundColor: "red" }}>
          OFF
        </span>
        <span className="radioBtn" style={{ backgroundColor: "red" }}></span>
      </div>
    );
  }
};

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
