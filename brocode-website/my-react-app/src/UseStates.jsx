import React, {useState} from 'react';

function UseStates() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        const namess = "Matthew";
        setName(namess);
    }

    const incrementAge = () => {
        setAge(age+ 1);
    }

    const decrementAge = () => {
        if(age > 0){
            setAge(age - 1);
        } else {
            setAge(0)
        }
    }

    const updateIsEmployed = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div className='useState'>
            <p className='state'>Name: {name}</p>
            <button className='btn-useState' onClick={updateName}>Set name</button>

            <p className='state'>Age: {age}</p>
            <button className='btn-useState' onClick={decrementAge}>Minus</button>
            <button className='btn-useState' onClick={() => setAge(0)}>RESET</button>
            <button className='btn-useState' onClick={incrementAge}>Plus</button>

            <p>{isEmployed ? "Employed" : "Not Employed"}</p>
            <button className='btn-useState' onClick={updateIsEmployed}>Set Status</button>
        </div>
    )
}

export default UseStates