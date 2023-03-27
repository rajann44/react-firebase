import React, { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { moviesTable } from "../database/firebase";
import Swal from "sweetalert2";

const AddMovie = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
  });

  const addMovie = async () => {
    setLoading(true);
    try {
      await addDoc(moviesTable, form);
      Swal.fire({
        title: "Movie Data Uploaded",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
      setForm({ title: "", year: "", description: "", image: "" });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
    setLoading(false);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-1">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Add Movie
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="title" className="leading-7 text-sm text-white">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={(event) =>
                    setForm({ ...form, title: event.target.value })
                  }
                  className="w-full bg-gray-100 bg-opacity-95 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="year" className="leading-7 text-sm text-white">
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={form.year}
                  onChange={(event) =>
                    setForm({ ...form, year: event.target.value })
                  }
                  className="w-full bg-gray-100 bg-opacity-95 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="image" className="leading-7 text-sm text-white">
                  Image URL
                </label>
                <input
                  id="image"
                  name="image"
                  className="w-full bg-gray-100 bg-opacity-95 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.image}
                  onChange={(event) => {
                    setForm({ ...form, image: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full bg-gray-100 bg-opacity-95 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={form.description}
                  onChange={(event) => {
                    setForm({ ...form, description: event.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={addMovie}
                className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg"
              >
                {loading ? (
                  <ThreeCircles height={20} color="white"></ThreeCircles>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMovie;
