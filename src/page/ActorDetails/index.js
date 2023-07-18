import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {SlLogin} from "react-icons/sl";
import axios from "axios";
import {API_KEY} from "../../api";
import MovieActor from "../../components/MovieActor";
import { useContext } from 'react';
import { LanguageContext } from '../../context';

const ActorDetails = () => {
    const {actorId} = useParams()
    console.log(actorId)
    const [isFullBio, setIsFullBio] = useState(false)    
    const {language} = useContext(LanguageContext)
    const [isBio, setIsBio] = useState(false)

    const toggleBio = () => {
        setIsFullBio(!isFullBio);
        setIsBio(!isBio);
    }

    const [actorDetails, setActorDetails] = useState({})
    const getActorDetails = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=${language}`)
            .then(res => setActorDetails(res.data))
    }
    useEffect( ()=>{
        getActorDetails(API_KEY)
    },[language])
    console.log(actorDetails)

    const {profile_path,biography,name,also_known_as,birthday,place_of_birth} = actorDetails


    return (
        <div id="person">
            <div className="container">
                <div className="person">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="person--text">
                        <h2>{name}</h2>
                        <h3>Biography</h3>
                        <p>
                            {isFullBio ? biography : (biography && biography.length > 300 ? biography.slice(0, 300) : biography)}
                            {biography && biography.length > 300 && (
                                <span style={{color: 'blue', cursor: 'pointer'}} onClick={toggleBio}>
                  {isBio ? '  скрыть' : '...more'}
                </span>
                            )}
                        </p>
                        <div className="person--text__group">
                            <div className="person--text__group--block">
                                <h3>Also known as</h3>
                                <div>{also_known_as?.slice(0,7).map((el) => <li key={el}>{el}</li>)}</div>
                            </div>
                            <div className="person--text__group--block">
                                <h3>Birthday</h3>
                                <p>{birthday ? birthday :"---"}</p>
                            </div>
                            <div className="person--text__group--block">
                                <h3>Place of birth</h3>
                                <p>{place_of_birth}</p>
                            </div>
                        </div>
                    <MovieActor id={actorId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;