import clsx from "clsx";
import React from "react";

const Button = (props) => {
  const { data, btnType, handleClick } = props;
  const btnClasses = clsx(
    "w-full border-b-5 p-2 sm:p-3 font-bold text-3xl rounded-lg transition-all duration-300 ease-in-out",
    {
      "text-dark-text border-btn-shadow bg-btn-normal active:bg-btn-normal-active":
        btnType == "primary",
      "text-white bg-btn-normal border-btn-shadow-secondary bg-btn-secondary active:bg-btn-secondary-active":
        btnType == "secondary" || btnType == "special",
      "text-white border-btn-shadow-tertiary bg-btn-tertiary active:bg-btn-tertiary-active":
        btnType == "tertiary",
    },
  );
  const btnWdith = clsx({
    "basis-1/4 p-2": btnType == "primary" || btnType == "special",
    "basis-1/2 p-2": btnType == "secondary" || btnType == "tertiary",
  });

  return (
    <div className={btnWdith}>
      <button className={btnClasses} onClick={handleClick} value={data}>
        {data}
      </button>
    </div>
  );
};

export default Button;
