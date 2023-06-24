import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../api";
import MovieCard from "../movieCard";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [count,setCount] = useState(1)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${count}`)
            .then((res) => setPopular(res.data.results))
    }
    useEffect(() =>{
        getPopular(API_KEY)
    } ,[count])
    console.log(popular)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        popular.map(el => <MovieCard el={el}/>)
                    }
                </div>
                    <div className="pagination">
                        <button onClick={() => setCount(count > 1 ? count - 1 : 1 )} style={{
                            padding: "5px 20px",
                            background: "red",
                            borderRadius: "10px"
                        }}>Back</button>
                        <h3 style={{
                            color :"white"
                        }}>{count}</h3>
                        <button onClick={() => setCount(count + 1)} style={{
                            padding: "5px 20px",
                            background: "green",
                            borderRadius: "10px"
                        }}>Next</button>
                    </div>
            </div>
        </div>
    );
};

export default Popular;