import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.js";
import RecipeModel from "./RecipeModel.js";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleViewDetails = async (meal) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
    );
    const data = await res.json();
    setSelectedMeal(data.meals[0]);
  };

  const removedFromFavorites = (idMeal) => {
    const updated = favorites.filter((fav) => fav.idMeal !== idMeal);

    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 text-center min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        ❤️ My Favorite Recipes
      </h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg">
          You haven’t added any favorites yet. Click ❤️ on recipes to save them
          here!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="relative">
              <RecipeCard meal={meal} onViewDetails={handleViewDetails} />
              {/*
                      
                */}
              <button
                onClick={() => removedFromFavorites(meal.idMeal)}
                className="absolute top-3 left-3 bg-white text-red-500 rounded-full px-2 py-1 text-xs font-semibold shadow hover:bg-red-500 hover:text-white transition-all"
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}
      {/*
      <button
  onClick={() => {
    localStorage.removeItem("favorites");
    setFavorites([]);
  }}
  className="mt-8 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
>
  Clear All Favorites
</button>
       */}
       {favorites.length > 0 &&(
        <button 
      onClick={()=>{
        localStorage.removeItem("favorites");
        setFavorites([]);
        
      }}
      className="mt-8 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all font-bold"
      >
        Clear All Favorites
        </button>

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

export default Favorites;
