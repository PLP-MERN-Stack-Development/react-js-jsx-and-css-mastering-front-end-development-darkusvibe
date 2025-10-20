import { useState, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Simple Task App</h1>

      <button
        onClick={() => setDark((prev) => !prev)}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 transition"
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>

      <p className="mt-6 text-lg text-center max-w-md">
        Click the button to toggle between light 🌞 and dark 🌙 themes.
      </p>
    </div>
  );
}

export default App;
