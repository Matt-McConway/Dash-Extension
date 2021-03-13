import { render } from "preact";
import { useSettingsStore } from "./useSettingsStore";
import { useDarkMode } from "./useDarkMode";
// import "tailwindcss/tailwind.css"; // TODO - Get this to work instead of using style.css
import "../style.css";

const Options = () => {
  const [settings, setSettings, isPersistent, error] = useSettingsStore();
  useDarkMode();

  const handleChange = (key, value) => {
    setSettings((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    isPersistent &&
    !error && (
      <div class="bg-gray-50 min-h-screen antialiased text-gray-900 dark:bg-gray-600 transition-all duration-300 ease-in-out">
        <header class="p-4 flex flex-row items-stretch justify-between bg-gray-100 dark:bg-gray-700 shadow">
          <div class="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-white font-bold text-4xl">
            D
          </div>
          <h1 class="flex-grow-6 inline-block text-2xl font-medium self-center pl-2 dark:text-gray-300">
            Dash Settings
          </h1>
        </header>
        <div class="bg-blue-300 rounded-lg p-4 m-4 dark:bg-blue-900 dark:text-gray-300 shadow">
          <h2 class="font-medium underline uppercase text-lg">
            This extension is still in development
          </h2>
          <span class="text-base">
            Have an idea around how I can improve this extension? I welcome any
            suggestions and bug reports!
          </span>
          <div class="w-40">
            <a href="mailto:matt@mcconway.nz?subject=Dash - Suggestion/Bug Report">
              <div class="rounded-full bg-primary py-2 px-4 text-white font-medium mt-2 flex flex-row items-center justify-center">
                <div class="w-4 h-4 inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>Send me an email</span>
              </div>
            </a>
          </div>
        </div>
        <div class="px-4 dark:text-gray-300">
          <h2 class="text-xl font-medium">Appearance</h2>
          <ul class="bg-white shadow py-4 px-10 mt-2 rounded-lg dark:bg-gray-700">
            <li>
              <div
                class="flex flex-row items-center justify-between font-medium p-4 text-base"
                onClick={() => handleChange("darkMode", !settings.darkMode)}
              >
                Enable Dark Mode
                <div
                  class={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
                    settings.darkMode && "bg-primary"
                  }`}
                >
                  <div
                    class={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                      settings.darkMode && "translate-x-6"
                    }`}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render(<Options />, document.body);
});
