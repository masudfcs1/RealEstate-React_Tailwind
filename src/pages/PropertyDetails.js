import React from "react";

import { housesData } from "../data";
import { Link, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  console.log(house);

  return <div> PropertyDetails </div>;
};

export default PropertyDetails;
