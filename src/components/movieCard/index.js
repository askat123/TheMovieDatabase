import React from 'react';
import {Link} from "react-router-dom";
import {RiStarSFill} from "react-icons/ri";

const MovieCard = ({el}) => {
    return (
        <div id='movieCard'>
            <div className="movieCard">
                <Link to={`/movie/details/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""/>
                </Link>
                <h3>{el.title}</h3>
                <h4>{el.release_date}</h4>
                <i><span> <RiStarSFill/> </span>{el.vote_average}</i>
            </div>
        </div>
    );
};

export default MovieCard;