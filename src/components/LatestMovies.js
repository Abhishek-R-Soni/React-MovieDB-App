import React, { useState, useEffect } from "react";
import Movies from "./Movies";

const LatestMovies = (props) => {
      const [latestMovies, setLatestMovies] = useState([]);
      const API_Key = "d2167da493e1622c863708176904de3d";
      useEffect(() => {
        fetch(    
          `https://api.themoviedb.org/3/movie/latest?api_key=${API_Key}&language=en-US&page=1`
        )
          .then((data) => data.json())
          .then((data) => {
            setLatestMovies([data]);
          });
      }, []);

      return (
        <div>
          <Movies movies={latestMovies} />
        </div>
      );

};

export default LatestMovies;
