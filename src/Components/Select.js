import React, { memo } from "react";
import './Components.css';

const Select = ({options, selected, index, onChange}) => {
    const choices = options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ));
    return (  
        <select name="graphSelection" id="graphSelection" value={selected} onChange={(e) => onChange(e, index)}>
            {choices}
        </select>
    );
};
export default memo(Select);
