import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text, Image, ScrollView } from 'react-native';

export default function Close(){

return (

<ScrollView> 
        <View style={estilo.container}>



<Text style={estilo.titulo}> Close </Text>

  <Image style={estilo.itens}
    source={require('../../assets/Close.png')}/>
    <Text style={estilo.subtitulo1}>Quando a herdeira sob sua proteção entra na mira de assassinos de aluguel, a guarda-costas Sam faz de tudo para salvá-la e ensiná-la a dar o troco na mesma moeda.
</Text>

    <Text style={estilo.subtitulo2}>Data de lançamento: 18 de janeiro de 2019</Text>
    <Text style={estilo.subtitulo2}> Gênero: Ação/Suspense</Text>
    <Text style={estilo.subtitulo2}> Duração: 1h 34m</Text>
    
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
    fontSize: 15,
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

