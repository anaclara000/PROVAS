import {Text, View, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react'
import { useState, useEffect } from 'react';

export default function Historico({routes}) { 
    const [busca, setBusca] = useState("");
//     const [value, setValue] = useState();

//     var data
//     var resp  = {
//         "PET":"",
//         "Veterinario":"",
//         "Vacina":"",
//         "Data":""
// }
//     const ler = async () => {
//         try{
//           const val = await AsyncStorage.getItem('biblioteca')
//           var teste = val != null ? JSON.parse(val) : null;
//           data = teste
//           data.map(info => {
//             if(info.PET != null){
//                 resp.push(info);
//                 setValue(resp.length)
//             }
//         })
//     }catch(err){
//         console.log(err);
//       }
//     }
//     useEffect( () => {ler()}, [])

    var lista = [
        {
            "chamados": [ 
                {
                    "PET":"Bichano",
                    "Veterinario":"Fulano",
                    "Vacina":"Vacinarius",
                    "Data":"27/10/2022"
                },
                {
                    "PET":"Fofurinha",
                    "Veterinario":"Beltrano",
                    "Vacina":"Vacininha",
                    "Data":"28/10/2022"
                },
                {
                    "PET":"Raivoso",
                    "Veterinario":"Malunquio",
                    "Vacina":"Astravac",
                    "Data":"30/10/2023"
                }
            ]
        }
    ]

    return(
        <View style={styles.container}>
            <TextInput placeholder="Digite para buscar..." style={styles.input}  onChangeText={(value) => setBusca(value)}/>
            {
                lista[0].chamados.map((item) => {
                    if(item.PET.toLowerCase().includes(busca.toLowerCase()) 
                    || item.Veterinario.toLowerCase().includes(busca.toLowerCase()) 
                    || item.Vacina.toLowerCase().includes(busca.toLowerCase())
                    || item.Data.toLowerCase().includes(busca.toLowerCase())) {
                        return(
                            <View style={styles.quadrado} >
                                <Text style={styles.texto}>PET: {item.PET}</Text>
                                <Text style={styles.texto}>Veterinário: {item.Veterinario}</Text>
                                <Text style={styles.texto}>Vacina: {item.Vacina}</Text>
                                <Text style={styles.texto}>Data: {item.Data}</Text>
                            </View>
                        )
                    }
                })
            }
        </View>
    );
}



const styles = StyleSheet.create({ 
    input: {
        width: 330,
        margin: '10px',
        padding: '10px',
        backgroundColor: '#ffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderRadius: '5px',
        placeholderTextColor: "#00000077",
        secureTextEntry: true,
    },

    container: {
        flex: 1,
        backgroundColor: '#505050',
    },

    quadrado: {
        margin: '10px',
        padding: '10px',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderRadius: '5px',
        placeholderTextColor: "#00000077",
        secureTextEntry: true,
    },
    texto: {
        fontSize: '15px',
        color: '#FFFFFF',
    }
})