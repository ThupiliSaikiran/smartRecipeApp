import React from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "../components/SearchResults";

const SearchedPage = () => {
  const location = useLocation();
  const { recipes = [], relateRecipe = [], searched = true } = location.state || {};

  return (
    <div className="">
      <SearchResults
        recipes={recipes}
        relateRecipe={relateRecipe}
        loading={!recipes?.length && !relateRecipe?.length}
        searched={searched}
      />
    </div>
  );
};

export default SearchedPage;
