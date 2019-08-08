import React from 'react';
import { View, Image } from 'react-native';

import logo from '../assets/images/logo.png';

export default function Container() {
  return (
    <View>
      <Image source={logo} style={{ marginLeft: 10 }} />
      <View />
    </View>
  );
}
