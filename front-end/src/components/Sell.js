import React from "react";

initialState = {
    category: "",
    subcategory: "",
    item: "",
    price: ""
};

const Sell = () => {

    return (
        <form>
            <label htmlFor="item">Item: </label>
            <input name="item" type="text" onChange={handleChange} />

            <label htmlFor="price">Price: </label>
            <input name="price" type="number" />

            <label htmlFor="category">Category: </label>
            <input name="category" type="text" list="cat">
                <datalist id="cat">
                    <option value="Animal Products" />
                    <option value="Beans" />
                    <option value="Cereals" />
                    <option value="Fruits" />
                    <option value="Peas" />
                    <option value="Roots & Tubbers" />
                    <option value="Seeds & Nuts" />
                    <option value="Vegetables" />
                    <option value="Other" />
                </datalist>
            </input>

            <label htmlFor="subcategory">Sub-Category</label>
            <input name="subcategory" type="text" list="subcat">
                <datalist id="subcat">
                    <option value="LiveStock" />
                    <option value="Poultry" />
                    <option value="None"/>
                </datalist>
            </input>
        </form>
    )

};

export default Sell;