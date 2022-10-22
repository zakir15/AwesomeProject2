import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const Profil = ({navigation}) => {
    return(
        <View>
            <Text>Profil Screen</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Profil;
