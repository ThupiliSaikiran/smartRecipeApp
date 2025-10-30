import React from 'react'

const RecipeModel = ({meal,onClose}) => {
  if(!meal) return null

  const ingredients = [];
  for (let i=0; i<=20;i++){
    const ing =meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`]
    if(ing) ingredients.push(`${ing} - ${measure}`)
  }
  return (
    
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50'>

      <div className='bg-white w-[90%] max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative animate-fadeIn'>
        <button
        onClick={onClose}
        className='absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl font-bold'
        >×</button>
        
        <img 
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className='w-full h-64 object-cover'
        />


        <div className='p-6 text-left'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>{meal.strMeal}</h2>
          <p className='text-gray-500 mb-4'>{meal.strCategory} • {meal.strArea}</p>
        

          <h3 className='text-lg font-semibold mb-2 text-orange-600'>🥣 Ingredients</h3>
          <ul className='list-disc list-inside text-grey-700 mb-4 max-h-32 overflow-y-auto'>
            {ingredients.map((item,index)=>(
              <li key={index}>{item}</li>
            ))}
          </ul>
         
       <h3 className='text-lg font-semibold mb-2 text-orange-600'>
         🍳 Instructions
       </h3>
       <p className='text-gray-700 leading-relaxed max-h-40 overflow-y-auto whitespace-pre-line'>
        {meal.strInstructions}
       </p>

         {/*
         {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-orange-600 font-medium hover:underline"
            >
              ▶ Watch on YouTube
            </a>
          )}
          
       */}
       {meal.strYoutube && (
        <a
        href={meal.strYoutube}
        target="_blank"
         rel="noopener noreferrer"
        className='inline-block mt-4 text-orange-600 font-medium hover:underline'
        >
           ▶ Watch on YouTube
        </a>
       )}
        </div>
      </div>

    </div>
  )
}

export default RecipeModel