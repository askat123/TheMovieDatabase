import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../api";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/movieCard";
import { useContext } from 'react';
import { LanguageContext } from '../../context';

const Search = () => {
  const { movieName } = useParams();
  const [ser, setSer] = useState([]);
  const {language} = useContext(LanguageContext)
  const getSet = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${language}&query=${movieName}`
    ).then((res) => setSer(res.data.results));
  };
  useEffect(() => {
    getSet(API_KEY);
  }, [ser,language]);
  console.log(ser);
  return (
    <div id="Search">
      <div className="container">
        <div className="search">
          {ser.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
