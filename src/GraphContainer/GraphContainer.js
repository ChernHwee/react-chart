import React, { useEffect, useState } from "react";
import Box from "../Components/Box";
import './GraphContainer.css';
function GraphContainer() {
  return (
    <div className="container">
      <Box type="Graph" />
      <Box type="Add" />
      <Box type="Add"/>
      <Box type="Add"/>
    </div>
  );
}

export default GraphContainer;
