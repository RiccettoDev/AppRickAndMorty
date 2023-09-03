import {StyleSheet} from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
    },
    containerInfo: {
      position: 'absolute',
      alignItems: 'center',
      padding: 16,
    },
    containerInfoData: {
      backgroundColor: '#fff',
      bottom: 280,
      padding: 16,
      height: '32%',
      opacity: 0.8,
      borderRadius: 16,
      elevation: 6,
    },
    containerInfoBottom: {
      alignItems: 'center',
    },
    containerInfoTop: {
      alignItems: 'center',
      top: 70,
    },
    image: {
      width: 450,
      height: 400,
    },
    title: {
      fontSize: 28,
      lineHeight: 30,
      fontWeight: 'bold',
      color: theme.title,
      marginBottom: 5,
    },
    titleBig: {
      fontSize: 32,
      lineHeight: 36,
      fontWeight: 'bold',
      color: theme.titleCardWhite,
    },
    subtitle: {
      fontSize: 22,
      lineHeight: 26,
      fontWeight: 'bold',
      color: theme.subtitleInCardWhite,
    },
    subtitleBottom: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: 'bold',
      color: theme.subtitle,
      marginTop: 40,
    },
  });
};
