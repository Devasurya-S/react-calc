import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="flex h-screen flex-wrap items-center justify-center">
      <div className="md:w-xl bg-primary flex flex-col gap-4 p-2">
        <div className="text-xl font-bold text-white">calc</div>
        <div className="bg-screen rounded-lg p-4 py-5 text-end text-3xl font-bold text-white">
          399,981
        </div>
        <div className="bg-secondary flex flex-wrap rounded-lg p-1 sm:p-3">
          <Button data="7" btnType="primary" />
          <Button data="8" btnType="primary" />
          <Button data="9" btnType="primary" />
          <Button data="DEL" btnType="special" />
          <Button data="4" btnType="primary" />
          <Button data="5" btnType="primary" />
          <Button data="6" btnType="primary" />
          <Button data="+" btnType="primary" />
          <Button data="1" btnType="primary" />
          <Button data="2" btnType="primary" />
          <Button data="3" btnType="primary" />
          <Button data="-" btnType="primary" />
          <Button data="." btnType="primary" />
          <Button data="0" btnType="primary" />
          <Button data="/" btnType="primary" />
          <Button data="x" btnType="primary" />
          <Button data="RESET" btnType="secondary" />
          <Button data="=" btnType="teritiary" />
        </div>
      </div>
    </div>
  );
};

export default App;
