import React from 'react';
import Popular from "../Popular";

const Home = () => {
    return (
        <div id="home">
            <div className="container">
                <div className="home" >
                    <h1>Добро пожаловать.Добро пожаловать.</h1>
                    <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                    <input type="search" placeholder={"Найти фильм,сериал,персону......"}/>
                    <button>Search</button>
                </div>
                <center style={{
                    padding: "0 35px"
                }}>
                    <h2 style={{
                        color: "white",
                        padding: "20px 30px",
                        background: "#460202",
                        borderRadius: "10px"
                    }}>
                        Новые фильмы...
                    </h2>
                    <Popular/>
                </center>
            </div>
        </div>
    );
};

export default Home;