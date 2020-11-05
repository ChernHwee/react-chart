import React, { memo } from "react";
import './Components.css';
import "font-awesome/css/font-awesome.css";
import Select from "./Select";
import Graph from "./Graph";

const Box = ({index, item, options, addBox, changeGraph, removeGraph}) => {
  let display = "";
  switch (item.type) {
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
                <p className="fa fa-2x fa-times end" onClick={() => removeGraph(index)}/>
                <Select options={options} selected={item.type} index={index} onChange={changeGraph}/>
                <Graph something={item.type}/>
            </div>
        );
        break;
  }
  return (
    <>{display}</>
  );
};
export default memo(Box);
