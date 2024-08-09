import React, {useState} from "react";

function UpdateObject() {
    const [car, setCar] = useState({year: 2024, 
                                    manufacturer: "Ford", 
                                    model:"Mustang",
                                });
    
    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleManufacturerChange(event) {
        setCar(c => ({...c, manufacturer: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>You're Favorite car is {car.year} {car.manufacturer} {car.model}</p>
            <input type="text" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.manufacturer} onChange={handleManufacturerChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />
        </div>
        )
}

export default UpdateObject