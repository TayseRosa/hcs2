import React, { useState } from "react";
import { StyleSheet,View, Text, Image, Button, TextInput } from "react-native";

export default()=>{
    const [name, setName] = useState('Hugo Costa');
    const [cargo, setCargo] = useState('Administrador');

    return(
        <View style={styles.container}>
            <View style={styles.content}>

                <View style={styles.profile}>
                    <View >
                        <Image style={styles.profilePhoto} source={require('../../assets/profile.png')}/>
                    </View>
                </View>

                <View style={styles.containerName}>
                    <Text style={styles.name}> {name} </Text>
                    <Text style={styles.cargo}> {cargo} </Text>
                </View>

                <View>
                    <TextInput
                        onChangeText={t => setName(t)}
                        value={name}
                        style={styles.textInput}
                        placeholder=""
                    />

                    <TextInput
                        onChangeText={t => setCargo(t)}
                        value={cargo}
                        style={styles.textInput}
                        placeholder=""
                    />
                </View>

                <Button title="Editar" onPress={()=>alert('Pressed')} />

            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    content:{
        width:'100%',
        height:'75%',
        backgroundColor:'#ffffff',
        paddingHorizontal:20
    },

    profile:{
        justifyContent:'center',
        alignItems:'center',
    },

    profilePhoto:{
        width:150, 
        height:150, 
        borderWidth:5, 
        borderRadius:100,
        borderColor:'#00547A',
        marginTop:50,
    },

    containerName:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:40,
    },

    name:{
        color:'#00547A',
        fontSize:24,
        fontWeight:'500'
    },

    cargo:{
        color:'#00547A',
        fontSize:20,
    },

    textInput:{
      height:50,
      borderBottomColor:'#00547A',
      borderBottomWidth:2,
      marginBottom:15,
      color:'#00547A'
    },
   

    bemVindo:{
        backgroundColor:'#ffffff0',
        marginBottom:40,
    },
    title:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold'
    },
    subtitle:{
        color:'#c5c5c5',
        fontSize:20,
    },
    
})