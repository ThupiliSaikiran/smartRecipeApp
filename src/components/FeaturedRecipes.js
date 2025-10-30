import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.js";
import RecipeModel from "./RecipeModel.js";
/*
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

*/

const FeaturedRecipes = () => {
  const [featured, setFeatured] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cacheRecipe = JSON.parse(localStorage.getItem("featured"));
    if (cacheRecipe && cacheRecipe.length > 0) {
      setFeatured(cacheRecipe);
    } else {
      async function loadRecipes() {
        setLoading(true);
        const recipes = [];
        for (let i = 0; i < 12; i++) {
          const res = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const data = await res.json();
          if (data.meals) recipes.push(data.meals[0]);
        }
        setFeatured(recipes);
        localStorage.setItem("featured", JSON.stringify(recipes));
        setLoading(false);
      }
      loadRecipes();
    }
  }, []);

  const refreshRecipe = async ()=>{
    setLoading(true);
        const recipes = [];
        for (let i = 0; i < 12; i++) {
          const res = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const data = await res.json();
          if (data.meals) recipes.push(data.meals[0]);
        }
        setFeatured(recipes);
        localStorage.setItem("featured", JSON.stringify(recipes));
        setLoading(false);
  }

  const handleViewDetails = async (meal) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
    );
    const data = await res.json();
    setSelectedMeal(data.meals[0]);
  };
  return (
    /*
    
    */
    <section className="relative py-16 px-6 text-center bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        ✨ Featured Recipes
      </h2>
      <button
      onClick={refreshRecipe}
      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-5 "
      >
        Refresh 🔄
      </button>
      {loading ? (
        <p className="text-gray-500 text-lg animate-pulse">
          🍳 Loading delicious recipes...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {featured.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              meal={meal}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      )}

      {selectedMeal && (
        <RecipeModel
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </section>
  );
};

export default FeaturedRecipes;

/*

 {loading ? (
        <p className="text-gray-500 text-lg animate-pulse">
          🍳 Loading delicious recipes...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
 */
