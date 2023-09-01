import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../page/Profile';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
