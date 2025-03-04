import React, { useEffect, useState } from "react";
import { getThemeColors } from "../utils/getThemeColors";

interface ThemePreviewProps {
  themeName: string;
  onThemeSelect: () => void;
}

const ThemePreview: React.FC<ThemePreviewProps> = ({ themeName, onThemeSelect }) => {
  const [themeColors, setThemeColors] = useState({
    bgColor: "",
    headerColor: "",
    primaryText: "",
  });

  useEffect(() => {
    setThemeColors(getThemeColors(themeName));
  }, [themeName]);

  return (
    <div className="flex flex-col rounded-lg cursor-pointer" onClick={onThemeSelect}>
      <h3 className="text-lg pb-2">{themeName}</h3>
      <div style={{ backgroundColor: themeColors.bgColor}} className="shadow flex flex-col rounded-md">
        <div style={{ backgroundColor: themeColors.headerColor }} className="w-full h-10 rounded-tr-md rounded-tl-md" />
        <div className="flex flex-col p-8 gap-4 mt-4">
          <div style={{ backgroundColor: themeColors.primaryText, opacity: 0.5 }} className="w-4/5 h-3 rounded" />
          <div style={{ backgroundColor: themeColors.primaryText, opacity: 0.5 }} className="w-3/5 h-3 rounded" />
          <div style={{ backgroundColor: themeColors.primaryText, opacity: 0.5 }} className="w-2/5 h-3 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ThemePreview;

