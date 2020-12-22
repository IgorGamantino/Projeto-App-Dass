import React from 'react';
import { ImageBackground } from 'react-native';

import imgbackground from '../../assets/images/image2.png';

import { Container, BgFundo } from './styles';

import CardLogin from '../../components/CardLogin';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ImageBackground
        source={imgbackground}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <BgFundo>
          <CardLogin />
        </BgFundo>
      </ImageBackground>
    </Container>
  );
};

export default SignIn;
