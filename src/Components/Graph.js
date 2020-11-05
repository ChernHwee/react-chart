import React, { memo } from "react";
import './Components.css';

const Graph = ({something}) => {
    return (  
        <div className="graph"> {something} </div>
    );
};
export default memo(Graph);
