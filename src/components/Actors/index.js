import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../api";
import Slider from "react-slick";
import {Link} from "react-router-dom";
// import {render} from "react-dom/profiling";

const Actors = ({id}) => {
    const [actors, setActors] = useState([])
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then(res => setActors(res.data.cast))
    }
    useEffect(()=> {
        getActors(API_KEY)
    } ,[])
    console.log(actors)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1300,
        cssEase: "linear"
    };
    return (
        <div id="actors">
            <div className="container">
                <Slider className="actors" {...settings}>
                    {
                        actors.map(el => (
                            <div className="actors--card">
                                <Link to={`/movie/details/actor/${el.id}`}>
                                    {
                                        el.profile_path ?
                                            <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt="img"/>
                                            :
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaHFA3JbJGxEbsw6t1xui2bzVIqNtAUGTnS29jnBUWQ&s" alt="img" style={{
                                                paddingBottom: "45px"
                                            }
                                }/>
                                }
                                </Link>
                                <h4>{el.name}</h4>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Actors;