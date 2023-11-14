import React from 'react';
import style from "./style.js"
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import First from "./components/worknt/component1.js"
// import Rap from './components/worknt/Rap.js';
import Title from './components/worknt/Title.js';
import Cirno from "./components/Cirno.js"
import Random from './components/Random.js';
import Buttone from './components/Button.js';
import ListaProdutosV2 from './Components/Produtos/ListaProdutosV2';
import Mega from './components/mega/Mega.js';
import Pai from './Components/Indireta/Pai'
//import First, {func1, func2}

export default function App() {
  return (
    //_______________________________________
    /* <Title principal="Be racist" secundario="Have numbers:"/> */
    /* <Rap min={0} max={60}/> */
    /* <First style={styles.container}/> */
    //_______________________________________
    // <Familia>
    //   <UsuarioLogado usuario={{nome: "Fernanda", email:"fe@gmail.com"}}/>
    //   <UsuarioLogado usuario={{nome: "Luisa", }}/> or just email: {{email: "contato@google.com", }}
    //   <UsuarioLogado usuario={{ }}/>
    //   <Membros nome="Luisa" sobrenome="Silva"/>
    //   </Familia>
    //   <ParImpar/>
    //   <Diferenciar/>
    //   <Contador inicial={100} passo={2}/>
    //   <Contador/>
    <View style={styles.app}>
      <Pai/>
      <Text>Be racist.</Text>
      <Title>Do crime</Title>
      <Random min={1} max={60}/>
      <Buttone/>
      <Cirno/>
      <Mega/>
    </View>
  );
}

const styles = StyleSheet.create({
  
  app: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center"
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//cd App; npm expo start --tunnel