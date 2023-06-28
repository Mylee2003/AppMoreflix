import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text, Image, ScrollView } from 'react-native';

export default function XoKitty(){

return (

<ScrollView> 
        <View style={estilo.container}>



<Text style={estilo.titulo}> Xo, Kitty </Text>

  <Image style={estilo.itens}
    source={require('../../assets/XoKitty.png')}/>
    <Text style={estilo.subtitulo1}> Kitty, uma adolescente de 17 anos, está decidida a se mudar para a Coréia para conhecer webnamorado e para descobrir mais sobre o passado de sua mãe, mas o que ela irá descobrir vai muito além de garotos bobos e românces antigos da mãe.
</Text>

    <Text style={estilo.subtitulo2}>Temporadas: 1</Text>
    <Text style={estilo.subtitulo2}>Gêneros: Comédia romântica</Text>
    <Text style={estilo.subtitulo2}>Primeiro episódio: 18 de maio de 2023 </Text>
    <Text style={estilo.subtitulo2}>Quantdade de episódios: 10</Text>
    
    
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

