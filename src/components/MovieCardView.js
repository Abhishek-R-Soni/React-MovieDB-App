import React from "react";
import '../css/MovieCardView.css'

const MovieCardView = (props) => {
  return (
      <div class="col-sm-3">
          <div className="card">
                {
                    props.img == null ? <img src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt="not found"></img>
                                : <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt="not found" ></img>
                }
                <p>{props.title}</p>
                <div class="text-center">
                    <button class="btn btn-primary">Show</button>
                </div>
            </div>
        </div>
  );
};

export default MovieCardView;

