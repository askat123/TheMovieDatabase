import './App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./page/MovieDetails";
import ActorDetails from "./page/ActorDetails";

function App() {
  return (
    <div className="">
        <Header/>
      <Routes>
          <Route path={"/"} element={ <Home/> }></Route>
          <Route path={"/popular"} element={ <Popular/> }></Route>
          <Route path={"/topRated"} element={ <TopRated/> }></Route>
          <Route path={"/movie/details/:movieId"} element={<MovieDetails/>}/>
          <Route path={"/movie/details/actor/:actorId"} element={<ActorDetails/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
