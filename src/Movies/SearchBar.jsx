const SearchBar = ({updateSearch, makeRequest, search}) => {
    return(
    <>
        
        <input value={search} onChange={(e) => updateSearch(e)}/>
        <button onClick={makeRequest}>Search</button>
    </>
    )
}

export default SearchBar;