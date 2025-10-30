export async function fetchAccurateRecipes(ingredients){
  const ingredientsList = ingredients.split(",").map((i)=>i.trim().toLowerCase());

  // console.log(ingredientsList)

  let commonMeals = [];
  for(let i=0; i<ingredientsList.length;i++){
    const ingredient = ingredientsList[i];

    const res = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await res.json(); 
    // console.log(data.meals)
   
    if(!data.meals){
      commonMeals=[]
      
      break;
    }
    const meals =data.meals;
    
    if(i === 0){
      commonMeals = meals;
    
    }else{
      const mealIds = new Set(meals.map((m)=>m.idMeal))

      commonMeals =commonMeals.filter((m)=>mealIds.has(m.idMeal))
    }
   if(commonMeals.length === 0) break;
  }

  return commonMeals;
}






export async function fetchRecipesByIngredients(ingredients){
  
  const ingredientsList = ingredients.split(",").map((i)=> i.trim().toLowerCase());
  const results = []
 

  for(let ingredient of ingredientsList){
     
    const res = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await res.json(); 
   
    // console.log(data["meals"].length)
    if(data.meals) {
      for (let i=0;i<data["meals"].length;i++){
        // console.log(data["meals"][i])
        results.push(data["meals"][i]["idMeal"])
      }
    };
  }
 
  
  return results

}


    const moodMap = {
  happy: [
    "pizza", "chicken", "pasta", "grill", "spicy", "fried", "taco",
    "burrito", "wrap", "cheese", "wings", "barbecue", "snack"
  ],

  romantic: [
    "dessert", "cake", "chocolate", "sweet", "mousse", "brownie",
    "pudding", "ice cream", "strawberry", "fondue", "pastry",
    "crepe", "cupcake"
  ],

  tired: [
    "soup", "salad", "sandwich", "toast", "smoothie", "bowl",
    "oatmeal", "eggs", "porridge", "wrap", "pancake", "tea",
    "noodle", "ramen"
  ],

  sad: [
    "burger", "fries", "comfort", "rice", "biryani", "pasta",
    "mac", "cheese", "fried", "wings", "curry", "lasagna",
    "kebab", "pizza"
  ],

  energetic: [
    "spicy", "noodle", "biryani", "stir", "grill", "protein",
    "omelette", "wrap", "chicken", "beef", "taco", "salad",
    "juice", "energy", "healthy"
  ],
};

    const timeMap = {
  "15": [
    "salad", "egg", "toast", "sandwich", "smoothie", "snack", "quick",
    "wrap", "bowl", "pancake", "oat", "instant", "tea", "juice",
    "no cook", "microwave", "easy"
  ],

  "30": [
    "pasta", "chicken", "rice", "noodle", "stir", "taco", "curry",
    "fried", "biryani", "wrap", "grill", "cheese", "omelette",
    "veggie", "shrimp", "soup"
  ],

  "45": [
    "biryani", "fish", "beef", "curry", "gravy", "pasta", "bake",
    "meatball", "lasagna", "kebab", "dumpling", "tikka",
    "roast", "stuffed", "bowl", "hearty"
  ],

  "60": [
    "roast", "stew", "bake", "casserole", "slow", "braised", "meat",
    "oven", "holiday", "family", "special", "traditional", "turkey",
    "beef", "mutton", "gourmet", "dinner"
  ],
};



export function requiredFilterByMoodAndTime(meals,mood,time){
  // console.log(meals);
  // console.log(mood);
  // console.log(time);
   if(!mood && !time) return meals;
   return meals.filter((meal)=>{
    const name = meal.strMeal.toLowerCase()
    const category = (meal.strCategory || "").toLowerCase();
   

    const moodMatch = mood ? moodMap[mood.toLowerCase()]?.some((kw)=>name.includes(kw) || category.includes(kw)):true;

    const timeMatch = time ? timeMap[time]?.some(
      (kw) => name.includes(kw) || category.includes(kw)
    ):true;

    // console.log(moodMatch)
    // console.log(timeMatch)

   return moodMatch && timeMatch;
   })
}



export function filterByMoodAndTime(meals,mood,time){
  // console.log(mood)
  // console.log(time)
  // console.log(meals)
  if(!mood && !time) return meals;
  return meals.filter((meal)=>{
    // console.log(meal[0].strMeal)
    const name = meal[0].strMeal.toLowerCase();
    // console.log(name)
    const category = (meal[0].strCategory || "").toLowerCase();
    // console.log(category)





    const moodMatch = mood ? moodMap[mood.toLowerCase()]?.some((kw)=>name.includes(kw) || category.includes(kw)):true;
    

    const timeMatch = time ? timeMap[time]?.some(
      (kw) => name.includes(kw) || category.includes(kw)
    ):true;
    

    return moodMatch && timeMatch;
  })
}