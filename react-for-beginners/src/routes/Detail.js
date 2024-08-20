import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [wait, setWait] = useState(true);
    const getMovies = async ()=>{
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setWait((x)=>!x);
    }
    console.log(movie);

    useEffect(()=>{
        getMovies();
    },[]);
    return (<div>
        {wait ? "Just a minute" : 
        <div>
            <img src={movie.large_cover_image} />
            <h2>{movie.year}</h2>
            <h1>{movie.title}</h1>
            <p>geners : {movie.genres.map(g=> <span key={g}>{g}/</span>)}</p>
            <p>{movie.description_full}</p>
            <p></p>
        </div>
        }
    </div>)
}
export default Detail;