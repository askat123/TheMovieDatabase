import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../api";

const Videos = ({id}) => {
    const [video,setVideo]= useState([])
    const getVideo = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res => setVideo(res.data.results))
    }
    useEffect(() =>{
        getVideo(API_KEY)
    },[])
    console.log(video)



    return (
        <div id="videos">
            <div className="container">
                <div className="videos">
                    {
                        video.slice(0,1).map(el => (
                            <iframe width="660" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Videos;