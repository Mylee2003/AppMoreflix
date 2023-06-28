import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text, Image, ScrollView } from 'react-native';

export default function Barbie(){

return (

<ScrollView> 
        <View style={estilo.container}>



<Text style={estilo.titulo}> Barbie: O Filme  </Text>

  <Image style={estilo.itens}
    source={require('../../assets/Barbie.png')}/>
    <Text style={estilo.subtitulo1}> Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.

</Text>

    <Text style={estilo.subtitulo2}>Data de lançamento: 20 de julho de 2023</Text>
    <Text style={estilo.subtitulo2}> Gênero: Comédia/Fantasia </Text>
    <Text style={estilo.subtitulo2}> Duração: 1h 54m </Text>
    
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
 flexWrap:'wrap'},

 titulo: {
      margin: 50,
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
      marginLeft: 15,
  marginRight: 30,
  
    backgroundColor: '#E57C23',
    color: '#F8F1F1',
    padding: 5,
    borderRadius:15,
    width: 150
  
 },

 subtitulo1: {
        margin: 20,
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
      marginLeft: 5,
  marginRight: 5,
    color: '#F8F1F1',
    padding: 5,
    borderRadius:10,
    
 },

 itens: {
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

 subtitulo2: {
        margin: 30,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
      marginLeft: 15,
  marginRight: 15,
  
    backgroundColor: '#E8AA42',
    color: '#F8F1F1',
    padding: 5,
    borderRadius:15,
    width: 150
  
 }

  
});

