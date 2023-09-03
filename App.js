import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {ThemeProvider} from './src/contexts/ThemeContext';
import {GlobalProvider} from './src/contexts/GlobalContext';

import Routes from './src/routes';

function App() {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <StatusBar backgroundColor={'#479f78'} />
        <Routes />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
