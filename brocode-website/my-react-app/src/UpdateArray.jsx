import React, {useState} from "react";

function UpdateArray() {
    const [gadgets, setGadgets] = useState(['Cellphone', 'tablet', 'laptop']);


    function handleAddGadgets() {
        const newGadgets = document.getElementById('addInput').value;
        document.getElementById('addInput').value = '';
        if(newGadgets =='' || newGadgets ==null){
            alert('what nothin?');
        } else {
            setGadgets(g => [ ...g, newGadgets]);
        }
        
    }

    function handleRemoveGadgets(index) {
        setGadgets(gadgets.filter((_, i) => i!== index ));
    }

    return (
        <div>
            <h2>My Gadgets</h2>
            <ul>
                {gadgets.map((gadget, index) =>
                <li key={index} onClick={() => handleRemoveGadgets(index)}> 
                    {gadget}
                </li>)}
            </ul>

            <input type="text" id="addInput" placeholder="Enter Food Name"/>
            <button onClick={handleAddGadgets}>add gadgets</button>
        </div>
    );
}

export default UpdateArray