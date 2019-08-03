import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

function Cart({ cart, dispatch }) {
  const renderCartItems = item => (
    <CartItem>
      <MainContent>
        <ProductImage source={{ uri: item.image }} />
        <Description>
          <ProductTitle> {item.title} </ProductTitle>
          <ProductValue>{item.priceFormated}</ProductValue>
        </Description>
        <TouchableOpacity
          onPress={() => dispatch({ type: 'REMOVE_FROM_CART', id: item.id })}
        >
          <Icon color="#7159c1" name="close" size={24} />
        </TouchableOpacity>
      </MainContent>
      <CartItemFooter>
        <AmountSelector>
          <TouchableOpacity onPress="">
            <Icon color="#7159c1" name="remove-circle-outline" size={24} />
          </TouchableOpacity>
          <AmountInput readOnly value={String(item.amount)} />
          <TouchableOpacity onPress="">
            <Icon color="#7159c1" name="add-circle-outline" size={24} />
          </TouchableOpacity>
        </AmountSelector>
        <SubTotalCartValue />
      </CartItemFooter>
    </CartItem>
  );
  function renderContent() {
    if (cart.length > 0) {
      console.tron.log(cart);
      return (
        <CartWrapper>
          <CartItemsList
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => renderCartItems(item)}
          />
          <View>
            <FooterTitle>Total</FooterTitle>
            <TotalValue />
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

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
