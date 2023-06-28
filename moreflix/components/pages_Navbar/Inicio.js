import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function Inicio(props){

  return(
 <View style={estilo.container}>
<ScrollView>
 

 <Text style={estilo.titulo0}> 
    MoreFlix <Fontisto name="film" size={24} color="E8AA42" /> </Text>

      <Text style={estilo.subtitulo1}> O melhor App de filmes e séries em alta! Aqui você encontra o melhor para assistir em cada momento!

</Text>
 <Text style={estilo.titulo} >Filmes Em Alta </Text>

 

    
 <TouchableOpacity onPress={()=>{props.navigation.navigate('HomemAranha')}}>
    <Image style={estilo.itens1}
    source={require('../../assets/HomemAranha.png')}/>
     </TouchableOpacity>

    

    
    <TouchableOpacity onPress={()=>{props.navigation.navigate('PequenaSereia')}}>
      <Image style={estilo.itens1}
    source={require('../../assets/PequenaSereia.png')}/>
    </TouchableOpacity>


<Text style={estilo.titulo} >Series Em Alta </Text>


<TouchableOpacity onPress={()=>{props.navigation.navigate('EuNunca')}}>
    <Image style={estilo.itens1}
    source={require('../../assets/EuNunca.png')}/>
    </TouchableOpacity>


<TouchableOpacity onPress={()=>{props.navigation.navigate('Xokitty')}}>
    <Image style={estilo.itens1}
    source={require('../../assets/XoKitty.png')}/>
    </TouchableOpacity>
   

     </ScrollView>
     </View>
     
  );
}



const estilo = StyleSheet.create({
  container: {
      flex:1,
    backgroundColor: '#025464',
     flexDirection: 'row',
 justifyContent: 'space-evenly',
 
  },

  itens1: {
     paddingVertical: 10,
  textAlign: 'left',
  
  marginTop: 10,
  marginBottom: 2,
  marginLeft: 15,
  marginRight: 15,
  paddingLeft: 15,
  paddingRight: 15,
  width: 120,
  height: 170
  },

  titulo: {
        margin: 70,
    fontSize: 18,
    marginBottom: 5,
    marginTop: 45,
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

  titulo0: {
    fontSize: 30,
    marginTop: 50,
    color: '#F8F1F1',
    backgroundColor: '#E57C23',
    textAlign: 'right',
    fontWeight: 'bold',
},

 subtitulo1: {
        margin: 20,
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'left',
      marginLeft: 5,
  marginRight: 5,
    color: '#F8F1F1',
    padding: 5,
    borderRadius:10,
    
 },

  
  
})