import {StyleSheet} from 'react-native';
import {theme} from '../../styles/global';

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
    color: theme.title,
  },
});
