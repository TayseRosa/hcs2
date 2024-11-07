import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

type Props={
    title:string,
    icon: ImageSourcePropType,
    nav:string,
}

export default({ icon, title, nav }:Props )=>{
    const handleNav1 = () => {
        router.replace(nav)
    }

    return(
        <TouchableOpacity style={styles.box} onPress={handleNav1}  >
            <View style={styles.boxIcon}>
                <Image source={icon} />
            </View>       
            <Text style={styles.boxText}>{title}</Text>          
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
box:{
    flexDirection:'column',
    width:75
},
boxIcon:{
    width:75,
    height:80,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    padding:12
},
boxText:{
    color:'#fff',
    fontSize:12,
    flexWrap:'wrap',
    textAlign:'center'
}
})