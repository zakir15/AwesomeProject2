import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native';
import {Card} from 'react-native-paper'; 
import Karyawan from '../Karyawan';

const Home = ({navigation}) => {
    const [data, setData] = React.useState(Karyawan);

    const listKaryawan = ({item}) => {
        return(
            <Card style={style.cardUtama} onPress={()=>navigation.navigate('Detail',
            {Karyawan:item})}>
            <View style={style.cardView}>
                <Image style={{width:50,  height:50, borderRadius:50/2}}
                source={{url:item.foto}}/>
                <View style={{marginLeft:12}}>
                    <Text style={style.teks}></Text>
                    <Text style={style.teks}></Text>
                </View>
            </View>
            </Card>
        )
    }


return (
    <View style={{flex:1}}>
        <FlatList
        data={data}
        renderItem={listKaryawan}
        keyExtractor={item=>item.id}
        />
    </View>
);
}

const styles = StyleSheet.create({
    cardUtama: {
        margin:5,
        shadowColor: '#470000',
        shadowOffset: {width:0, height:2},
    },
    cardView: {
        flexDirection:'row',
        padding:6
    },
    teks: { fontSize:16 }
});

export default Home;
