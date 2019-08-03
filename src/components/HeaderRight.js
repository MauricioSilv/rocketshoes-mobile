import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CartSize } from './styles';

function HeaderRight({ navigation, cartSize }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      activeOpacity={0.8}
    >
      <Icon
        name="shopping-cart"
        size={25}
        color="#fff"
        style={{ marginRight: 10 }}
      />
      <CartSize>{cartSize || 0}</CartSize>
    </TouchableOpacity>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(HeaderRight);
