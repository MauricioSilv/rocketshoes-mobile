import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #7159c1;
  padding: 20px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: none;
`;

export const Product = styled.View`
  align-items: center;
  padding: 20px;
  margin: 7px;
  background: #fff;
  border-radius: 5px;
`;

export const ImageProduct = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const TitleProduct = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  color: #333;
`;

export const PriceProdutc = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ButtonProduct = styled.TouchableOpacity`
  flex-direction: row;
  background: #7159c1;
  width: 100%;
  height: 42px;
  border-radius: 5px;
  margin-top: auto;
`;

export const IconCart = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: rgba(0, 0, 0, 0.1);
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  flex: 3;
  text-align: center;
  align-self: center;
`;

export const Amount = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-size: 14px;
`;
