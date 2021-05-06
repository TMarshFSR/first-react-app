// this component contains a form with a text field and button
// 3. newItem is passed from Shop into the addItems function, and the onChange listener invokes the newItem method, passing the value up to Shop
// 6. submitHandler and handleAdd are passed into the AddItems function

const AddItems = ({ submitHandler, newItem, handleAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter item:"
                type="text"
                onChange={newItem}
            />
            <button
                type="button"
                onClick={handleAdd}
            >
                Add Item
            </button>
        </form>
    );
}

export default AddItems;