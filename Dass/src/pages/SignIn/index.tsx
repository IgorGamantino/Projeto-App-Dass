import React from 'react';
import {} from 'react-native';

import { Container, ImageBackground } from './styles';

import BackgroundImg from '../../assets/images/image2.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ImageBackground source={BackgroundImg} />
    </Container>
  );
};

export default SignIn;
