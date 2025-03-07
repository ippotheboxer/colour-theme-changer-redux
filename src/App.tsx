import React, { useState } from "react";
import { THEME_OPTIONS, THEME_CATEGORIES } from "./themeData";
import ThemePreview from "./components/ThemePreview";
import Header from "./components/Header";
import { useTheme } from "./context/themeContext";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("light");

  const filteredThemes = THEME_OPTIONS.filter((t) => t.category === selectedCategory);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-semibold pb-4 heading-text headerBorder">Choose Your Theme</h1>
        <p className="pt-4">Currently, you  have <strong>{theme}</strong> theme chosen.</p>

        {/* Category Selection */}
        <div className="flex flex-row items-center gaps-4 mt-4 pb-4">
          <span className="font-semibold mr-4">Toggle theme:</span>
          {THEME_CATEGORIES.map((category) => (
            <button
              key={category}
              className={`${category === selectedCategory ? "activeButton filterThemeBtn" : "filterThemeBtn"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Theme Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
          {filteredThemes.map((themeOption) => (
            <ThemePreview
              key={themeOption.name}
              themeName={themeOption.name}
              onThemeSelect={() => toggleTheme(themeOption.name)}
              bgColor={themeOption.bgColor}
              headerBg={themeOption.headerBg}
              textColor={themeOption.textColor}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;


