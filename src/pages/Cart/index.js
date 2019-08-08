import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  CartWrapper,
  FooterTitle,
  TotalValue,
  FinishButton,
  FinishButtonText,
  CartItemsList,
  CartItem,
  MainContent,
  ProductImage,
  Description,
  ProductTitle,
  ProductValue,
  CartItemFooter,
  AmountSelector,
  AmountInput,
  SubTotalCartValue,
  EmptyCartWrappper,
  EmptyCartText,
} from './styles';

import { formatPrice } from '../../util/format';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, item) => {
        return totalSum + item.price * item.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(item => ({
      ...item,
      subtotal: formatPrice(item.price * item.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(item) {
    dispatch(CartActions.updateAmountRequest(item.id, item.amount + 1));
  }

  function decrement(item) {
    dispatch(CartActions.updateAmountRequest(item.id, item.amount - 1));
  }

  const renderCartItems = item => (
    <CartItem>
      <MainContent>
        <ProductImage source={{ uri: item.image }} />
        <Description>
          <ProductTitle> {item.title} </ProductTitle>
          <ProductValue>{item.priceFormated}</ProductValue>
        </Description>
        <TouchableOpacity
          onPress={() => dispatch(CartActions.removeFromCart(item.id))}
        >
          <Icon color="#7159c1" name="close" size={24} />
        </TouchableOpacity>
      </MainContent>
      <CartItemFooter>
        <AmountSelector>
          <TouchableOpacity onPress={() => decrement(item)}>
            <Icon color="#7159c1" name="remove-circle-outline" size={24} />
          </TouchableOpacity>
          <AmountInput readOnly value={String(item.amount)} />
          <TouchableOpacity onPress={() => increment(item)}>
            <Icon color="#7159c1" name="add-circle-outline" size={24} />
          </TouchableOpacity>
        </AmountSelector>
        <SubTotalCartValue>{item.subtotal}</SubTotalCartValue>
      </CartItemFooter>
    </CartItem>
  );
  function renderContent() {
    if (cart.length > 0) {
      return (
        <CartWrapper>
          <CartItemsList
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => renderCartItems(item)}
          />
          <View>
            <FooterTitle>Total</FooterTitle>
            <TotalValue>{total}</TotalValue>
            <FinishButton>
              <FinishButtonText>Finalizar pedido</FinishButtonText>
            </FinishButton>
          </View>
        </CartWrapper>
      );
    }
    return (
      <EmptyCartWrappper>
        <Icon name="remove-shopping-cart" color="#eee" size={64} />
        <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
      </EmptyCartWrappper>
    );
  }
  return <Container>{renderContent()}</Container>;
}
