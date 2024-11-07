import React, { useState } from "react";
import { StyleSheet,View, Text, Button, TextInput, ScrollView } from "react-native";

export default()=>{
    const [ acabamento, setAcabamento ] = useState('');
    const [ bordado, setBordado ] = useState('');
    const [ estampa, setEstampa ] = useState('');
    const [ valorFinal, setValorFinal ] = useState('');
    const [ precoFinalizada, setPrecoFinalizada ] = useState('');
    const [ precoVenda, setPrecoVenda ] = useState('');
    const [ lucroPeca, setLucroPeca ] = useState('');
    const [ lucroTotal, setLucroTotal ] = useState('');

    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Calcular custos de fabricação </Text>       
                <Text style={styles.subtitle}>Continua... </Text>       

                <TextInput
                    onChangeText={t=>setAcabamento}
                    value={acabamento}
                    style={styles.input}
                    placeholder="Acabamento(com papelão):"
                />

                <TextInput
                    onChangeText={t=>setBordado}
                    value={ bordado }
                    style={styles.input}
                    placeholder="Bordado:"
                />

                <TextInput
                    onChangeText={t=>setEstampa}
                    value={ estampa }
                    style={styles.input}
                    placeholder="Estampa:"
                />

                <TextInput
                    onChangeText={t=>setValorFinal}
                    value={ valorFinal }
                    style={styles.input}
                    placeholder="Valor Final:"
                />

                <TextInput
                    onChangeText={t=>setPrecoFinalizada}
                    value={ precoFinalizada }
                    style={styles.input}
                    placeholder="Preço peça finalizada"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setPrecoVenda}
                    value={precoVenda}
                    style={styles.input}
                    placeholder="Preço venda PL:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setLucroPeca}
                    value={lucroPeca}
                    style={styles.input}
                    placeholder="Lucro por peça:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setLucroTotal}
                    value={lucroTotal}
                    style={styles.input}
                    placeholder="Lucro total:"
                    multiline={true}
                />

            </ScrollView>
        
            <View style={{marginBottom:20}}>
                <Button title="Continuar" />
            </View>

        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        paddingTop:50,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'#ffffff'
    },
    title:{
        color:'#00547A',
        fontSize:24,
        fontWeight:'500'
    },
    subtitle:{
        color:'#aaa',
        fontSize:18,
    },
    input:{
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#00547A',
        paddingVertical:10,
        marginBottom:20,
    }
    
})