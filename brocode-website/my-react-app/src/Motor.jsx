import React, {useState} from "react";

function Motor() {
    const [motor, setMotor] = useState([]);
    const [motorYear, setYear] = useState(new Date().getFullYear());
    const [motorManufacturer, setManufacturer] = useState('');
    const [motorModel, setMotorModel] = useState('');

    function HandleAddCar() {
        const newMotor = {
            year: motorYear,
            manufacturer: motorManufacturer,
            model: motorModel,
        }

        setMotor(m => [...m, newMotor]);
        setYear(new Date().getFullYear())
        setManufacturer('')
        setMotorModel('')
    }

    function handleRemoveCar(index){
        setMotor(motor.filter((_, i) => i !== index ));
    }

    function handleYearChange(event) {
        setYear(event.target.value)
    }

    function handleManufacturerChange(event) {
        setManufacturer(event.target.value)
    }
    function handleModelChange(event){
        setMotorModel(event.target.value)
    }

    return(
    <div>
        <h2>List of all Motor Objects</h2>
        <ul>
            {motor.map((motors, index) =>
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {motors.year} {motors.manufacturer} {motors.model}
                </li>
            )}
        </ul>

        <input type="year" value={motorYear} onChange={handleYearChange}/>
        <input type="text" value={motorManufacturer} onChange={handleManufacturerChange} placeholder="Enter the Manufacturer"/>
        <input type="text" value={motorModel} onChange={handleModelChange} placeholder="Enter the model"/>
        
        <button onClick={HandleAddCar}>add Motor</button>
    </div>)


}

export default Motor