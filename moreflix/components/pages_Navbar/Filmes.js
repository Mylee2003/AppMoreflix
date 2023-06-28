import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView,  TouchableOpacity} from 'react-native';

export default function Filmes(props){

  return(
  <ScrollView>
   <View style={estilo.container}>

      <View style={estilo.colunas}>

    <Text style={estilo.subtitulo1}> Barbie: O Filme  </Text>
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Barbie')}}>
  <Image style={estilo.itens}
    source={require('../../assets/Barbie.png')}/>
  </TouchableOpacity>
  

  <Text style={estilo.subtitulo1}> Close </Text>
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('Close')}}>
  <Image style={estilo.itens}
    source={require('../../assets/Close.png')}/>
  </TouchableOpacity>


  <Text style={estilo.subtitulo1}> Homem-Aranha No Aranhaverso 2  </Text>
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('HomemAranha')}}>
 <Image style={estilo.itens}
    source={require('../../assets/HomemAranha.png')}/>
  </TouchableOpacity>
    
  
  
    <Text style={estilo.subtitulo1}> Pequena Sereia  </Text>    
  <TouchableOpacity  onPress={()=>{props.navigation.navigate('PequenaSereia')}}>
  <Image style={estilo.itens}
    source={require('../../assets/PequenaSereia.png')}/>
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