import 'react-native-gesture-handler';
import {TemaProvider} from './src/contexts/TemaContext';

import Routes from './src/routes';

function App() {
  return (
    <TemaProvider>
      <Routes />
    </TemaProvider>
  );
}

export default App;
