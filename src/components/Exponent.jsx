import { useState, useEffect } from "react";

const Exponent = ({ count, number }) => {
  const [exponent, setExponent] = useState("");

  useEffect(() => {
    let string = "";
    for (let i = 1; i <= number; i++) {
      string += count + (i === number ? "" : " * ");
    }
    setExponent(string);
  }, [count, number]);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>{`${number}`}</sup>
      </p>
      <p className="exponent-result">
        {exponent} = <span className="total">{count ** number}</span>
      </p>
    </div>
  );
};

export default Exponent;
