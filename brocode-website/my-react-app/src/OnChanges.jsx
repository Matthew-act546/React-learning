import React, {useState} from "react";

function OnChanges() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [music, setMusic] = useState(0);
    const [comment, setComment] = useState("");
    const [person, setPerson] = useState("Matthew")
    const [handsome, setHandesome] = useState();

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleMusicChange(event) {
        setMusic(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    
    function handlePersonChange(event) {
        setPerson(event.target.value);
    }

    function handleHandsomeChange(event) {
        setHandesome(event.target.value);
    }
    return(
        <div>
            <input type="text" onChange={handleNameChange} />
            <p>Name: {name}</p>
            <br />
            <input type="number" onChange={handleQuantityChange} />
            <p>Quantity: {quantity === 1 ? "0": quantity}</p>
            <br />

            <input type="range" defaultValue={"0"} onChange={handleMusicChange} /> 
            <p>Music audio: {music}</p>
            <br />
            <textarea onChange={handleCommentChange} placeholder="Comment" rows='8' cols='20'></textarea>
            <p>Comment: {comment}</p>
            <br />
            <select value={person} onChange={handlePersonChange}>
                <option value="Matthew">Matthew</option>
                <option value="Lheslie">Lheslie</option>
                <option value="Michael">Michael</option>
                <option value="Gabriel">Gabriel</option>
                <option value="Chariss">Chariss</option>
                <option value="Bianca">Bianca</option>
            </select>
            
            <p>Person: {person}</p>

            <p>Is matthew handsome?</p>
            <label> 
                <input type="radio" value='YES!!!' checked={handsome === 'YES!!!'} onChange={handleHandsomeChange}/>
                &nbsp;&nbsp;YES!
            </label>
            <br />
            <label>
                <input type="radio" value='no :(' checked={handsome === 'no :('} onChange={handleHandsomeChange}/>
                &nbsp; no 
            </label>
            <p>The user said is: {handsome}</p>
        </div>
    )
}

export default OnChanges