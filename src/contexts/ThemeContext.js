import {createContext, useEffect, useState} from 'react';
import {escuro, claro} from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext({});

export function ThemeProvider({children}) {
  const [currentTheme, setCurrentTheme] = useState('escuro');

  const themes = {
    escuro: escuro,
    claro: claro,
  };

  useEffect(() => {
    const loadData = async () => {
      const saveTheme = await AsyncStorage.getItem('@tema');
      if (saveTheme) {
        return setCurrentTheme(saveTheme);
      }
    };
    loadData();
  }, []);

  async function saveThemeToDevice(tema) {
    await AsyncStorage.setItem('@tema', tema);
    setCurrentTheme(tema);
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
