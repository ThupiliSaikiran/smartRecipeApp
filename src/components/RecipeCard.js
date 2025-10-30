import React, { useEffect, useState } from "react";

const RecipeCard = ({ meal, onViewDetails }) => {
  const [liked, setLiked] = useState(false);

  /*useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
    setLiked(isFav);
  }, [meal.idMeal]);
             
        */
  useEffect(()=>{
    const favourites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favourites.some((fav)=>fav.idMeal === meal.idMeal)
    setLiked(isFav)

  },[meal.idMeal]);

  /*
   const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent triggering modal
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (liked) {
      favorites = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
    } else {
      favorites.push(meal);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setLiked(!liked);
  };
   */

  const toggleFavorite= (e)=>{
    e.stopPropagation();
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if(liked){
      favorites = favorites.filter((fav)=>{
        return fav.idMeal !== meal.idMeal
      })
    }else{
      favorites.push(meal)
    }
    localStorage.setItem("favorites",JSON.stringify(favorites))
    setLiked(!liked)
  }

  /*
   onClick={() => onViewDetails(meal)}
      className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105 cursor-pointer"
   */
  return (
    
    <div 
    onClick={()=>onViewDetails(meal)}
    className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105 curser-pointer"
    >
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-52 object-cover"
        />

        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 text-white text-xl"
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-1">
          {meal.strMeal}
        </h3>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
            {meal.strCategory || "general"}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
            {meal.strArea || "Cuisine"}
          </span>
        </div>
        <p className="text-sm text-gray-600 italic">
          “A delicious {meal.strCategory?.toLowerCase() || "meal"} from{" "}
          {meal.strArea || "around the world"}.”
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
