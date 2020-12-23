import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import imgbackground from '../../assets/images/image.png';
import { Text,View,ImageBackground } from 'react-native';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native'

import { Container, BgFundo } from './styles';
import CardLogin from '../../components/CardLogin'

const ForgotPassword: React.FC = () => {
  const navigate =  useNavigation();
return(
  <>
      <Container>
      <ImageBackground
        source={imgbackground}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <BgFundo>

          <CardLogin>
          <Text style={{marginTop: 32}} >E-mail</Text>
          <Text style={{marginTop:8,opacity:0.8,fontSize:13,color:'#90A0B7',fontFamily:'Poppins-Regular'}}>Digite seu E-mail</Text>
           <Text style={{marginBottom:11}} >_________________________________________</Text>

         <View style={{height:66,paddingRight:40}} >
         <Text style={{ alignItems:'center', fontSize:13,color:'#797979',marginBottom:23,paddingRight:20}} > Informe o e-mail para receber orientações
          de como redefinir sua senha.</Text>
         </View>

         <Button onPress={()=> navigate.goBack()} style={{backgroundColor: '#4CAF50'}} >Continuar</Button>

         <Button  onPress={()=> navigate.goBack()} style={{backgroundColor: '#E53D4E'}} >Cancelar</Button>

          </CardLogin >

        </BgFundo>

      </ImageBackground>
    </Container>

  </>
)};

export default ForgotPassword;
