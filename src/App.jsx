import React, { useEffect, useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [calc, setCalc] = useState({
    res: null,
    expr: null,
    operation: true,
  });

  const MAX_LENGTH = 20;

  const reset = () => {
    setCalc({ ...calc, res: null, expr: null, operation: true });
  };

  const handleResultClick = () => {
    let crntExpr = calc.expr;
    if (!crntExpr) return;

    crntExpr = crntExpr.replace(/[+\-*/]+$/, "");

    try {
      let result = Function(`"use strict"; return (${crntExpr})`)();

      if (typeof result === "number" && !isNaN(result) && isFinite(result)) {
        result = parseFloat(result.toFixed(10));
      } else {
        throw new Error("Invalid calculation");
      }

      setCalc({ res: result, expr: crntExpr, operation: false });
    } catch (error) {
      setCalc({ res: "Error", expr: crntExpr, operation: false });
    }
  };

  const handleDelClick = () => {
    if (!calc.expr) return;
    const updatedExpr = calc.expr.slice(0, -1);
    setCalc({ ...calc, operation: true, expr: updatedExpr || null });
  };

  const handleNumClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    const crntExpr = calc.expr || "";
    if (crntExpr.length >= MAX_LENGTH) return;
    if (crntExpr === null) {
      setCalc({ ...calc, expr: value });
    } else {
      setCalc({ ...calc, expr: String(crntExpr) + value, operation: true });
    }
  };

  const btnData = [
    { data: "7", type: "primary", fn: handleNumClick },
    { data: "8", type: "primary", fn: handleNumClick },
    { data: "9", type: "primary", fn: handleNumClick },
    { data: "DEL", type: "special", fn: handleDelClick },
    { data: "4", type: "primary", fn: handleNumClick },
    { data: "5", type: "primary", fn: handleNumClick },
    { data: "6", type: "primary", fn: handleNumClick },
    { data: "+", type: "primary", fn: handleNumClick },
    { data: "1", type: "primary", fn: handleNumClick },
    { data: "2", type: "primary", fn: handleNumClick },
    { data: "3", type: "primary", fn: handleNumClick },
    { data: "-", type: "primary", fn: handleNumClick },
    { data: ".", type: "primary", fn: handleNumClick },
    { data: "0", type: "primary", fn: handleNumClick },
    { data: "/", type: "primary", fn: handleNumClick },
    { data: "*", type: "primary", fn: handleNumClick },
    { data: "RESET", type: "secondary", fn: reset },
    { data: "=", type: "tertiary", fn: handleResultClick },
  ];

  return (
    <div className="flex h-screen flex-wrap items-center justify-center">
      <div className="md:w-xl bg-primary flex flex-col gap-4 p-2">
        <div className="text-xl font-bold text-white">calc</div>
        <div className="bg-screen min-h-19 rounded-lg p-4 py-5 text-end text-3xl font-bold text-white">
          {calc.operation ? calc.expr : calc.res}
        </div>
        <div className="bg-secondary flex flex-wrap rounded-lg p-1 sm:p-3">
          {btnData.map((btn, index) => (
            <Button
              key={index}
              handleClick={btn.fn}
              data={btn.data}
              btnType={btn.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
