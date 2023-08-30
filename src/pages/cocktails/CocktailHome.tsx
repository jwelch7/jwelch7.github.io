import { useState, useEffect, useRef } from "react";
import axios from "axios";

const CocktailHome = () => {
  const [cocktail, setCocktail] = useState(null);
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted.current) {
      const fetchCocktailsByLetter = async () => {
        const { data } = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );

        setCocktail(data.drinks[0].strDrink);
        console.log(data.drinks[0].strDrink);
      };
      fetchCocktailsByLetter();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);
  return <div> {cocktail}</div>;
};

export default CocktailHome;
