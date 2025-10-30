import React, { useState } from "react";
import RecipeCard from "./RecipeCard.js";
import RecipeModel from "./RecipeModel.js";
import { useLocation } from "react-router-dom";

const SearchResults = (/*{
  recipes,
  relateRecipe,
  loading,
  onViewDetails,
  selectedMeal,
  onClose,
  searched,
}*/) => {
 
  // console.log(recipes)
  const { state } = useLocation();
  const recipes = state?.recipes || [];
  const relateRecipe = state?.relateRecipe || [];
  const loading = state?.loading || false;
  const searched = state?.searched || false;

  const [selectedMeal, setSelectedMeal] = useState(null);


  console.log(loading)
  if (!searched && recipes.length === 0 && !loading) {
    return null;
  }
  

    async function handleViewDetails(meal) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
    );
    const data = await res.json();
    setSelectedMeal(data.meals[0]);
  }

   if (searched && recipes.length === 0 && !loading) {
    return (
      <section className="w-full py-16 px-6 text-center bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50">
        <p className="text-gray-700 text-lg font-medium mb-6">
          😔 No recipes found. Try different ingredients or moods.
        </p>

        {relateRecipe.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              🍽️ Related Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
              {relateRecipe.map((meal) => (
                // console.log(meal[0].idMeal)
                <RecipeCard
                  key={meal[0].idMeal}
                  meal={meal[0]}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </>
        )}

        {selectedMeal && <RecipeModel meal={selectedMeal} onClose={()=> setSelectedMeal(null)} />}
      </section>
    );
  };

  return (
    <section className="w-full py-16 px-6 text-center bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        ✨ 🍽️ Searched Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-10">
        {recipes.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {relateRecipe.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            🍽️ Related Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
           {relateRecipe.map((meal) => (
                // console.log(meal[0].idMeal)
                <RecipeCard
                  key={meal[0].idMeal}
                  meal={meal[0]}
                  onViewDetails={handleViewDetails}
                />
              ))}
          </div>
        </>
      )}

      {selectedMeal && <RecipeModel meal={selectedMeal} onClose={()=> setSelectedMeal(null)} />}
    </section>
  );
};

  // console.log(searched, recipes.length===0, !loading);
  // if (searched && recipes.length === 0 && !loading) {
  //   return (
  //     <section className="w-full py-16 px-6 text-center bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50">
  //       {relateRecipe.length > 0 && (
  //         <>
  //           <p className="text-gray-700 text-lg font-medium mb-6">
  //             😔 No recipes found. Try different ingredients or moods.
  //           </p>
  //           <h2 className="text-3xl font-bold text-gray-800 mb-8">
  //             🍽️ Related Recipes
  //           </h2>

  //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
  //             {relateRecipe.map((meal) => (
  //               // console.log(meal[0].idMeal)
  //               <RecipeCard
  //                 key={meal[0].idMeal}
  //                 meal={meal[0]}
  //                 onViewDetails={onViewDetails}
  //               />
  //             ))}
  //           </div>
  //         </>
  //       )}

  //       {selectedMeal && <RecipeModel meal={selectedMeal} onClose={onClose} />}
  //     </section>
  //   );
  // }
  // return (
  //   <section className="w-full py-16 px-6 text-center bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50">
  //     <h2 className="text-3xl font-bold text-gray-800 mb-8">
  //       ✨ 🍽️ Recommended Recipes
  //     </h2>

  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
  //       {recipes.map((meal) => (
  //         <RecipeCard
  //           key={meal.idMeal}
  //           meal={meal}
  //           onViewDetails={onViewDetails}
  //         />
  //       ))}
  //     </div>

  //     {selectedMeal && <RecipeModel meal={selectedMeal} onClose={onClose} />}
  //   </section>

    // <div className='bg-orange-50 py-10 mt-10'>
    //   <h3
    //   className='text-2xl font-semibold text-center text-orange-700 mb-8'
    //   >
    //      🍽️ Recommended Recipes
    //   </h3>

    //   <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    //     {
    //       recipes.map((meal)=>(
    //         <RecipeCard
    //         key={meal.idMeal}
    //         meal={meal}
    //         onViewDetails={onViewDetails}
    //         />
    //       ))
    //     }
    //   </div>
    //   {selectedMeal && <RecipeModel
    //   meal={selectedMeal} onClose={onClose}
    //   />}
    // </div>
  // );


export default SearchResults;
