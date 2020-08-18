import React, {useEffect, useState} from "react";
import Movies from "./Movies";

const UpcomingMovies = (props) => {
      const [upcomingMovies, setUpcomingMovies] = useState([]);
      const API_Key = "d2167da493e1622c863708176904de3d";
      useEffect(() => {
        fetch(
        `https://api.themoviedb.org/3/movie/upcoming/?api_key=${API_Key}&language=en-US&page=1`
        )
        .then((data) => data.json())
        .then((data) => {
        setUpcomingMovies([...data.results]);
      });
}, []);

      return (
        <div>
          <Movies movies={upcomingMovies} />
        </div>
      );
};

export default UpcomingMovies;
