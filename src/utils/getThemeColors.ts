export const getThemeColors = (themeName: string) => {
    // Temporarily apply the theme class to the body
    document.body.classList.add(themeName);
    
    // Get computed styles
    const styles = getComputedStyle(document.body);
    const bgColor = styles.getPropertyValue("--primary-bg").trim();
    const headerColor = styles.getPropertyValue("--header-color").trim();
    const primaryText = styles.getPropertyValue("--primary-text").trim();
  
    // Remove the class to prevent UI flickering
    document.body.classList.remove(themeName);
  
    return { bgColor, headerColor, primaryText };
  };
  