import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface ColorButton {
  children:string;
  props: string;
}

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;

`;

export const ButtonText = styled.Text `
  font-size: 15px;
  color: #fff;
  font-family: 'Poppins-Regular';

`

