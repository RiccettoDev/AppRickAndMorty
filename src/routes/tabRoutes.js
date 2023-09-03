import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../page/Home';
import Profile from '../page/Profile';

import homeIcon from '../assets/icons/home.png';
import profileIcon from '../assets/icons/profile.png';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveBackgroundColor: '#479f78',
          tabBarInactiveBackgroundColor: '#479f78',
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  source={homeIcon}
                  style={{
                    width: 35,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveBackgroundColor: '#479f78',
          tabBarInactiveBackgroundColor: '#479f78',
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  source={profileIcon}
                  style={{
                    width: 35,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
