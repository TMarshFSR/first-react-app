const Movie = (props) => {
        return(
        <div>
            <h3>{props.title}</h3>
            <p>Year: {props.year}</p>
            <p>Genre: {props.genre}</p>
            <img src={props.poster} alt="poster"/>
        </div>
    )
}
// come back and destructure

export default Movie;