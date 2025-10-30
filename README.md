# 🧑‍🍳 Smart Recipe App

The **Smart Recipe App** helps users discover delicious recipes based on their **ingredients**, **mood**, and **available cooking time**.  
It uses the **TheMealDB API** to fetch real recipes with full details like ingredients, instructions, and YouTube links.

---

## 🌟 Features

- ✅ Search recipes by ingredients *(e.g., chicken, tomato, cheese)*
- ✅ Filter recipes based on **mood** (Happy, Sad, Romantic, etc.)
- ✅ Filter recipes by **time** (Under 15, 30, 45, or 60 mins)
- ✅ View full recipe details in a **popup modal**
- ✅ Watch cooking videos directly on **YouTube**
- ✅ Save and view **favorite recipes**
- ✅ Fully responsive UI built for **mobile & desktop**
- ✅ Built using **React + Tailwind CSS**

---

## ⚙️ Tech Stack

- **Frontend:** React.js (with React Router)
- **Styling:** Tailwind CSS  
- **API:** [TheMealDB](https://www.themealdb.com/api.php)  
- **Hosting:** Vercel  

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/smart-recipe-app.git
cd smart-recipe-app
### 2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start the Project
bash
Copy code
npm start
Now open your browser and visit 👉 http://localhost:3000

🌐 API Used
This app uses TheMealDB API for fetching recipe data:

Random Recipes:
https://www.themealdb.com/api/json/v1/1/random.php

Search by Ingredient:
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken

Recipe Details:
https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

💡 Project Flow
The user enters ingredients, selects mood, and chooses time.

The app fetches data using TheMealDB API.

Recipes are filtered based on mood and time.

Filtered and related recipes are displayed beautifully using cards.

The user can view details, ingredients, and a YouTube link.

If no recipes match, the app shows related or random recipes.

🧠 Example Search Flow
Input	Mood	Time	Result
"chicken, cheese"	Happy 😋	Under 30 mins	Chicken pasta, cheesy pizza, etc.
"rice"	Sad 😢	Under 45 mins	Fried rice, comfort food recipes
"egg"	Tired 😴	Under 15 mins	Sandwiches, omelets

🤖 Working with AI
This project was developed with help from ChatGPT (AI assistant).
AI helped me in every stage — from idea to deployment.

🔹 AI Helped Me With:
Understanding and debugging React + Tailwind concepts

Creating logic for filtering recipes by mood and time

Writing reusable components like Navbar, SearchBar, and RecipeCard

Fixing fetch and async/await issues with APIs

Improving UI design and responsiveness

Writing this README.md

Solving deployment issues on Vercel

This shows how AI can act as a virtual coding partner, helping students learn and build projects faster.

💬 Sample Prompts I Used with ChatGPT
Here are some real examples of how I approached AI for help:

“How can I fetch recipes using TheMealDB API based on user ingredients?”

“I want to filter recipes by mood and time — how should I write the logic?”

“My React modal is not closing when I click ‘×’. What might be wrong?”

“Show me how to display a loading animation while fetching data.”

“How do I route between Home, Favorites, and Search pages in React Router?”

“Give a Tailwind color that matches a dark navbar and soft pink cards.”

“Help me fix an error: Cannot read properties of undefined (reading ‘toLowerCase’).”

“Write a clean README for my Smart Recipe App explaining everything clearly.”

Each of these prompts helped me learn coding logic and UI structuring more clearly.

📸 Preview
<img width="1912" height="885" alt="Smart Recipe App Screenshot" src="https://github.com/user-attachments/assets/3211b219-9d1b-4bd8-8345-da1d5f7e4570" />
🔗 Live Demo
👉 Click Here to View on Vercel

🧑‍💻 Developer
Name: Sai Kiran
Graduation Year: 2024
Goal: Full Stack Python Developer
Tech Stack: React | Tailwind CSS | Django | MySQL
Hobbies: Coding, Music, Movies, and Learning New Tech

🏁 Conclusion
The Smart Recipe App is a creative project combining API integration, frontend logic, and AI-powered development support.
It shows how developers can collaborate with AI tools like ChatGPT to build, debug, and improve projects efficiently.

yaml
Copy code

---

Would you like me to create a **README summary (short version)** just for your **college report PDF** (only “Tech Stack”, “Project Flow”, and “Working with AI”)?  
It’ll look clean and fit within **one A4 page**.






