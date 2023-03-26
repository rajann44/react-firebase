import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-3xl font-bold p-3 border-b-2 border-gray-500 bg-slate-900">
      <span>
        Film<span className="text-red-500">Frenzy</span>
      </span>
      <h2 className="text-lg flex items-center cursor-pointer">
        <AddCircleIcon className="mr-1" />
        Add New
      </h2>
    </div>
  );
};

export default Navbar;
