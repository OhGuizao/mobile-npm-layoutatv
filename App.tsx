import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';//importei classes do react
import { estilo } from './css/Styles';//importei o css

export default function App() {
  return (
    <View style={estilo.container}>


      {/* ~~~~~~~~~~~~~~~~~~~~ Cabeçalho ~~~~~~~~~~~~~~~~~~~~ */}
      <View style={estilo.cabecalho}>

        <View style={estilo.interacaocabecalho}>
          <Text style={estilo.pesquisacabecalho}>Pesquise Aqui...</Text>
          <Image source={require("./assets/settings.png")} style={estilo.iconconfcabecalho} />
        </View>

      </View>
      {/* ~~~~~~~~~~~~~~~~~~~~ Fim do Cabeçalho ~~~~~~~~~~~~~~~~~~~~ */}



      {/* ~~~~~~~~~~~~~~~~~~~~ Imagem Pós Cabeçalho ~~~~~~~~~~~~~~~~~~~~ */}
      <View style={estilo.imgcab}>
        <Image source={require("./assets/prof.png")} style={estilo.imgposcabecalho} />
      </View>
      {/* ~~~~~~~~~~~~~~~~~~~~ Fim da Imagem Pós Cabeçalho ~~~~~~~~~~~~~~~~~~~~ */}

      <ScrollView horizontal={false} style={estilo.scroll}>

        {/* ~~~~~~~~~~~~~~~~~~~~ Corpo ~~~~~~~~~~~~~~~~~~~~ */}
        <View style={estilo.corpo}>


          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>


          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>


          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>


          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>
          
          
          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>
          

          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>
          

          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>
          

          <View style={estilo.usercorpo}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/90/90784.png" }} style={estilo.imguser}></Image>
            <View style={estilo.estilocorpouserdois}>
              <Text style={estilo.nometxtuser}>Carlos Santana</Text>
              <Text style={estilo.desctxtuser}>Professor de mat</Text>
            </View>
            <View style={estilo.estilocorpouserdois}>
              <Text style={estilo.horastxtuser}>R$260/H</Text>
              <View style={estilo.avaviewuser}>
                <Image source={require("./assets/estrela.png")} style={estilo.estrelauser}></Image>
                <Text style={estilo.avatxtuser}>4,5</Text>
              </View>
            </View>
          </View>
          

        </View>
        {/* ~~~~~~~~~~~~~~~~~~~~ Fim do Corpo ~~~~~~~~~~~~~~~~~~~~ */}
      </ScrollView>
      {/* ~~~~~~~~~~~~~~~~~~~~ Menu Bottom ~~~~~~~~~~~~~~~~~~~~ */}
      <View style={estilo.menubottom}>
      </View>
      {/* ~~~~~~~~~~~~~~~~~~~~ Fim do Menu Bottom ~~~~~~~~~~~~~~~~~~~~ */}
    </View>
  );
}
