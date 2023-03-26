import React, { useState } from "react";
import ReactStars from "react-stars";

const Card = () => {
  const [moviesInfo, setMoviesInfo] = useState([
    {
      name: "Iron Man",
      year: 2008,
      rating: 4.5,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
    },
    {
      name: "Iron Man",
      year: 2008,
      rating: 3,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {moviesInfo.map((movie, index) => {
        return (
          <div
            className="bg-stone-900 p-2 hover:-translate-y-2 cursor-pointer mt-2 transition-all duration-300"
            key={index}
          >
            <img className="h-80" src={movie.poster}></img>
            <h1>
              <span className="text-red-300 font-bold">Name: </span>
              {movie.name}
            </h1>
            <div className="flex items-center">
              <span className="text-red-300 font-bold mr-1">Rating: </span>
              <ReactStars
                size={20}
                half={true}
                value={movie.rating}
                edit={false}
              />
            </div>
            <div>
              <span className="text-red-300 font-bold">Year: </span>
              {movie.year}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
