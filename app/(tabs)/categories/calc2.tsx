import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet,View, Text, Button, TextInput, ScrollView } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default()=>{
    const [ quilos, setQuilos ] = useState('');
    const [ valUnit, setValUnit ] = useState('');
    const [ valTotal, setValTotal ] = useState('');
    const [ rendimento, setRendimento ] = useState('');
    const [ risco, setRisco ] = useState('');

    //const [ acabamento, setAcabamento ] = useState('');
    const [ bordado, setBordado ] = useState('');
    const [ estampa, setEstampa ] = useState('');
    //const [ valorFinal, setValorFinal ] = useState('');
    //const [ precoFinalizada, setPrecoFinalizada ] = useState('');
    const [ precoVenda, setPrecoVenda ] = useState('');
    //const [ lucroPeca, setLucroPeca ] = useState('');
    //const [ lucroTotal, setLucroTotal ] = useState('');
    

    const { client,produto, calc1, calc2, calc3, calc4,calc5, calc6, calc7, calc8 } = useGlobalSearchParams();

    const handleClick = () => {
        //router.push('/categories/calc3')
        router.push(`/categories/result?client=${client}
            &produto=${produto}
            &calc1=${calc1}
            &calc2=${calc2}
            &calc3=${calc3}
            &calc4=${calc4}
            &calc5=${calc5}
            &calc6=${calc6}
            &calc7=${calc7}
            &calc8=${calc8}

            &quilos=${quilos}
            &valUnit=${valUnit}
            &rendimento=${rendimento}
            &risco=${risco}
            
            &bordado=${bordado}
            &estampa=${estampa}
            &precoVenda=${precoVenda}

`)
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Matéria prima</Text>       
                <Text style={styles.subtitle}>Cliente: {client} </Text>       

                <View style={styles.inputContainer}>

                <TextInput
                    onChangeText={t=>setQuilos(t)}
                    value={ quilos }
                    style={styles.input}
                    placeholder="Quilos / metros:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setValUnit(t)}
                    value={ valUnit }
                    style={styles.input}
                    placeholder="Valor unitário:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setRendimento(t)}
                    value={ rendimento }
                    style={styles.input}
                    placeholder="Rendimento de peças"
                    multiline={true}
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setRisco(t)}
                    value={risco}
                    style={styles.input}
                    placeholder="Risco:"
                    multiline={true}
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setBordado(t)}
                    value={ bordado }
                    style={styles.input}
                    placeholder="Bordado:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setEstampa(t)}
                    value={ estampa }
                    style={styles.input}
                    placeholder="Estampa:"
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                <TextInput
                    onChangeText={t=>setPrecoVenda(t)}
                    value={precoVenda}
                    style={styles.input}
                    placeholder="Preço venda PL:"
                    multiline={true}
                    keyboardType="numeric"
                    placeholderTextColor={'#fff'}
                />

                </View>

            </ScrollView>
        
            <View style={{marginBottom:20}}>
                <Button title="Calcular" onPress={handleClick}/>
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
        //backgroundColor:'#ffffff'

        width:'100%',
        alignItems:'center', 
        flexDirection:'column', 
        flexWrap:'wrap'
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