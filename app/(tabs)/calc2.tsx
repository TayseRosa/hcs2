import React, { useState } from "react";
import { StyleSheet,View, Text, Button, TextInput, ScrollView } from "react-native";

export default()=>{
    const [ produto, setProduto ] = useState('');
    const [ quilos, setQuilos ] = useState('');
    const [ valUnit, setValUnit ] = useState('');
    const [ valTotal, setValTotal ] = useState('');
    const [ rendimento, setRendimento ] = useState('');
    const [ risco, setRisco ] = useState('');
    const [ corte, setCorte ] = useState('');
    const [ faccao, setFaccao ] = useState('');

    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Calcular custos de fabricação </Text>       
                <Text style={styles.subtitle}>Continua... </Text>       

                <TextInput
                    onChangeText={t=>setProduto}
                    value={produto}
                    style={styles.input}
                    placeholder="Produto:"
                />

                <TextInput
                    onChangeText={t=>setQuilos}
                    value={ quilos }
                    style={styles.input}
                    placeholder="Quilos / metros:"
                />

                <TextInput
                    onChangeText={t=>setValUnit}
                    value={ valUnit }
                    style={styles.input}
                    placeholder="Valor unitário:"
                />

                <TextInput
                    onChangeText={t=>setValTotal}
                    value={ valTotal }
                    style={styles.input}
                    placeholder="Valor total:"
                />

                <TextInput
                    onChangeText={t=>setRendimento}
                    value={ rendimento }
                    style={styles.input}
                    placeholder="Rendimento de peças"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setRisco}
                    value={risco}
                    style={styles.input}
                    placeholder="Risco:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setCorte}
                    value={corte}
                    style={styles.input}
                    placeholder="Corte:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setFaccao}
                    value={faccao}
                    style={styles.input}
                    placeholder="Facção:"
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