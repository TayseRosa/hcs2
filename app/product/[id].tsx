import { router, Stack, useLocalSearchParams } from "expo-router"
import { Image, Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { Button } from "../../components/button"
import { getProductById } from "../../services/product"

export default function Screen(){
    const { id } = useLocalSearchParams()
    const idProduct = parseInt(id as string)

    const product = getProductById(idProduct)
    if(!product) return router.back()

    const handleBuyButton= () => {
        alert('Clicou no ' + id)
    }
    return(
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title:'' }} />

            <ScrollView style={styles.area}>
                <Image 
                    style={styles.img}
                    source={{uri: product.image}}
                    resizeMode="cover"
                />

                <Text> {product.title} </Text>
                <Text> {product.description} </Text>
            </ScrollView>

            <View style={styles.buttonArea}>
                <Button 
                    title="Comprar agora"
                    onPress={handleBuyButton}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    area:{
        flex:1,
        padding:10
    },
    buttonArea:{
        padding:10
    },
    img:{
        width:'100%',
        height:250,
        borderRadius:10,
        marginBottom:20
    }
})