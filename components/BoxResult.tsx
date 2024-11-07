import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native"
type Props={
    icon:ImageSourcePropType,
    title:string,
    info:number
}

export default({ icon, title, info }:Props )=>{
    return(
        <View style={styles.box}>
            <View style={styles.boxIcon}>
                <Image source={icon} />
                <View style={styles.iconColumn}>
                    <Text style={styles.boxText}>{title}</Text>
                    <Text style={styles.boxText}>{info}</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
box:{
    width:'auto',
    justifyContent:'space-between',
    marginBottom:25
},
boxIcon:{
    width:170,
    height:70,
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    padding:12,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
},
iconColumn:{
    flexDirection:'column',
},
boxText:{
    color:'#00547A',
    fontSize:14,
    flexWrap:'wrap',
    textAlign:'center'
}
})