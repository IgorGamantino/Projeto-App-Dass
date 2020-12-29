import React from 'react';
import { ImageBackground, Text,View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button';

import imgbackground from '../../assets/images/image.png';

import { Container, BgFundo } from './styles';

import CardLogin from '../../components/CardLogin';

const SignIn: React.FC = () => {

 const navigate =  useNavigation();


  return (
    <Container>
      <ImageBackground
        source={imgbackground}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <BgFundo>

          <CardLogin>
            <View>
              <Text style={{marginTop:32}} >
                Usuario
              </Text>
              <Text style={{marginTop:7}}>_________________________________________</Text>
              <Text style={{marginTop:24}}>Senha</Text>
              <Text style={{marginTop:7,marginBottom:32}} >_________________________________________</Text>

            </View>

            <Button  onPress={()=> navigate.navigate('ForgotPassword') }
            style={{backgroundColor: '#4CAF50'}} >entrar</Button>

          </CardLogin >

        </BgFundo>

      </ImageBackground>
    </Container>
  );
};

export default SignIn;
