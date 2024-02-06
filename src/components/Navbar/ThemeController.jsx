import { useEffect, useState } from 'react';

function ThemeController() {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dracula");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", checked ? "dracula" : "light");
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    localStorage.setItem("theme", event.target.checked ? "dracula" : "light");
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className="toggle theme-controller"
    />
  );
}

export default ThemeController;
