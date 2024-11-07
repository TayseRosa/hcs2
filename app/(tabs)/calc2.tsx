import React, { useState } from "react";
import { StyleSheet,View, Text, Button, TextInput, ScrollView } from "react-native";

export default()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [obs, setObs] = useState('');

    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Calcular custos de fabricação </Text>       
                <Text style={styles.subtitle}>Continua... </Text>       

                <TextInput
                    onChangeText={t=>setName}
                    value={name}
                    style={styles.input}
                    placeholder="Produto:"
                />

                <TextInput
                    onChangeText={t=>setEmail}
                    value={email}
                    style={styles.input}
                    placeholder="Quilos / metros:"
                />

                <TextInput
                    onChangeText={t=>setPhone}
                    value={phone}
                    style={styles.input}
                    placeholder="Valor unitário:"
                />

                <TextInput
                    onChangeText={t=>setAddress}
                    value={address}
                    style={styles.input}
                    placeholder="Valor total:"
                />

                <TextInput
                    onChangeText={t=>setObs}
                    value={obs}
                    style={styles.input}
                    placeholder="Rendimento de peças"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setObs}
                    value={obs}
                    style={styles.input}
                    placeholder="Risco:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setObs}
                    value={obs}
                    style={styles.input}
                    placeholder="Corte:"
                    multiline={true}
                />

<TextInput
                    onChangeText={t=>setObs}
                    value={obs}
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