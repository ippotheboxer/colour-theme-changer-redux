import React from "react";

interface ThemePreviewProps {
  bgColor: string;
  headerColor: string;
  primaryText: string;
  themeName: string;
  onThemeSelect: () => void;
}

const ThemePreview: React.FC<ThemePreviewProps> = ({
  bgColor,
  headerColor,
  primaryText,
  themeName,
  onThemeSelect,
}) => {
  return (
    <div
      className="flex flex-col rounded-lg cursor-pointer"
      onClick={onThemeSelect}
    >
      <h3 className="text-lg pb-2">{themeName}</h3>
      <div style={{ backgroundColor: bgColor }} className="flex flex-col rounded-md">
        <div style={{ backgroundColor: headerColor }} className="w-full h-10 rounded-tr-md rounded-tl-md" />
        <div className="flex flex-col p-8 gap-4 mt-4">
          <div style={{ backgroundColor: primaryText, opacity: 0.5 }} className="w-4/5 h-3 rounded" />
          <div style={{ backgroundColor: primaryText, opacity: 0.5 }} className="w-3/5 h-3 rounded" />
          <div style={{ backgroundColor: primaryText, opacity: 0.5 }} className="w-2/5 h-3 rounded" />
        </div>
      </div>
    </div>);
};

export default ThemePreview;
