import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';



const initialState = {
    category: "",
    subcategory: "",
    item: "",
    price: ""
};


const Sell = () => {

    const [item, setItem] = useState(initialState);

    const handleChange = e => {
        setItem({
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        return item;
    }


    return (
        <form className="sellitem" onSubmit={handleSubmit} >
            <TextField name="item" placeholder="Item" onChange={handleChange} />

            <TextField name="price" type="number" placeholder="Price" onChange={handleChange} />

            <TextField name="category" type="text" select value="Animal Products"  helperText="Please Select a Category" onChange={handleChange} >
                    <MenuItem label="Animal Products" >Animal Products</MenuItem>
                    <MenuItem value="Beans" >Beans</MenuItem>
                    <MenuItem value="Cereals" >Cereals</MenuItem>
                    <MenuItem value="Fruits" >Fruits</MenuItem>
                    <MenuItem value="Peas" >Peas</MenuItem>
                    <MenuItem value="Roots & Tubbers" >Roots & Tubbers</MenuItem>
                    <MenuItem value="Seeds & Nuts" >Seeds & Nuts</MenuItem>
                    <MenuItem value="Vegetables" >Vegetables</MenuItem>
                    <MenuItem value="Other" >Other</MenuItem>
            </TextField>

            <TextField name="subcategory" type="text" select placeholder="Sub-Category" onChange={handleChange} >
                    <MenuItem value="LiveStock" >LiveStock</MenuItem>
                    <MenuItem value="Poultry" >Poultry</MenuItem>
                    <MenuItem value="None">None</MenuItem>
            </TextField>
        </form>
    )

};

export default Sell;