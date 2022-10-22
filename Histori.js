import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const Histori = ({navigation}) => {
    return(
        <View>
            <Text>Histori Screen</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Histori;
