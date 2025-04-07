import React, { Component } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

const Habitos = ({ titulo, imagem, fontLoaded }) => {
  return (
    <View style={{ marginVertical: 10, alignItems: 'center' }}>
      <Image
        source={{ uri: imagem }}
        style={{ width: 100, height: 100, marginBottom: 5 }}
      />
      <Text style={{
        fontSize: 16,
        color: '#333',
        fontFamily: fontLoaded ? 'Oswald_400Regular' : undefined
      }}>
        {titulo}
      </Text>
    </View>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      showHabits: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Oswald_400Regular: require("@expo-google-fonts/oswald/Oswald_400Regular.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  toggleHabits = () => {
    this.setState((prevState) => ({
      showHabits: !prevState.showHabits
    }));
  };

  render() {
    const { showHabits, fontsLoaded } = this.state;

    const habitosLista = [
      {
        titulo: "Ler um livro",
        imagem: "https://cdn-icons-png.flaticon.com/512/3389/3389081.png"
      },
      {
        titulo: "Organizar o espaço para o dia seguinte",
        imagem: "https://cdn-icons-png.flaticon.com/512/2400/2400629.png"
      },
      {
        titulo: "Beber 2 litros de água",
        imagem: "https://cdn-icons-png.flaticon.com/512/2447/2447764.png"
      },
      {
        titulo: "Praticar exercícios",
        imagem: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png"
      },
      {
        titulo: "Praticar a gratidão",
        imagem: "https://cdn-icons-png.flaticon.com/512/12649/12649647.png"
      }
    ];

    return (
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{
          color: '#006400',
          fontSize: 25,
          margin: 10,
          fontFamily: fontsLoaded ? 'Oswald_400Regular' : undefined
        }}>
          Bergamota
        </Text>

        <TouchableOpacity
          onPress={this.toggleHabits}
          style={{
            alignItems: "center",
            backgroundColor: "#f69f58",
            padding: 10,
            borderRadius: 4,
            marginBottom: 20
          }}
        >
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2024/08/16/03/50/ai-generated-8972600_1280.png' }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={{
            color: '#006400',
            fontSize: 15,
            margin: 10,
            fontFamily: fontsLoaded ? 'Oswald_400Regular' : undefined
          }}>
            Hábitos saudáveis para incluir na rotina
          </Text>
        </TouchableOpacity>

        {showHabits && (
          <View style={{
            marginTop: 20,
            backgroundColor: '#f2f2f2',
            padding: 10,
            borderRadius: 8
          }}>
            {habitosLista.map((habit, index) => (
              <Habitos
                key={index}
                titulo={habit.titulo}
                imagem={habit.imagem}
                fontLoaded={fontsLoaded}
              />
            ))}
          </View>
        )}

        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#f26655",
            padding: 10,
            borderRadius: 4,
            marginTop: 20
          }}
        >
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2021/01/29/17/26/time-5961665_1280.png' }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={{
            color: '#006400',
            fontSize: 15,
            margin: 10,
            fontFamily: fontsLoaded ? 'Oswald_400Regular' : undefined
          }}>
            Como criar uma rotina?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default App;
