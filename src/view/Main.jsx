import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderCake, restockCakes, replenishCakes } from "../slices/CakeSlice";
import {
  orderIceCream,
  restockIceCream,
  replenishIceCream,
} from "../slices/IceCreamSlice";
export const Main = () => {
  const numCake = useSelector((state) => state.cake.numOfCakes);
  const numIceCream = useSelector((state) => state.iceCream.numOfIceCreams);
  const [getCakes, setGetCakes] = useState(0);
  const [getIceCreams, setIceCreams] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        Number of cakes: {numCake} &nbsp;{" "}
        <button onClick={() => dispatch(orderCake())}>Order Cake</button>&nbsp;{" "}
        <button onClick={() => dispatch(replenishCakes())}>
          Replenish Cake
        </button>
        &nbsp;{" "}
        <input
          type="text"
          onChange={(event) => {
            setGetCakes(event.target.value);
          }}
        ></input>
        <button onClick={() => dispatch(restockCakes(getCakes))}>
          Get Cakes
        </button>
      </p>
      <p>
        Number of ice cream: {numIceCream} &nbsp;{" "}
        <button onClick={() => dispatch(orderIceCream())}>
          Order Ice Cream
        </button>
        &nbsp;{" "}
        <button onClick={() => dispatch(replenishIceCream())}>
          Replenish Ice Cream
        </button>
        &nbsp;{" "}
        <input
          type="text"
          onChange={(event) => {
            setIceCreams(event.target.value);
          }}
        ></input>
        <button onClick={() => dispatch(restockIceCream(getIceCreams))}>
          Get Ice Creams
        </button>
      </p>
    </div>
  );
};
