import {createDrawerNavigator} from '@react-navigation/drawer';

import TabRoutes from './tabRoutes';
import StackRoutes from './stackRoutes';
import Character from '../page/Character';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home "
        component={TabRoutes}
        options={{
          drawerStyle: {backgroundColor: '#479f78'},
          headerStyle: {backgroundColor: '#479f78'},
          headerTintColor: '#fff',
          drawerLabelStyle: {
            color: '#fff',
            fontSize: 24,
            lineHeight: 28,
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Perfil "
        component={StackRoutes}
        options={{
          drawerStyle: {backgroundColor: '#479f78'},
          headerStyle: {backgroundColor: '#479f78'},
          headerTintColor: '#fff',
          drawerLabelStyle: {
            color: '#fff',
            fontSize: 24,
            lineHeight: 28,
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Personagens "
        component={Character}
        options={{
          drawerStyle: {backgroundColor: '#479f78'},
          headerStyle: {backgroundColor: '#479f78'},
          headerTintColor: '#fff',
          drawerLabelStyle: {
            color: '#fff',
            fontSize: 24,
            lineHeight: 28,
            fontWeight: 'bold',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
