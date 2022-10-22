import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go to About'
            onPress={()=>navigation.navigate('About')}/>

            <Text>Detail Screen</Text>
            <Button title='Go to Detail'
            onPress={()=>navigation.navigate('Detail')}/>

            <Text>Histori Screen</Text>
            <Button title='Go to Histori'
            onPress={()=>navigation.navigate('Histori')}/>

            <Text>Profil Screen</Text>
            <Button title='Go to Profil'
            onPress={()=>navigation.navigate('Profil')}/>
  
            <Text>Tampilan Screen</Text>
            <Button title='Go to Tampilan'
            onPress={()=>navigation.navigate('Tampilan')}/>
        </View>
    );
};


export default Home;
