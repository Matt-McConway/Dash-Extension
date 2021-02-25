import { render } from "preact";
import { useState, useEffect } from 'preact/hooks';
// import "tailwindcss/tailwind.css"; // TODO - Get this to work instead of using style.css
import "../style.css";


// TODO 'useChromeStorage' custom hook for acessing and setting storage

const Options = () => {
  const [toggleActive, setToggleActive] = useState();
  useEffect(() => {
    chrome.storage.local.get("darkMode", (result) => {
      setToggleActive(result.darkMode || false);
    });
  }, [])

  const setDarkMode = () => {
    chrome.storage.local.set({darkMode: !toggleActive}, () => {
      setToggleActive(!toggleActive);
    })
  }
  return (
    <div class="bg-gray-50 antialiased text-gray-900">
      <header class="p-4 flex flex-row items-stretch justify-between bg-gray-100 shadow">
        <div class="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-white font-bold text-4xl">D</div>
        <h1 class="flex-grow-6 inline-block text-2xl font-medium self-center pl-2">Dash Settings</h1>
      </header>
      <div class="bg-blue-100 rounded-lg p-4 m-4">
        <h2 class="font-medium underline uppercase">
          This extension is still in development
        </h2>
        <span>Have an idea around how I can improve this extension? I welcome any suggestions and bug reports!</span>
        <div class="w-40">
          <a href="mailto:matt@mcconway.nz?subject=Dash - Suggestion/Bug Report">
            <div class="rounded-full bg-primary py-2 px-4 text-white font-medium mt-2 flex flex-row items-center justify-center">
              <div class="w-4 h-4 inline-block mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>   
              <span>Send me an email</span>
            </div>
          </a>
        </div>
      </div>
      <div class="px-4">
        <h2 class="text-xl font-medium">Appearance</h2>
        <ul class="bg-white shadow py-4 px-10 mt-2 rounded-lg">
          <li>
            <div class="flex flex-row items-center justify-between font-medium p-4" onClick={setDarkMode}>
              Enable Dark Mode
              <div class={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${toggleActive && 'bg-primary'}`}>
                <div class={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${toggleActive && 'translate-x-6'}`}></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Options />, document.body);
});