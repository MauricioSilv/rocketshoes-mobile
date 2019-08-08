import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CartSize } from './styles';

export default function HeaderRight({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
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

HeaderRight.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
