import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native"

type Props={
    titleBox:string, 
    textBox:string, 
    buttonBox:string, 
    imageBox:ImageSourcePropType
}

export default({ titleBox, textBox, buttonBox, imageBox }:Props )=>{
    return(
        <TouchableOpacity style={styles.box}>
            <Text style={styles.boxTitle}>{titleBox}</Text>
            <Text style={styles.boxText}>{textBox}</Text>

            <View style={styles.bottomBox}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{buttonBox}</Text>
                </View>

                <Image source={imageBox} />  
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
box:{
    backgroundColor:'#fff',
    width:'100%',
    borderRadius:20,
    padding:15,
    marginBottom:40,
},

boxTitle:{
    color:'#00547A',
    fontSize:24,
    fontWeight:'500',
    flexWrap:'wrap',
    textAlign:'left',
    width:350,
},
boxText:{
    color:'#00547A',
    fontSize:14,
    flexWrap:'wrap',
    textAlign:'left',
},
bottomBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
},
button:{
    backgroundColor:'#00547a',
    borderRadius:10,
    padding:15,
},
buttonText:{
    color:'#fff',
    fontWeight:'600'
}
})