import {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
  const [name] = useState('Eduardo');

  return (
    <GlobalContext.Provider
      value={{
        name,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
