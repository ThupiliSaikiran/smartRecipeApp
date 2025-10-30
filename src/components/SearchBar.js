import React, { useState } from "react";
import {
  fetchRecipesByIngredients,
  filterByMoodAndTime,
  fetchAccurateRecipes,
  requiredFilterByMoodAndTime,
}from "../utils/SearchLogic.js"
import SearchResults from "./SearchResults.js";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setShowFeatured }) => {
  const [ingredient, setIngredient] = useState("");
  const [mood, setMood] = useState("");
  const [time, setTime] = useState("");
  const [recipes, setRecipes] =useState([]);
  const [loading,setLoading]=useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searched, setSearched] = useState(false);
  const [relateRecipe, setRelateRecipe]=useState([])


  const navigate = useNavigate();

  async function handleSearch(){
    if(!ingredient){
      alert("Please enter at least one ingredient 🍅")
      return;
    }
    setSearched(true);
    setLoading(true);
    setShowFeatured(false);
    try {
      const combinedRecipes = await fetchRecipesByIngredients(ingredient);
      // let combinedRecipes = ingredientResults.flat();
      const requiredRecipes= await fetchAccurateRecipes(ingredient)

      const requiredFinalRecipes=[]


      for(let i=0;i<requiredRecipes.length;i++){
        // console.log(combinedRecipes[i])
        const res =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${requiredRecipes[i].idMeal}`);
        const data = await res.json();
   
        requiredFinalRecipes.push(data.meals[0])
      }


      let requiredFilter = requiredFilterByMoodAndTime(requiredFinalRecipes,mood,time)

      // console.log(requiredFilter)
      setRecipes(requiredFilter)

      const finalRecipes =[]
      // console.log(combinedRecipes.length)
      for(let i=0;i<combinedRecipes.length;i++){
        // console.log(combinedRecipes[i])
        const res =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${combinedRecipes[i]}`);
        const data = await res.json();
        finalRecipes.push(data.meals)
      }
    //  console.log(finalRecipes)

      let filtered = filterByMoodAndTime(finalRecipes,mood, time);
      //  console.log(filtered)
     
      if(filtered.length === 0){
        filtered = finalRecipes;
      } 
      setRelateRecipe(filtered)

       setLoading(false);
      navigate("/searched", {
  state: {
    recipes: requiredFilter,
    relateRecipe: filtered,
    searched: true
  },
});
     
    } catch (error) {
      console.error("Error fetching recipes: ",error)
      
    }
    setLoading(false);
  }

  

  // async function handleViewDetails(meal){
  //   const res = await fetch(
  //      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
  //   )
  //   const data =await res.json();
  //   setSelectedMeal(data.meals[0])
  // }
  return (
    <div className="w-full flex flex-col items-center mt-16 py-5 px-4 bg-[#D8E3C8]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        🥘 Find Recipes Based on Your Mood & Time
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Enter ingredients, choose your mood and available time ⏱️
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
            //  onKeyDown={handleKeyPress}
            placeholder="Enter the ingredients (e.g. chicken, milk, salt)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none
        shadow-sm"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400
          outline-none shadow-sm"
            >
              <option value="">Select Mood</option>
              <option value="Happy">Happy 😋</option>
              <option value="Romantic">Romantic 🥰</option>
              <option value="Tired">Tired 😴</option>
              <option value="Sad">Sad 😢</option>
              <option value="Energetic">Energetic 😎</option>
            </select>

            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
            >
              <option value="">⏱️ Select Time</option>
              <option value="15">Under 15 mins</option>
              <option value="30">Under 30 mins</option>
              <option value="45">Under 45 mins</option>
              <option value="60">Under 60 mins</option>
            </select>

            <button
              onClick={handleSearch}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-sm"
            >
              🍽️ Find Recipes
            </button>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-4 mb-3">
        Example: <span className="italic">chicken,cheese, tomato</span>
      </p>
      {/* <SearchResults
      recipes={recipes}
      relateRecipe={relateRecipe}
      loading={loading}
      selectedMeal={selectedMeal}
      onViewDetails={handleViewDetails}
      onClose={()=>setSelectedMeal(null)}
      searched = {searched}
      /> */}

      {loading && (
  <p className="text-gray-500 text-lg text-center mt-6 animate-pulse">
    ⏳ Fetching recipes...
  </p>
)}
    </div>
  );
};

export default SearchBar;

/*
 <p className="text-gray-400 text-sm mt-3">
        Example: <span className="italic">chicken, cheese, tomato</span>
      </p>
*/
