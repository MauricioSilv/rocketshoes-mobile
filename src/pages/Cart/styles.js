import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #7159c1;
`;

export const CartWrapper = styled.View`
  background: #fff;
  flex: 1;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
`;
export const FooterTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999;
  margin-top: 20px;
`;
export const TotalValue = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;
export const FinishButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 5px;
  height: 42px;
  justify-content: center;
`;
export const FinishButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
`;
export const CartItemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
export const CartItem = styled.View``;
export const MainContent = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;
export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;
export const Description = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
  flex: 1;
`;
export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
  max-width: 80%;
`;
export const ProductValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-top: 5px;
`;
export const CartItemFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  border-radius: 5px;
  padding: 10px;
  height: 45px;
  align-items: center;
`;
export const AmountSelector = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AmountInput = styled.TextInput`
  background: #fff;
  border: 1px solid #9999;
  border-radius: 5px;
  margin: 0 5px;
  padding: 0 10px;
  text-align: center;
`;
export const SubTotalCartValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
export const EmptyCartWrappper = styled.View`
  background: #fff;
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const EmptyCartText = styled.Text`
  color: #333;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
