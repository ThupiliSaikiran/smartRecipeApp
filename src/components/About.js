import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 px-8 flex flex-col items-center text-center"
    id="About"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          🍳 About Recipe Finder
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Using <strong>TheMealDB API</strong>, the app suggests recipes based
          on the ingredients you enter, your mood, and even how much time you
          have to cook ⏱️. Each recipe comes with detailed ingredients,
          instructions, and an image preview to help you cook confidently.
        </p>

        <div className="my-10">
          <img
            src="https://img.freepik.com/free-vector/chef-cooking-concept-illustration_114360-1875.jpg?t=st=1730018325~exp=1730021925~hmac=9db438ae6b76d9b2cf51e98e51c8a44dbd0c35e9e03a2b73f1d09e4a4cf2ce2d&w=740"
            alt="Cooking Illustration"
            className="rounded-2xl shadow-xl mx-auto w-full sm:w-3/4 md:w-2/3"
          />
        </div>
        {/*
         <h2 className="text-2xl font-semibold text-gray-800 mb-3">✨ Features</h2>
        <ul className="text-gray-700 text-lg space-y-2 mb-6 text-left">
          <li>✅ Search recipes by one or multiple ingredients</li>
          <li>✅ Filter recipes based on mood and cooking time</li>
          <li>✅ Save your favorite recipes for quick access</li>
          <li>✅ Beautiful and responsive UI built with React + TailwindCSS</li>
        </ul>
       */}
        <h2
        className="text-2xl font-semibold text-gray-800 mb-3"
        >✨ Features</h2>
        <ul className="text-gray-700 text-lg space-y-2 mb-6 text-left">
          <li>✅ Search recipes by one or multiple ingredients</li>
          <li>✅ Filter recipes based on mood and cooking time</li>
          <li>✅ Save your favorite recipes for quick access</li>
          <li>✅ Beautiful and responsive UI built with React + TailwindCSS</li>
        </ul>
         <p className="text-gray-500 italic">
          “Cooking made easy, one ingredient at a time.” 🍽️
        </p>
      </div>
    </section>
  );
};

export default About;
