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
            <div className="add box">
                <p className="fa fa-5x fa-plus" onClick={() => addBox()}/>
            </div>
        );
        break;
    default:
        display = (
            <div className="modify box">
                <button onClick={() => removeGraph(index)} className="close">X</button>
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
