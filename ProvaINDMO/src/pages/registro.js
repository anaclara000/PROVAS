import {Text, View, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react'

export default function registro({navigation}) { 
    const [Pet, setPet] = useState('');
    const [Medico, setMedico] = useState('');
    const [Vacina, setVacina] = useState('');
    const [Data, setData] = useState('');

    // var compilar = [];
    // function salvaTudo(e) {
    //   compilar.push(e)
    // }

    const salvar = async () => {
        let lista = {
                    "PET":Pet,
                    "Veterinario":Medico,
                    "Vacina":Vacina,
                    "Data":Data
            }
        setPet
        setMedico
        setVacina
        setData
        try{
          const val = JSON.stringify(lista)
          await AsyncStorage.setItem("biblioteca", val);
          console.log(lista)
            if(lista.PET == null){
                alert("Por favor preencher os campos")
            }else{
                alert("Vacina Cadastrada!")
                window.location.reload()
            }
        }catch(err){
          console.log(err);
        }
      }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome do pet" onChangeText={(val) => { setPet(val) }}/>
            <TextInput style={styles.input} placeholder="Nome do médico veterinário" onChangeText={(val) => { setMedico(val) }}/>
            <TextInput style={styles.input} placeholder="Nome da vacina" onChangeText={(val) => { setVacina(val) }}/>
            <TextInput style={styles.input} placeholder="Data de aplicação" onChangeText={(val) => { setData(val) }}/>
            <TouchableOpacity style={styles.btn} onPress={() => { salvar()}} >Registrar</TouchableOpacity>
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#505050',
        alignItems: 'center',
    },
    input: {
        width: 250,
        margin: '10px',
        padding: '10px',
        backgroundColor: '#ffff',
        borderRadius: '5px',
        placeholderTextColor: "#00000077",
        secureTextEntry: true,
    },

    btn: {
        marginTop: '10px',
        fontFamily: 'Calibri',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '20px',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        width: 230,
        border: 'none',
        backgroundColor :'#8a66fa',
    }
});
