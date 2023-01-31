import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home/index'
import Cadastrar from './src/pages/Cadastrar/cad'
import Finalizar from './src/pages/Finalizar/finalizar'
import Canceladas from './src/pages/Finalizar/finalizar'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Finalizar" component={Finalizar} />
        <Stack.Screen name="Canceladas" component={Canceladas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});