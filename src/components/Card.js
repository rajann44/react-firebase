import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { FallingLines } from "react-loader-spinner";
import { moviesTable } from "../database/firebase";
import { doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Card = () => {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  //TODO: Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.
  useEffect(() => {
    async function getMovieData() {
      setLoading(true);
      setMoviesInfo([]); //I have explicitly set it empty, so that there is no previous state stored (to avoid duplicate cards on screen)
      const movieData = await getDocs(moviesTable);
      movieData.forEach((movie) => {
        setMoviesInfo((prv) => [...prv, { ...movie.data(), id: movie.id }]);
      });
      setLoading(false);
    }
    getMovieData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <FallingLines color="white"></FallingLines>
        </div>
      ) : (
        moviesInfo.map((movie, index) => {
          return (
            <Link to={`/detail/${movie.id}`}>
              <div
                className="bg-stone-900 p-2 hover:-translate-y-2 cursor-pointer mt-2 transition-all duration-300"
                key={index}
              >
                <img className="h-80" src={movie.image}></img>
                <h1>
                  <span className="text-red-300 font-bold">Name: </span>
                  {movie.title}
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
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Card;
