import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { Link } from 'react-router-dom';

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [wait, setWait] = useState(true);
    const onClick = () => window.location.reload();
    const getMovies = async ()=>{
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setWait((x)=>!x);
    }
    console.log(movie);

    useEffect(()=>{
        getMovies();
    },[]);
    return (
    <div className={styles.container}>
        <div className={styles.cover}>
            {wait ? <div onClick={onClick} className={styles.loader}>Loading..</div> : 
            <div>
                <Link to={movie.url}>
                <img className={styles.img} src={movie.large_cover_image} />
                </Link>
                <h2>{movie.year}</h2>
                <h1>{movie.title} </h1>
                <h2>❤like {movie.like_count} / Rating {movie.rating}</h2>
                <p>|{movie.genres.map(g=> <span key={g}>{g}|</span>)}</p>
                <p>{movie.description_full}</p>
                <hr />
            </div>
            }
        </div>
    </div>)
}
export default Detail;