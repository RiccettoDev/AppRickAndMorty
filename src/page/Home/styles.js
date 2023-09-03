import {StyleSheet} from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      lineHeight: 30,
      fontWeight: 'bold',
      color: theme.title,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 22,
      lineHeight: 26,
      fontWeight: 'bold',
      color: theme.subtitle,
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
