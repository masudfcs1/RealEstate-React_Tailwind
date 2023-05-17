import React, { createContext, useState, useEffect } from "react";
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

  useEffect(() => {
    const allcountries = houses.map((houses) => {
      return houses.country;
    });

    //remove duplicates
    const uniquecountries = ["Location (any)", ...new Set(allcountries)];
    //console.log(uniquecountries);

    setcountries(uniquecountries);
  }, []);

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
      {children}{" "}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
