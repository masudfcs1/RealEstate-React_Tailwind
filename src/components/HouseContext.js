import React, { createContext, useState } from "react";
import { housesData } from "../data";
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, sethouses] = useState(housesData);
  const [country, setcountry] = useState("Location (any)");
  const [countries, setcountries] = useState([]);
  const [property, setproperty] = useState("Property type()");
  const [properties, setproperties] = useState([]);
  const [price, setprice] = useState("price range (any)");
  const [loading, setloading] = useState(false);

  return (
    <HouseContext.Provider
      value={{
        country,
        setcountry,
        countries,
        property,
        setproperty,
        properties,
        price,
        setprice,
        houses,
        loading,
      }}
    >
      {" "}
      {children}{" "}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
