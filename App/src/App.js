import React from 'react';
import style from "./style.js"
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import First from "./components/worknt/component1.js"
// import Rap from './components/worknt/Rap.js';
import Title from './components/worknt/Title.js';
import Cirno from "./components/Cirno.js"
import Random from './components/Random.js';
import Buttone from './components/Button.js';
//import Contador from './Components/Contador';
//import Pai from './Components/Indireta/Pai'
//import ContadorV2 from './Contador/ContadorV2';
//import Diferenciar from './Components/Diferenciar';
// import Familia from './Components/relacao/Familia'
// import Membros from './Components/relacao/Membros'
// import UsuarioLogado from './Components/UsuarioLogado';
//import ParImpar from './Components/ParImpar';
import ListaProdutosV2 from './Components/Produtos/ListaProdutosV2';
//import First, {func1, func2}

export default function App() {
  return (
    // <Familia>
    //   <UsuarioLogado usuario={{nome: "Fernanda", email:"fe@gmail.com"}}/>
    //   <UsuarioLogado usuario={{nome: "Luisa", }}/>
    //   <UsuarioLogado usuario={{email: "contato@google.com", }}/>
    //   <UsuarioLogado usuario={{ }}/>
     
    //   <Membros nome="Luisa" sobrenome="Silva"/>
    //   <Membros nome="Arthur" sobrenome="Silva"/>
    //   </Familia>
    //   <Familia>
    //     <Membros nome="Eduardo" sobrenome="Carvalho"/>
    //   </Familia>
    //   <ParImpar/>
    //   <Diferenciar/>
    //   <ContadorV2/>
    //   <Contador inicial={100} passo={2}/>
    //   <Contador/>
    <View style={styles.app}>
      <Pai/>
      <Text>Be racist.</Text>
      <Title>Do crime</Title>
      <Random min={1} max={60}/>
      <Buttone/>
      <Cirno/>
      {/* <Title principal="Be racist" secundario="Have numbers:"/> */}
      {/* <Rap min={0} max={60}/> */}
      {/* <First style={styles.container}/> */}
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