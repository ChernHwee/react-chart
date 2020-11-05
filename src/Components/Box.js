import React, { memo } from "react";
import './Components.css';
import "font-awesome/css/font-awesome.css";
import Select from "./Select";
import Graph from "./Graph";

const Box = ({type, options, addBox, index}) => {
  let display = "";
  switch (type) {
    case "Add":
        display = (
            <div className="box center gray">
                <p className="fa fa-5x fa-plus" onClick={() => addBox(index)}/>
            </div>
        );
        break;
    default:
        display = (
            <div className="box">
                <p className="fa fa-2x fa-times end"/>
                <Select options={options} selected={type}/>
                <Graph/>
            </div>
        );
        break;
  }
  return (
    <>{display}</>
  );
};
export default Box;
