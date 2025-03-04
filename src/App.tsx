import React, { useEffect, useState } from "react";
import { THEME_DATA, ThemeCategories  } from "./themeData";
import ThemePreview from "./components/ThemePreview";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./store/themeSlice";
import { RootState, AppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-bg", theme.bgColor);
    document.documentElement.style.setProperty("--primary-text", theme.primaryText);
  }, [theme]);

  const [selectedCategory, setSelectedCategory] = useState<string>("light");

  const filteredThemes = THEME_DATA.filter(theme => 
    theme.categories.includes(selectedCategory)
  );

  return (
    <main className="min-h-screen bg-[var(--primary-bg)] text-[var(--primary-text)] flex flex-col p-4">
      <h1 className="text-3xl font-semibold">Choose your theme</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mt-4">
        {ThemeCategories.map(category => (
          <button
            key={category}
            className={`p-2 rounded-md border ${selectedCategory === category ? "bg-gray-300" : "bg-white"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Theme Previews */}
      <section className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredThemes.map((themeData) => (
          <div key={themeData.themeName}>
            <ThemePreview
              {...themeData}
              onThemeSelect={() => dispatch(setTheme(themeData))}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default App;

