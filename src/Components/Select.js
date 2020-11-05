import React, { memo } from "react";
import './Components.css';

const Select = ({options, selected}) => {
    const choices = options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ));
    return (  
        <select name="graphSelection" id="graphSelection" defaultValue={selected}>
            {choices}
        </select>
    );
};
export default memo(Select);
