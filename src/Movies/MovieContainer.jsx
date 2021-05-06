import Movie from './Movie.jsx'

const MovieContainer = ({movies}) => {

    // calls the 'Movie' function from Movie.jsx and passes in the props, which returns array of JSX components
    const renderedMovies = movies.map( movie => <Movie title={movie.Title} year={movie.Year} genre={movie.Genre} poster={movie.Poster}/>);
    


    return(
        <div>
            {renderedMovies}
        </div>
    )
    

}

export default MovieContainer;