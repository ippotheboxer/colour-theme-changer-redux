import React, { useState } from "react";
import { THEME_OPTIONS, THEME_CATEGORIES } from "./themeData";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./store/themeSlice";
import { RootState, AppDispatch } from "./store/store";
import ThemePreview from "./components/ThemePreview";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedTheme = useSelector((state: RootState) => state.theme.theme);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredThemes = THEME_OPTIONS.filter((theme) =>
    selectedCategory === "all" ? true : theme.categories.includes(selectedCategory)
  );

  return (
    <main className="min-h-screen flex flex-col p-8">
      <h1 className="text-3xl font-semibold pb-4">Choose Your Theme</h1>
      <p>Currently, you have {selectedTheme} theme chosen.</p>
      {/* Category Selection */}
      <div className="flex flex-row items-center gap-4 mt-4">
        <span>Toggle theme:</span>
        {THEME_CATEGORIES.map((category) => (
          <button
            key={category}
            className={`p-2 px-4 rounded-md shadow ${
              selectedCategory === category ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.replace("-", " ")}
          </button>
        ))}
      </div>
      {/* Theme Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredThemes.map((theme) => (
          <ThemePreview key={theme.name} themeName={theme.name} onThemeSelect={() => dispatch(setTheme(theme.name))} />
        ))}
      </div>
    </main>
  );
};

export default App;


