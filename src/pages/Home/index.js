import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ImageProduct,
  ProductList,
  Product,
  TitleProduct,
  PriceProdutc,
  ButtonProduct,
  IconCart,
  ButtonText,
  Amount,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((SumAmount, product) => {
      SumAmount[product.id] = product.amount;

      return SumAmount;
    }, {})
  );

  useEffect(() => {
    async function getProduct() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProduct();
  }, []);

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product>
            <ImageProduct
              source={{
                uri: item.image,
              }}
            />
            <TitleProduct>{item.title}</TitleProduct>
            <PriceProdutc>{item.priceFormatted}</PriceProdutc>
            <ButtonProduct onPress={() => handleAddProduct(item.id)}>
              <IconCart>
                <Icon name="add-shopping-cart" size={20} color="#fff" />
                <Amount>{amount[item.id] || 0}</Amount>
              </IconCart>
              <ButtonText>Adicionar ao carrinho</ButtonText>
            </ButtonProduct>
          </Product>
        )}
      />
    </Container>
  );
}
