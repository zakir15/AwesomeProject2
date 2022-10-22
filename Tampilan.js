import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const Tampilan = ({navigation}) => {
    return(
        <View>
            <Text>Tampilan Screen</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Tampilan;
