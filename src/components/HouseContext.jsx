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

  useEffect(() => {
    const allproperty = houses.map((houses) => {
      return houses.type;
    });

    //remove duplicates
    const uniqueproperty = ["Location (any)", ...new Set(allproperty)];
    //console.log(uniquecountries);

    setproperties(uniqueproperty);
  }, []);

  const handleClick = () => {
    // console.log(country, property, price);

    setloading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minprice = parseInt(price.split(" ")[0]);

    const maxprice = parseInt(price.split(" ")[2]);

    const newHouse = housesData.filter((house) => {
      const houseprice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        houseprice >= minprice &&
        houseprice <= maxprice
      ) {
        return house;
      }
      //if All value are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      //if Country value are default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      //if Property value are default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      //if Price value are default

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (houseprice >= minprice && houseprice <= maxprice) {
          return house;
        }
      }
      if (!isDefault(property) && !isDefault(country) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (isDefault(property) && !isDefault(country) && !isDefault(price)) {
        if (houseprice >= minprice && houseprice <= maxprice) {
          return house.country === country;
        }
      }

      if (!isDefault(property) && isDefault(country) && !isDefault(price)) {
        if (houseprice >= minprice && houseprice <= maxprice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouse.length < 1 ? sethouses([]) : sethouses(newHouse),
        setloading(false)
      );
    }, 1000);
  };

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
        handleClick,
        loading,
      }}
    >
      {children}{" "}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
