import React, { memo } from "react";
import './Components.css';
import "font-awesome/css/font-awesome.css";
import Select from "./Select";
import Graph from "./Graph";

const Box = ({type}) => {
  let display = "";
  switch (type) {
    case "Add":
        display = (
            <div className="box center gray">
                <p className="fa fa-5x fa-plus"/>
            </div>
        );
        break;
    case "Graph":
        display = (
            <div className="box">
                <p className="fa fa-2x fa-times end"/>
                <Select/>
                <Graph/>
            </div>
        );
        break;
    default:
        break;
  }
  return (
    <>{display} </>
  );
};
export default memo(Box);
