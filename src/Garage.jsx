import React, { useState } from 'react';

const Cars = () => {

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [colour, setColour] = useState('');
    const [year, setYear] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(brand, model, colour, year);
    };

    return(
        <>

            <h1>My Car</h1>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Colour: {colour}</p>
            <p>Year: {year}</p>



            <form>
                <label> Brand: </label>
                <input name="brand"
                    type="text"
                    value={brand}
                    onChange={e => setBrand(e.target.value)} />


                <label> Model: </label>
                <input name="model"
                    type="text"
                    value={model}
                    onChange={e => setModel(e.target.value)} />


                <label> Colour: </label>
                <input name="colour"
                    type="text"
                    value={colour}
                    onChange={e => setColour(e.target.value)} />


                <label> Year: </label>
                <input name="year"
                    type="text"
                    value={year}
                    onChange={e => setYear(e.target.value)} />
                <br/>
            </form>
        </>
    )
}

export default Cars;