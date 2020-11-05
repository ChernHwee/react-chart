import React, { useEffect, useState } from "react";
import Box from "../Components/Box";
import './GraphContainer.css';
const GraphContainer = () => {
  const [data, setData] = useState([{
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
  }]);

  const graphOptions = ["Bar", "Pie", "Line"];
  const addBox = (index) => {
    const newData = data;
    newData[index] = {
        type : "Bar",
        data : "Something"
    };
    newData.push({
      type : "Add",
      data :""
    })
    setData(newData);
    console.table(newData);
  }
  return (
    <div className="container">
      {
        data.map((item, index) => (
          <Box 
            index={index}
            type={item.type}
            data={item.data}
            options={graphOptions}
            addBox={addBox}
          />
        ))
      }
    </div>
  );
}

export default GraphContainer;
