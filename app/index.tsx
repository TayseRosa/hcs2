import { Image, SafeAreaView, StyleSheet, Text } from "react-native"
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen(){

    const handleStart = () => {
        router.replace('/home')
    }

    return(
        <SafeAreaView style={styles.container} >
            <Image 
                source={require('../assets/logobranco.png')}
                style={styles.logo}
                resizeMode="cover"
            />

            <Button 
                title="Acessar aqui"
                onPress={handleStart}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00547A'
    },
    logo:{
        marginBottom:20
    },
    h1:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:10
    },
    h2:{
        fontSize:16,
        marginBottom:10,
    },  
})