import {createDrawerNavigator} from '@react-navigation/drawer';

import TabRoutes from './tabRoutes';
import StackRoutes from './stackRoutes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home " component={TabRoutes} />
      <Drawer.Screen name="Profile " component={StackRoutes} />
    </Drawer.Navigator>
  );
}
