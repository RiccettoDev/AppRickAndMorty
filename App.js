import 'react-native-gesture-handler';
import {ThemeProvider} from './src/contexts/ThemeContext';

import Routes from './src/routes';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
