import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const About = ({navigation})=> {
    return(
        <View>
            <Text>About Screen</Text>
            <Text> SOTO </Text>
            <Text>Soto adalah makanan khas Indonesia seperti sop
                 yang terbuat dari kaldu daging dan sayuran</Text>
            <Text>Apa ciri khas soto yang ada di Indonesia ?</Text>
            <Text>Ciri khas dari Soto Lamongan ini adalah kuahnya yang berwarna kuning. 
                Rasanya semakin lezat karena adanya berbagai rempah di dalamnya. 
                Kuah soto yang berwarna kuning bening dengan rasa gurih dan khas terbuat dari bumbu halus, 
                seperti bawang putih, ketumbar sangria, merica, kemiri sangrai dan kunyit.</Text>
            <Button title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default About;
