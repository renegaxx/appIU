import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { ModalTokens } from '../components/modal';
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { useFonts, Poppins_300Thin} from '@expo-google-fonts/poppins';

export function Home() {
    const [qtde, defineQtde] = useState(6);
    const [telaModal, configTelaModal] = useState(false);
    const [fonteLoaded] = useFonts({
        Poppins_300Thin,
    })

    if (fonteLoaded) {
         return null;
    }


    function gerarToken() {
        configTelaModal(true);
    }

    return (

        <View style={ESTILO.container}>
            <View style={ESTILO.header}>
                <View style={ESTILO.textos}>
                    <View style={ESTILO.text}>
                        <Text style={ESTILO.texto1}>Março 20, 2024</Text>
                    </View>
                    <View style={ESTILO.text}>
                        <Text style={ESTILO.texto2}>Hoje</Text>
                    </View>
                </View>
                <View style={ESTILO.estiloLogo}>
                    <Image source={require("../assets/menu.png")} style={ESTILO.menu} />
                </View>
            </View>

            <View style={ESTILO.dentroLogo}>
            <Image source={require("../assets/educador.png")} style={ESTILO.logo} />
            </View> 




            <View style={ESTILO.containerBaixo}>
                <Text style={ESTILO.textoBaixo1}>
                    Sua sala em um só lugar
                </Text>
                <Text style={ESTILO.textoBaixo2}>
                    Cadastre-se para desfrutar de nossos beneficios
                </Text>

                <TouchableOpacity style={ESTILO.button1} onPress={gerarToken}>
                    <Text style={ESTILO.buttonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                <Modal visible={telaModal} animationType="fade" transparent={true}>
                    <ModalTokens fechar={() => configTelaModal(false)} />
                </Modal>
            </View></View>
    )
}

const ESTILO = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        display: "flex",
        height: "100px"
    },
    estiloLogo: {
        paddingLeft: "34%",
        display: "flex",
        paddingTop: 20
    },
    
    logo : {
        width: "84%",
        height: 250
    },
    menu: {
        height: 40,
        width: 40
    },
    textos: {
        fontFamily: "Poppins",
        paddingLeft: 40,
        paddingTop: 20
    },
    dentroLogo: {
        marginTop: 50,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    containerBaixo: {
        width: "100%",
        borderRadius: "4%",
        textAlign: "center",
        alignItems: "center"
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    button1: {
        backgroundColor: "#8be3ff",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    button2: {
        backgroundColor: "#fff",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20
    },
    textoBaixo1: {
        fontSize: 30,
        fontFamily: "Poppins"
    },
    textoBaixo2: {
        fontSize: 20,
        fontFamily: "Poppins",
        textAlign: "center"
    },
    texto1: {
        fontFamily: "Poppins_300Thin",
        fontSize: "20px"
    },
    texto2: {
        fontFamily: "Poppins_300Thin",
        fontSize: "30px",
        paddingTop: "50"
    }
})
