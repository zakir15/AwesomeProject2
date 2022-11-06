import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatonContainer } from '@react-navigation/native';
import Home from './navigasi/Home';
import Detail from './navigasi/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigatonContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
        options={{
          title: 'Data Karyawan',
          headerStyle: { backgroundColor: '#006aff' },
          headerTintColor: '#fff'
        }}/>
        <Stack.Screen name='Detail' component={Detail}
        options={{
          title: 'Detail Karyawan',
          headerStyle: { backgroundColor:'#006aff' },
          headerTintColor: '#fff'
        }}/>
      </Stack.Navigator>
    </NavigatonContainer>
  );
}

export default App;