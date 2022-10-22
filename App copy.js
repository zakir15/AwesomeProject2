import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import foto from './tito.jpeg';
import { style } from "./style";
import komputer from './image/komputer.jpeg';

const App = () => {
  return (
    <View style={style.container}>
      
    <Teks />
    <Text style={style.tulisanku}>Selamat datang</Text>
    <Image source={{uri:'https://placeimg.com/120/120/nature'}} style={{ width:100, height:100}}></Image>
    <TextInput style={{borderWidth:1}}/>
    <Photo />
    <Tampilan />
    <Tulisan/>
    <Photoku/>
    </View>
  );
}
const Teks = () => {
return (
  <Text style={style.tulisanku}>Hello Word</Text>
)

}

const Photo = () =>
{
  return (
    <Image source={foto} style= {{width:200, height:200}} />
  )
}

const Tampilan = () => {
  return (
    <View style={{width:100, height:100, backgroundColor: 'red' }}></View>
  )
}

class Tulisan extends Component {
  render () {
    return (
      <Text> Tampilan dari Komponen Class</Text>
    )
  }
}

class Photoku extends Component {
  render () {
    return (
      <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:200,height:200}}/>
    )
}} 



export default App;