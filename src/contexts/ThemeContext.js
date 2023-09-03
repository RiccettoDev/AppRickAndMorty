import {createContext, useEffect, useState} from 'react';
import {escuro, ligth} from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext({});

export function ThemeProvider({children}) {
  const [currentTheme, setCurrentTheme] = useState('escuro');

  const themes = {
    escuro: escuro,
    ligth: ligth,
  };

  useEffect(() => {
    const loadData = async () => {
      const saveTheme = await AsyncStorage.getItem('@theme');
      if (saveTheme) {
        return setCurrentTheme(saveTheme);
      }
    };
    loadData();
  }, []);

  async function saveThemeToDevice(theme) {
    await AsyncStorage.setItem('@theme', theme);
    setCurrentTheme(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        chosenTheme: themes[currentTheme],
        saveThemeToDevice,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
