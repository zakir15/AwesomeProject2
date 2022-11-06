import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './About';
import Home from './Home';
import Detail from './Detail';
import Histori from './Histori';
import Profil from './Profil';
import Tampilan from './Tampilan';



function Home_Screen() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen </Text> 
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Histori" component={Histori} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Tampilan" component={Tampilan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;