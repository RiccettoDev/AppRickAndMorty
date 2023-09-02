import {createContext, useEffect, useState} from 'react';
import {escuro, claro} from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TemaContext = createContext({});

export function TemaProvider({children}) {
  const [temaAtual, setTemaAtual] = useState('escuro');

  const temas = {
    escuro: escuro,
    claro: claro,
  };

  useEffect(() => {
    const loadData = async () => {
      const temaSalvo = await AsyncStorage.getItem('@tema');
      if (temaSalvo) {
        return setTemaAtual(temaSalvo);
      }
    };
    loadData();
  }, []);

  async function salvarTemaNoDispositivo(tema) {
    await AsyncStorage.setItem('@tema', tema);
    setTemaAtual(tema);
  }

  return (
    <TemaContext.Provider
      value={{
        temaAtual,
        setTemaAtual,
        temaEscolhido: temas[temaAtual],
        salvarTemaNoDispositivo,
      }}>
      {children}
    </TemaContext.Provider>
  );
}
