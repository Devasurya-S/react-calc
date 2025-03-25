import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [calc, setCalc] = useState({
    res: null,
    expr: null,
    operation: true
  });

  const reset = () => {
    setCalc({ ...calc, res: null, expr: null, operation: true });
  };

  const handleResultClick = () => {
    const result = eval(`(${calc.expr})`);
    setCalc({...calc, res:result, operation: false})
  };

  const handleDelClick = () => {
    if (!calc.expr) return; // Do nothing if expr is already null or empty
    const updatedExpr = calc.expr.slice(0, -1);
    setCalc({ ...calc, expr: updatedExpr || null, operation: true });
  }

  const handleNumClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    const crntExpr = calc.expr;

    if (crntExpr === null) {
      setCalc({ ...calc, expr: value });
    } else {
      setCalc({ ...calc, expr: String(crntExpr) + value, operation: true });
    }
  };

  return (
    <div className="flex h-screen flex-wrap items-center justify-center">
      <div className="md:w-xl bg-primary flex flex-col gap-4 p-2">
        <div className="text-xl font-bold text-white">calc</div>
        <div className="bg-screen min-h-19 rounded-lg p-4 py-5 text-end text-3xl font-bold text-white">
          {calc.operation ? calc.expr : calc.res}
        </div>
        <div className="bg-secondary flex flex-wrap rounded-lg p-1 sm:p-3">
          <Button handleClick={handleNumClick} data="7" btnType="primary" />
          <Button handleClick={handleNumClick} data="8" btnType="primary" />
          <Button handleClick={handleNumClick} data="9" btnType="primary" />
          <Button handleClick={handleDelClick} data="DEL" btnType="special" />
          <Button handleClick={handleNumClick} data="4" btnType="primary" />
          <Button handleClick={handleNumClick} data="5" btnType="primary" />
          <Button handleClick={handleNumClick} data="6" btnType="primary" />
          <Button handleClick={handleNumClick} data="+" btnType="primary" />
          <Button handleClick={handleNumClick} data="1" btnType="primary" />
          <Button handleClick={handleNumClick} data="2" btnType="primary" />
          <Button handleClick={handleNumClick} data="3" btnType="primary" />
          <Button handleClick={handleNumClick} data="-" btnType="primary" />
          <Button handleClick={handleNumClick} data="." btnType="primary" />
          <Button handleClick={handleNumClick} data="0" btnType="primary" />
          <Button handleClick={handleNumClick} data="/" btnType="primary" />
          <Button handleClick={handleNumClick} data="*" btnType="primary" />
          <Button handleClick={reset} data="RESET" btnType="secondary" />
          <Button handleClick={handleResultClick} data="=" btnType="teritiary" />
        </div>
      </div>
    </div>
  );
};

export default App;
