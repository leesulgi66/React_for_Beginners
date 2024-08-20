import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id,coverImg, title, genres}) {
    return (
        <div>
            <Link to={`movie/${id}`}><img src={coverImg} art={title} /></Link>
            <h2><Link to={`movie/${id}`}>{title}</Link></h2>
            <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>);
}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired, 
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;