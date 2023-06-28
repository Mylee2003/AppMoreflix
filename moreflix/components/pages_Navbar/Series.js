import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView,  TouchableOpacity} from 'react-native';

export default function Series(props){

  return(
  <ScrollView>
   <View style={estilo.container}>

      <View style={estilo.colunas}>


   <Text style={estilo.subtitulo1}> Alice in Borderland </Text>
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Alice')}}>
     <Image style={estilo.itens}
    source={require('../../assets/Alice.png')}/>
  </TouchableOpacity>

     <Text style={estilo.subtitulo1}> Eu Nunca  </Text>
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('EuNunca')}}>
 <Image style={estilo.itens}
    source={require('../../assets/EuNunca.png')}/>
  </TouchableOpacity>
   
   <Text style={estilo.subtitulo1}> Wandinha  </Text>
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Wandinha')}}>
  <Image style={estilo.itens}
    source={require('../../assets/Wandinha.png')}/>
  </TouchableOpacity>
  
        <Text style={estilo.subtitulo1}> Xo, Kitty </Text>
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Xokitty')}}>
   <Image style={estilo.itens}
    source={require('../../assets/XoKitty.png')}/>
  </TouchableOpacity>
   
  
  </View>
  </View>
   </ScrollView>
 
   
  );
}


const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#025464',
     flexDirection: 'row',
 justifyContent: 'space-evenly',
 flexWrap:'wrap'
    
},
itens:{
 paddingVertical: 10,
  textAlign: 'left',
  
  marginTop: 10,
  marginBottom: 2,
  marginLeft: 15,
  marginRight: 15,
  paddingLeft: 15,
  paddingRight: 15,
  width: 200,
  height: 300
},
subtitulo1: {
     margin: 70,
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
      marginLeft: 15,
  marginRight: 15,
    backgroundColor: '#E57C23',
    color: '#F8F1F1',
    padding: 5,
    borderRadius:15,
    width: 200
  
},
})