// 7. Component where the player names are printed to the screen (called from Shop)
// 9. Destructured item array passed in as a prop
// 10. We can then loop through the array and print values to a screen
const Basket = ({items}) => {

    const Display = ({itemName}) => <li> {itemName} </li>
    return(
        <ul>
            {items.map((itemName, i) => (
                <Display key={i} itemName={itemName}/>
            ))}
        </ul>
    )
}

export default Basket;