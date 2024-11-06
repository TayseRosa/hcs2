import { Text, View, StyleSheet } from "react-native";

export default function Screen() {
    return(
        <View style={styles.container}>
            <Text>categorias</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})