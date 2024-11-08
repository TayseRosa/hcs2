import React, { useEffect, useState } from "react";
import { StyleSheet,View, Text, Button, ScrollView, TouchableOpacity, TextInput, Image, Modal } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import Fontawesome from '@expo/vector-icons/FontAwesome5'

export default()=>{
    const { client, produto, calc1, calc2, calc3, calc4,calc5, calc6, calc7, calc8 , 
        quilos, valUnit, rendimento, risco,  
        bordado,estampa,precoVenda} = useGlobalSearchParams();

        const [resValTotal, setResValTotal] = useState(null);
        const [resCorte, setResCorte] = useState(null);
        const [resFaccao, setResFaccao] = useState(null);
        const [resAcabamento, setResAcabamento] = useState(null);
        const [resValorFinal, setResValorFinal] = useState(null);
        const [resPrecoFinalizada, setPrecoFinalizada] = useState(null);
        const [resLucroPeca, setLucroPeca] = useState(null);
        const [resLucroTotal, setLucroTotal] = useState(null);
        const [show, setShow] = useState(false)

        const handleModal = () => {
            setShow(true)
        }

        const handleCloseButton = () => {
            setShow(false)
        }

    useEffect(() => {
        //Valor total(quilos * valUnit)
        const resValTotal = parseFloat(quilos) * parseFloat(valUnit);
        setResValTotal(isNaN(resValTotal) ? 0 : resValTotal);

        //Corte (rendimento * calc2)
        const resCorte = parseFloat(rendimento) * parseFloat(calc2)
        setResCorte(isNaN(resCorte) ? 0 : resCorte )

        //Facção(rendimento * calc3)
        const resFaccao = parseFloat(rendimento) * parseFloat(calc3)
        setResFaccao(isNaN(resFaccao) ? 0 : resFaccao )

        //Acabamento(rendimento * calc4)
        const resAcabamento = parseFloat(rendimento) * parseFloat(calc4)
        setResAcabamento(isNaN(resAcabamento) ? 0 : resAcabamento )

        //Valor final (risco + corte + faccao + acabamento + bordado + estampa)
        const resValorFinal = parseFloat(risco) + parseFloat(resCorte) + parseFloat(resFaccao ) + parseFloat(resAcabamento) + parseFloat(bordado) + parseFloat(estampa)
        setResValorFinal(isNaN(resValorFinal) ? 0 : resValorFinal )

        //Valor Preço peça finalizada ((valor total/rendimento)  +  (valor final/rendimento)  )
        const resPrecoFinalizada = (parseFloat(resValTotal) / parseFloat(rendimento)) + (parseFloat(resValorFinal ) / parseFloat(rendimento))
        setPrecoFinalizada(isNaN(resPrecoFinalizada) ? 0 : resPrecoFinalizada )

        //Lucro por peça( preçoVenda - PrecoFinalizada )
        const resLucroPeca = parseFloat(precoVenda) - parseFloat(resPrecoFinalizada)
        setLucroPeca(isNaN(resLucroPeca) ? 0 : resLucroPeca )

        //Lucro total( rendimento * lucroPeca )
        const resLucroTotal = parseFloat(rendimento) * parseFloat(resLucroPeca)
        setLucroTotal(isNaN(resLucroTotal) ? 0 : resLucroTotal )


    }, [
        client, produto, calc1, calc2, calc3, calc4,calc5, calc6, calc7, calc8 , 
        quilos, valUnit, rendimento, risco,  
        bordado,estampa,precoVenda]);

    return(
        <View style={styles.container}>

            <ScrollView>
                <Text style={styles.title}>Resultado do cálculo </Text>       
                <Text style={styles.subtitle}>Cliente: {client} </Text>    
                <Text style={styles.subtitle}>Produto: {produto} </Text>    
              
                {resValTotal !== null && (
                    <>
                        <View style={styles.containerRes}>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Valor total: </Text>
                                    <Text style={styles.resSubtitle}>R${resValTotal.toFixed(2)}</Text>
                                </View>
                            </View>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Corte: </Text>
                                    <Text style={styles.resSubtitle}>R${resCorte.toFixed(2)}</Text>
                                </View>
                            </View>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Facção: </Text>
                                    <Text style={styles.resSubtitle}>R${resFaccao.toFixed(2)}</Text>
                                </View>
                            </View>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Acabamento: </Text>
                                    <Text style={styles.resSubtitle}>R${resAcabamento.toFixed(2)}</Text>
                                </View>
                            </View>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Valor total: </Text>
                                    <Text style={styles.resSubtitle}>R${resValTotal.toFixed(2)}</Text>
                                </View>
                            </View>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Peça finalizada: </Text>
                                    <Text style={styles.resSubtitle}>R${resPrecoFinalizada.toFixed(2)}</Text>
                                </View>
                            </View>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Lucro por peça: </Text>
                                    <Text style={styles.resSubtitle}>R${resLucroPeca.toFixed(2)}</Text>
                                </View>
                            </View>

                            <View style={styles.boxRes}>
                                <Image source={require('../../../assets/iconCalculator.png')} />

                                <View style={styles.res}>
                                    <Text style={styles.resTitle}>Lucro total: </Text>
                                    <Text style={styles.resSubtitle}>R${resLucroTotal.toFixed(2)}</Text>
                                </View>
                            </View>

                        </View>
                         
                    <View>
                        <Text style={{fontSize:18, color:'#fff'}}>Valor total: R${resValTotal.toFixed(2)}</Text>
                        <Text style={{fontSize:18, color:'#fff'}}>Corte: R${resCorte.toFixed(2)}</Text>
                        <Text style={{fontSize:18, color:'#fff'}}>Facção: R${resFaccao.toFixed(2)}</Text>
                        <Text style={{fontSize:18, color:'#fff'}}>Acabamento: R${resAcabamento.toFixed(2)}</Text>
                        <Text style={{fontSize:18, color:'#fff'}}>Valor final: R${resValorFinal.toFixed(2)}</Text>
                        <Text style={{fontSize:18, color:'#fff'}}>Preço peça finalizada: R${resPrecoFinalizada.toFixed(2)}</Text>
                        <Text style={{fontSize:18, color:'#fff'}}>Preço peça finalizada: R${resLucroPeca.toFixed(2)}</Text>
                        <Text style={{fontSize:18, color:'#fff'}}>Lucro total: R${resLucroTotal.toFixed(2)}</Text>
                    </View>
                
                    </>
                )}
                
            </ScrollView>

            <TouchableOpacity style={styles.btnSaveInfo} onPress={handleModal}>
                <Text style={styles.btnText}>Deseja salvar as informações?</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={show}
                animationType="slide"
            >   
                <View style={styles.modalArea} >
                    <TouchableOpacity style={styles.modalView} onPress={handleCloseButton}>
                        <View style={styles.closeButton}>
                            <View style={styles.modalHeader}>
                                
                                <View style={styles.modalTitle}>

                                    {resValTotal !== null && (
                                        <View style={{justifyContent:'flex-start', paddingTop:15}}>
                                            <Text style={styles.modalTextRes}>Cliente: {client}</Text>
                                            <Text style={styles.modalTextRes}>Valor total: R${resValTotal.toFixed(2)}</Text>
                                        </View>
                                    )}

                                    <TouchableOpacity style={styles.btnSaveInfo} onPress={handleModal}>
                                        <Text style={styles.btnText}>Informações salvas com sucesso!</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.modalIconClose}>
                                    <Fontawesome name="window-close" size={32} color="white" /> 
                                </View>
                            
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </Modal>
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
        backgroundColor:'#00547A'
    },
    containerRes:{ 
        marginTop:20,
        width:'100%', 
        flex:1, 
        flexDirection:'row',
        flexWrap:'wrap', 
        justifyContent:'space-between',
    },
    boxRes:{
        backgroundColor:'#fff', 
        width:'48%', 
        height:65, 
        borderRadius:20,
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom:20
    },
    res:{
        flexDirection:'column', 
        paddingLeft:5
    },
    resTitle:{
        fontSize:14, 
        color:'#00547A'
    },
    resSubtitle:{
        fontSize:14, 
        color:'#00547A',
        fontWeight:'500'
    },
    title:{
        color:'#00547A',
        fontSize:24,
    },
    subtitle:{
        color:'#aaa',
        fontSize:18,
    },
    input:{
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#00547A',
        paddingVertical:10,
        marginBottom:20,
    },
    modalArea:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'flex-end',
    },
    modalView:{
        backgroundColor:'#00547A',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        minHeight:250,
        paddingTop:10,
        paddingHorizontal:20,
        paddingBottom:20,
    },
    closeButton:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
    },
    modalTitle:{
        flex:1,
        justifyContent:'space-around',
    },
    modalTitleText:{
        color:'#fff', 
        fontSize:18, 
        fontWeight:'500',
        textAlign:'center'
    },
    modalTextRes:{
        fontSize:18, 
        color:'#dedede',
        marginBottom:10
    },
    modalHeader:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
    },
    modalIconClose:{
        justifyContent:'flex-start' 
    },

    btnSaveInfo:{
        marginBottom:20,
        backgroundColor:'#fff',
        width:  '100%',
        height:40,
        borderRadius:10,
        justifyContent:'center',
        textAlign:'center',
    },
    btnText:{
        color:'#00547A',
        fontWeight:'500',
        fontSize:16,
        textAlign:'center'
    }
    
})