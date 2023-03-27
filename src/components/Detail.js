import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Dna } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../database/firebase";
import Reviews from "./Reviews";

const Detail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
    rating: 0,
    usersRated: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const reqInfo = doc(fireDB, "movies", id);
      const movie = await getDoc(reqInfo);
      setMovieInfo(movie.data());
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start justify-center">
      {loading ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <>
          <img
            className="h-96 md:sticky top-24"
            src={movieInfo.image}
            alt={movieInfo.title}
          ></img>
          <div className="md:ml-4 ml-0 md:w-1/2 w-full mt-2">
            <h1 className="text-3xl font-bold text-gray-300">
              {movieInfo.title}{" "}
              <span className="text-xl">({movieInfo.year})</span>
            </h1>
            <ReactStars
              className="mt-2"
              size={20}
              half={true}
              value={movieInfo.rating / movieInfo.usersRated}
              edit={false}
            />
            <p className="mt-2">{movieInfo.description}</p>
            <Reviews
              id={id}
              currentRating={movieInfo.rating}
              usersRated={movieInfo.usersRated}
            ></Reviews>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
