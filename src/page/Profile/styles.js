import {StyleSheet} from 'react-native';

export const styles = tema => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: tema.title,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '400',
      color: tema.subtitle,
      marginBottom: 20,
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
