import React, {useState} from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function colorEventHandeler(event) {
        setColor(event.target.value);
    }
    return (
        <div className="color-picker-container">
            <h1>Color picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>{color} </p>
                </div>
            <br />
            <label>Select a color: </label> <br />  
            <input type="color" defaultValue={color} onChange={colorEventHandeler} />
        </div>
    );
}

export default ColorPicker