import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFF" />
    <View style={{ flex: 1, backgroundColor: '#FFFF' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
