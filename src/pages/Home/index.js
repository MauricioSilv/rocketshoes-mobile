import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { formatPrice } from '../../util/format';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = item => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      item,
    });
  };

  render() {
    const { products } = this.state;
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
              <ButtonProduct onPress={() => this.handleAddProduct(item)}>
                <IconCart>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <Amount>3</Amount>
                </IconCart>
                <ButtonText>Adicionar ao carrinho</ButtonText>
              </ButtonProduct>
            </Product>
          )}
        />
      </Container>
    );
  }
}
export default connect()(Home);
