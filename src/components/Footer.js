import React from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Footer = () => {
  return (
    <footer className="footer mt-auto p-1 border-t-2 border-gray-500 bg-slate-900">
      <span className="text-3xl flex items-center font-bold">
        <LiveTvIcon className="mr-1"></LiveTvIcon>
        <span className="text-red-500">Film</span>
        Frenzy
      </span>
    </footer>
  );
};

export default Footer;
