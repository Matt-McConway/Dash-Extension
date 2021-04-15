import { useEffect } from "preact/hooks";
import { useSettingsStore } from "./useSettingsStore";

export const useDarkMode = () => {
  const [settings] = useSettingsStore();
  useEffect(() => {
    settings.darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [settings]);
};
