import React, { useState } from "react";
import { StyleSheet,View, Text, Button, TextInput } from "react-native";

export default()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [obs, setObs] = useState('');

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>Cadastrar novo cliente</Text>       

                <TextInput
                    onChangeText={t=>setName}
                    value={name}
                    style={styles.input}
                    placeholder="Nome:"
                />

                <TextInput
                    onChangeText={t=>setEmail}
                    value={email}
                    style={styles.input}
                    placeholder="E-mail:"
                />

                <TextInput
                    onChangeText={t=>setPhone}
                    value={phone}
                    style={styles.input}
                    placeholder="Telefone:"
                />

                <TextInput
                    onChangeText={t=>setAddress}
                    value={address}
                    style={styles.input}
                    placeholder="Endereço:"
                />

                <TextInput
                    onChangeText={t=>setObs}
                    value={obs}
                    style={styles.input}
                    placeholder="Observação:"
                    multiline={true}
                />
            </View>

            <View style={{marginBottom:20}}>
                <Button title="Salvar" />
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
    name:{
        color:'#00547A',
        fontSize:24,
        fontWeight:'500'
    },
    input:{
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#00547A',
        paddingVertical:10,
        marginBottom:20,
    }
    
})