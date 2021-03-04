import {createChromeStorageStateHookLocal} from "use-chrome-storage";

const SETTINGS_KEY = "settings";
const INITIAL_VALUE = {
  darkMode: false
};

export const useSettingsStore = createChromeStorageStateHookLocal(SETTINGS_KEY, INITIAL_VALUE);