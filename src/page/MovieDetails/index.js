import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../api";
import {BsFillMenuButtonWideFill, BsFillPlayFill} from "react-icons/bs";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import {IoBookmarkOutline} from "react-icons/io5";
import Actors from "../../components/Actors";
import Videos from "../../components/Videos";

const MovieDetails = () => {
    const {movieId} = useParams()
    console.log(movieId)
    const [details,setDetails] = useState({})
    const [modal,setModal] = useState(false)
    const getDetails = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
            .then(res => setDetails(res.data))
    }
    useEffect(() =>{
        console.log(movieId)
        getDetails(API_KEY)
    }, [])
    console.log(details)
    const {title,poster_path,backdrop_path,overview,release_date,genres,runtime,vote_average} = details


    const [click, setClick] = useState(false)



    const [progressValue,setProgresValue] = useState(0)
    const progressEndValue = Math.round(vote_average * 10)



    useEffect(() => {
        let progressStartValue = 0;
        let progress = setInterval(() => {
            progressStartValue++
            setProgresValue(progressStartValue)
            if (progressStartValue === progressEndValue){
                clearInterval(progress)
            }
    }, 10)
        return (() =>{
        clearInterval(progress)
    });
}, [progressEndValue]);
    // const res = {
    //     background: `background: conic-gradient(#17c78f ${progressValue * 3.6}deg, #0f1b16 0deg)`
    // }
    return (
        <>
            <div id="details">
                <div className="container">
                    <div className="details" style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%), 
                    url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`
                    }}>
                        <div className="details--img">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt=""
                                 onClick={() => setModal(true)}
                            />
                            <div className="details--img__modal" style={{
                                display: modal ? "block" : "none"
                            }}>
                                <h4 onClick={() => setModal(false)}>X</h4>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt=""/>
                            </div>
                            <div className="details--img__blur" onClick={ () =>setModal(false)} style={{
                                background: modal ? "rgba(0,0,0,0.58)" : "",
                                zIndex: modal ? "10" : ""
                            }}></div>
                        </div>
                        <div className="details--text">
                            <h1 style={{
                                color: "white",
                                fontWeight: "800"
                            }}>{title}</h1>
                            <div className="details--text__release">
                                <h3>{release_date}</h3>
                                <div className="details--text__release--genres">
                                    {genres?.map(el => <p>{el.name} . .</p>)}
                                </div>
                                <h4>{Math.floor(runtime / 60)}h {runtime % 60}min</h4>
                            </div>
                            <div className="details--text__rated">
                                <div className="details--text__rated--krug" style={{
                                   background: `conic-gradient(green ${Math.round(vote_average * 10) * 3.59}deg,#253625 0deg)`
                                }}>
                                    <h2>{progressValue}%</h2>
                                </div>
                                <h1>Рейтинг</h1>
                                <div className="details--text__rated--icon1"><BsFillMenuButtonWideFill/></div>
                                <div className="details--text__rated--icon2" onClick={() => setClick(!click)} style={{
                                    color: click ? "orangered" : "",
                                }}><AiFillHeart/></div>
                                <div className="details--text__rated--icon3"><IoBookmarkOutline/></div>
                                <div className="details--text__rated--icon4"><AiFillStar/></div>
                                <button><h4><BsFillPlayFill/>Воспроизвести трейлер</h4></button>
                            </div>
                            <h5 style={{
                                color: "#7b7b83",
                                fontSize: "26px",
                                margin: "20px 0"
                            }}><i>"{details.tagline}"</i></h5>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Actors id={movieId}/>
            <Videos id={movieId}/>
        </>
    );
};

export default MovieDetails;