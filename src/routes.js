import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import HeaderRight from './components/HeaderRight';
import HeaderLeft from './components/HeaderLeft';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: '#141419' },
        headerTintColor: '#fff',
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
          >
            <HeaderLeft />
          </TouchableOpacity>
        ),
        headerRight: <HeaderRight navigation={navigation} />,
      }),
    }
  )
);

export default Routes;
