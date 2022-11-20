import styled from "styled-components/native";

export const Image = styled.ImageBackground`
  background: #333;
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  padding: 32px 24px 0;
  flex: 1;
`;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Header = styled.View``;

export const Ingredient = styled.View`
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  flex-direction: row;
  padding: 14px;
  align-items: center;
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterContainer = styled.View``;
