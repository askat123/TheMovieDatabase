import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../api";
import MovieCard from "../movieCard";
import { useContext } from 'react';
import { LanguageContext } from '../../context';


const Popular = () => {
    const [popular, setPopular] = useState([])
    const {dark} = useContext(LanguageContext)
    const [count,setCount] = useState(1)
    const {language} = useContext(LanguageContext)
    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${count}`)
            .then((res) => setPopular(res.data.results))
    }
    useEffect(() =>{
        getPopular(API_KEY)
    } ,[language])
    console.log(popular)
    return (
        <div id="popular" style={{
            background: dark ? "white" : "none"
        }}>
            <div className="container">
                <div className="popular">
                    {
                        popular.map(el => <MovieCard el={el}/>)
                    }
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
        </div>
    );
};

export default Popular;