import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './src/pages/home'
import login from './src/pages/login'
import registro from './src/pages/registro'
import Historico from './src/pages/Historico'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login}/> 
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="Registro" component={registro}/>
        <Stack.Screen name="Historico" component={Historico}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
