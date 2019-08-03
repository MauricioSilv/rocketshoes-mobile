import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
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
              <ButtonProduct onPress={() => this.handleAddProduct(item.id)}>
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
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
