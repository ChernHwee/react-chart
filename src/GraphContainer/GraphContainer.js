import React, { useEffect, useState } from "react";
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import Box from "../Components/Box";
import './GraphContainer.css';

const SortableBoxContainer = sortableContainer(({ children }) => <div className="container" >{children}</div>);
const SortableBox = sortableElement(({ selection, item, options, addBox, changeGraph, removeGraph }) => {
  return <Box key={selection} index={selection} item={item} options={options} addBox={addBox} changeGraph={changeGraph} removeGraph={removeGraph} />
});


const GraphContainer = () => {
  const [data, setData] = useState([]);
  const [credential, setcredential] = useState({});

  const graphOptions = ["Bar", "Pie", "Line", "Bubble"];
  useEffect(() => {
    setcredential({ userId: '123' });

    const initalData = [{
      type: "Bar",
      data: "Something"
    },
    {
      type: "Pie",
      data: "Something"
    },
    {
      type: "Line",
      data: "Something"
    },
    {
      type: "Bubble",
      data: "Something"
    },
    {
      type: "Line",
      data: "Something"
    },
    ];

    setData(initalData);
  }, []);

  const addBox = () => {
    setData(data => [...data, {
      type: "Bar",
      data: "Something"
    }]);
  }

  const changeGraph = (e, index) => {
    const newData = [...data];
    newData[index] = {
      type: e.target.value,
      data: "Something"
    };
    setData(newData);
  }

  const removeGraph = (index) => {
    console.log('Remove')
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setData(arrayMove(data, oldIndex, newIndex));
  }

  return (
    <>
      <h1>{credential.userId}</h1>
      <SortableBoxContainer axis="xy" lockOffset={30} distance={30} onSortEnd={onSortEnd} onSortStart={(_, event) => event.preventDefault()}>
        {
          data.map((item, index) => (
            <SortableBox
              key={index}
              index={index}
              selection={index}
              item={item}
              options={graphOptions}
              addBox={addBox}
              changeGraph={changeGraph}
              removeGraph={removeGraph}
            />
          ))
        }
        <Box
          key={-1}
          index={-1}
          item={{
            type: "Add",
            data: ""
          }}
          options={graphOptions}
          addBox={addBox}
          changeGraph={() => { }}
          removeGraph={() => { }}
          test={data}
        />
      </SortableBoxContainer>
    </>

  );
}

export default GraphContainer;
