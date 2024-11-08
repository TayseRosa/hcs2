import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet,View, Text, Button, TextInput, ScrollView, TouchableOpacity } from "react-native";

export default()=>{
    const [client,setClient]= useState('');
    const [produto, setProduto ]  = useState('');
    const [calc1, setCalc1] = useState('');
    const [calc2, setcalc2] = useState('');
    const [calc3, setCalc3] = useState('');
    const [calc4, setCalc4] = useState('');
    const [calc5, setCalc5] = useState('');
    const [calc6, setCalc6] = useState('');
    const [calc7, setCalc7] = useState('');
    const [calc8, setCalc8] = useState('');

    const handleClick = () => {
        //router.push('/categories/calc2' )
        router.push(`/categories/calc2?client=${client}
                                    &produto=${produto}
                                    &calc1=${calc1}
                                    &calc2=${calc2}
                                    &calc3=${calc3}
                                    &calc4=${calc4}
                                    &calc5=${calc5}
                                    &calc6=${calc6}
                                    &calc7=${calc7}
                                    &calc8=${calc8}
        `)
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Calcular custos de fabricação </Text>       
                <Text style={styles.subtitle}>Coloque os valores dos custos </Text>   

                <TextInput
                    value={ client }
                    onChangeText={t=>setClient(t)}
                    placeholder="Nome do cliente:"
                    style={styles.inputMain}
                    placeholderTextColor={'#fff'}
                />    

                <TextInput
                    value={ produto }
                    onChangeText={t=>setProduto(t)}
                    style={styles.inputMain}
                    placeholder="Nome do produto:"
                    placeholderTextColor={'#fff'}
                />

                <View style={styles.inputContainer}>

                <TextInput
                    onChangeText={t=>setCalc1(t)}
                    value={calc1}
                    style={styles.input}
                    placeholder="Custo 1:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setcalc2(t)}
                    value={calc2}
                    style={styles.input}
                    placeholder="Custo 2:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setCalc3(t)}
                    value={calc3}
                    style={styles.input}
                    placeholder="Custo 3:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setCalc4(t)}
                    value={calc4}
                    style={styles.input}
                    placeholder="Custo 4:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setCalc5(t)}
                    value={calc5}
                    style={styles.input}
                    placeholder="Custo 5:"
                    multiline={true}
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setCalc6(t)}
                    value={calc6}
                    style={styles.input}
                    placeholder="Custo 6:"
                    multiline={true}
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setCalc7(t)}
                    value={calc7}
                    style={styles.input}
                    placeholder="Custo 7:"
                    multiline={true}
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setCalc8(t)}
                    value={calc8}
                    style={styles.input}
                    placeholder="Custo 8:"
                    multiline={true}
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                </View>
            </ScrollView>
        
            <TouchableOpacity style={{marginBottom:20}}>
                <Button title="Continuar" onPress={handleClick} />
            </TouchableOpacity>

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
        marginBottom:20,
    },
    inputContainer:{
        flex:1, 
        justifyContent:'flex-start', 
        alignItems:'center', 
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    inputMain:{
        width:'100%',
        height:60,
        borderBottomWidth:1,
        borderBottomColor:'#00547A',
        paddingVertical:10,
        marginBottom:20,
        paddingLeft:5,
        borderRadius:5,
        backgroundColor:'#00547a',
    },
    input:{
        width:'45%',
        height:60,
        borderBottomWidth:1,
        borderBottomColor:'#00547A',
        paddingVertical:10,
        marginBottom:20,
        marginRight:'5%',
        paddingLeft:5,
        borderRadius:5,
        backgroundColor:'#00547a',
    }
    
})