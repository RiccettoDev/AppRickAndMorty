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
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  source={homeIcon}
                  resizeMode="contain"
                  style={{
                    width: 30,
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
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  source={profileIcon}
                  resizeMode="contain"
                  style={{
                    width: 30,
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
