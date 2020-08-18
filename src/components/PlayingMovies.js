import React, {useState, useEffect} from "react";
import Movies from "./Movies";

const PlayingMovies = (props) => {
    const [playingMovies, setPlayingMovies] = useState([]);
    const API_Key = "d2167da493e1622c863708176904de3d";
    

    useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
    )
      .then((data) => data.json())
      .then((data) => {
        setPlayingMovies([...data.results]);
      });
    }, [])

    return (
      <div>
        <Movies movies={playingMovies} />
      </div>
    );
};

export default PlayingMovies;
