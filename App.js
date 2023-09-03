import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {ThemeProvider} from './src/contexts/ThemeContext';

import Routes from './src/routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  return (
    <ThemeProvider>
      <StatusBar backgroundColor={'#479f78'} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
