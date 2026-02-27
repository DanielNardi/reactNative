import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [tela, setTela] = useState('0');

  const clicarBotao = (valor) => {
      if(valor === 'C'){
        setTela(' ');
      } else if(valor === '='){
        try{
          setTela(eval(tela).toString());
        } catch (a){
            setTela('Pode não my champs')
        }
      } 


  }

  const Botao = ({ inserir, cor }) => (
    <TouchableOpacity 
      style={[styles.botao, { backgroundColor: cor || '#422' }]} 
      onPress={() => clicarBotao(inserir)}>
      <Text style={styles.textoNumero}>{inserir}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.caixaGeral}>
      <Text style={styles.resultado}>{tela}</Text>
      
      <View style={styles.tecladoNumerico}>
        <View style={styles.linha}>
          <Botao inserir="7" /> 
          <Botao inserir="8" /> 
          <Botao inserir="9" /> 
          <Botao inserir="/" cor="red" />
        </View>
        <View style={styles.linha}>
          <Botao inserir="4" /> 
          <Botao inserir="5" /> 
          <Botao inserir="6" />
          <Botao inserir="*" cor="red" />
        </View>
        <View style={styles.linha}>
          <Botao inserir="1" /> 
          <Botao inserir="2" /> 
          <Botao inserir="3" /> 
          <Botao inserir="-" cor="red" />
        </View>
        <View style={styles.linha}>
          <Botao inserir="C" cor="orange" /> 
          <Botao inserir="0" /> 
          <Botao inserir="=" cor="yellow" /> 
          <Botao inserir="+" cor="red" />
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  caixaGeral: { 
    flex: 1, 
    backgroundColor: 'black', 
    justifyContent: 'center',
  },

  resultado: { 
    color: '#fff', 
    fontSize: 60, 
    fontWeight: '500',
    backgroundColor: "grey",
    marginHorizontal:20,
    borderRadius: 25,
    width: '95%'
  },
  tecladoNumerico: { 
    paddingHorizontal: 20,
    marginTop: 40, 
    gap: 12,

  },
  linha: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    gap: 15
  },
  botao: { 
    flex: 1, 
    height: 75, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 40},
    textoNumero: { 
    color: '#fff', 
    fontSize: 26
  }
});