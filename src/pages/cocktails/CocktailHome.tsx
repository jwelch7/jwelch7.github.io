// import { useState } from "react";
import axios from "axios";

const CocktailHome = () => {
  const fetchCocktailsByLetter = async (letter: string) => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    console.log(response.data);
  };

  fetchCocktailsByLetter("h");
};

export default CocktailHome;
