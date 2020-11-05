import React, { useEffect, useState } from "react";
import Box from "../Components/Box";
import './GraphContainer.css';
function GraphContainer() {
  const [data, setData] = useState([]);
  const graphOptions = ["Bar", "Pie", "Line"];
  useEffect(() => {
    const initalData = [{
      type : "Bar",
      data : "Something"
    },
    {
      type : "Pie",
      data : "Something"
    },
    {
      type : "Line",
      data : "Something"
    },
    {
      type : "Bar",
      data : "Something"
    },
    {
      type : "Bar",
      data : "Something"
    },
    {
      type : "Add",
      data :""
    }];

    setData(initalData);
  }, []);

  const addBox = (index) => {
    const newData = data;
    newData[index] = {
        type : "Bar",
        data : "Something"
    };
    setData(newData => [...newData, {type: "Add" , data:""}]);
  }

  const changeGraph = (e , index) => {
    const newData = [...data];
    newData[index] = {
      type : e.target.value,
      data : "Something"
    };
    setData(newData);
  }

  const removeGraph = (index) => {
    console.log(index);
    const newData = [...data];
    newData.splice(index,1);
    setData(newData);
  }

  return (
    <div className="container">
      {
      data.map((item, index) => (
          <Box
            key={index}
            index={index}
            item={item}
            options={graphOptions}
            addBox={addBox}
            changeGraph={changeGraph}
            removeGraph={removeGraph}
            test={data}
          />
        ))
      }
    </div>
  );
}

export default GraphContainer;
