import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import BackgroundImg from '../../assets/images/image2.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={BackgroundImg} />
    </Container>
  );
};

export default SignIn;
