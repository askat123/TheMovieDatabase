import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../api";
import MovieCard from "../movieCard";
import { useContext } from 'react';
import { LanguageContext } from '../../context';

const Popular = () => {
    const [popular, setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const [count,setCount] = useState(1)
    const {dark} = useContext(LanguageContext)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${count}`)
            .then((res) => setPopular(res.data.results))
    }
    useEffect(() =>{
        getPopular(API_KEY)
    } ,[count,language])
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