import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => {
        navigate("/");
      }}
      className="py-6 mt-6 flex justify-center items-center gap-4 bg-white max-w-max mx-auto"
    >
      <h1 className="text-5xl font-semibold text-blue-600 flex items-center gap-3">
        상암맛ZIP
        <img
          src="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/raw/master/Emojis/Smilies/Thought%20Balloon.png"
          alt="Thought Balloon"
          width="60"
          height="60"
        />
      </h1>
    </header>
  );
};

export default Header;
