import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-white">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-purple
        duration-300 "
        >
         {icon.name}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;