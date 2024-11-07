import React, { useState } from "react";
import { StyleSheet,View, Text, Button, TextInput, ScrollView } from "react-native";

export default()=>{
    const [calc1, setCalc1] = useState('');
    const [calc2, setcalc2] = useState('');
    const [calc3, setCalc3] = useState('');
    const [calc4, setCalc4] = useState('');
    const [calc5, setCalc5] = useState('');
    const [calc6, setCalc6] = useState('');
    const [calc7, setCalc7] = useState('');
    const [calc8, setCalc8] = useState('');

    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Calcular custos de fabricação </Text>       
                <Text style={styles.subtitle}>Coloque os valores dos custos </Text>       

                <TextInput
                    onChangeText={t=>setCalc1}
                    value={calc1}
                    style={styles.input}
                    placeholder="Custo 1:"
                />

                <TextInput
                    onChangeText={t=>setcalc2}
                    value={calc2}
                    style={styles.input}
                    placeholder="Custo 2:"
                />

                <TextInput
                    onChangeText={t=>setCalc3}
                    value={calc3}
                    style={styles.input}
                    placeholder="Custo 3:"
                />

                <TextInput
                    onChangeText={t=>setCalc4}
                    value={calc4}
                    style={styles.input}
                    placeholder="Custo 4:"
                />

                <TextInput
                    onChangeText={t=>setCalc5}
                    value={calc5}
                    style={styles.input}
                    placeholder="Custo 5:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setCalc6}
                    value={calc6}
                    style={styles.input}
                    placeholder="Custo 6:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setCalc7}
                    value={calc7}
                    style={styles.input}
                    placeholder="Custo 7:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setCalc8}
                    value={calc8}
                    style={styles.input}
                    placeholder="Custo 8:"
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