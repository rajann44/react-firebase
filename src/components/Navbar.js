import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-3xl font-bold p-3 border-b-2 border-gray-500 bg-slate-900">
      <Link to={"/"}>
        <span>
          Film<span className="text-red-500">Frenzy</span>
        </span>
      </Link>
      <Link to={"/add"}>
        <h2 className="text-lg flex items-center cursor-pointer">
          <AddCircleIcon className="mr-1" />
          Add New
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
