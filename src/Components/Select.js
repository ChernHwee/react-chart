import React, { memo } from "react";
import './Components.css';

const Select = () => {
    return (  
        <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    );
};
export default memo(Select);
