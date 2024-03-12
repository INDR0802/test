import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";

const BottleData = () => {
  let [bottles, setBottles] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/public/bottleData.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  let buttonHandle = (data) => {
    let newCart = [...cart, data];
    setCart(newCart);
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl my-5 font-extrabold">
        Added to Cart : {cart.length}
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} data={bottle} buttonHandle={buttonHandle} />
        ))}
      </div>
    </div>
  );
};

export default BottleData;
