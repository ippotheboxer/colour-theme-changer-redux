import React, { useEffect } from "react";
import { THEME_DATA } from "./themeData";
import ThemePreview from "./components/ThemePreview";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, Theme } from "./store/themeSlice";
import { RootState, AppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Apply the theme dynamically
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-bg", theme.bgColor);
    document.documentElement.style.setProperty("--primary-text", theme.primaryText);
  }, [theme]);

  return (
    <main className="min-h-screen bg-[var(--primary-bg)] text-[var(--primary-text)] flex flex-col p-4">
      <h1 className="text-3xl font-semibold">Choose your theme</h1>
      <section className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {THEME_DATA.map((themeData) => (
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

