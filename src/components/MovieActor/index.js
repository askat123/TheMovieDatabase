
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../api";
import MovieCard from "../movieCard";
import {Link} from "react-router-dom";

const MovieActor = ({id}) => {
        const [movieActor,setMovieActor] = useState([])
    const getMovieActor = (key) => {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then(res => setMovieActor(res.data.cast))
    }
    useEffect(()=> {
        getMovieActor(API_KEY)
    },[])
    console.log(movieActor)
    return (
        <div id="movieActor">
            <div className="movieActor">
                    {movieActor.map(el => (
                        <div className="movieActor--card">
                            <Link to={`/movie/details/${el.id}`}>
                                {  el.poster_path?
                                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""/>
                                    : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0I5QoFn2U8Dyty2nKzSI-Hkls53U6nf4hEg&usqp=CAU" width={250}  alt='img'/>
                                }
                            </Link>
                            <h4>{el.title}</h4>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MovieActor;