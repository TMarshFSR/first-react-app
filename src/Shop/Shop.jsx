import { useState } from "react";
import AddItems from './AddItems';
import Basket from './Basket';

const Shop = () => {
    // 1. two states, one to store names, one to store an array of items 
    const [itemName, setItemName] = useState("");
    const [items, setItems] = useState([]);

    // 2. function that sets the item name state, passing the event as the parameter
    const newItem = e => {
        setItemName(e.target.value);
    }

    // 4. stops page refreshing when form is submitted
    const submitForm = (event) => {
        event.preventDefault();
    }
    // 5. This saves the item name into the array using a spread
    const handleAdd = () => {
        const appendedItemList = [...items, itemName];
        setItems(appendedItemList);
    }

    // 8. Items passes as a prop into <Basket> (line 30)
    return (
        <>
            <h1>Shopping List</h1>
            <AddItems newItem={newItem} submitHandler={submitForm} handleAdd={handleAdd} />
            <Basket items={items} />
        </>
    )

}

export default Shop;