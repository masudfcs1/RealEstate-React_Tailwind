import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { HouseContext } from "./HouseContext";

const HouseList = () => {
  const [houses, loading] = useContext(HouseContext);
  console.log(houses);
  return <div> HouseList </div>;
};

export default HouseList;
