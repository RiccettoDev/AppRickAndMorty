import {NavigationContainer} from '@react-navigation/native';

import DrawerRoutes from './drawerRoutes';

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
