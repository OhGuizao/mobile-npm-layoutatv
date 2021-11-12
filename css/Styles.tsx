import { StyleSheet } from "react-native";
export const estilo = StyleSheet.create({
    //container
    container: {
        backgroundColor: 'white',
    },
    scroll: {

    },
    // ~~~~~~~~~~~~~~~~~~~~ Cabeçalho ~~~~~~~~~~~~~~~~~~~~
    cabecalho: {
        paddingTop: 50
    },
    interacaocabecalho: {
        width: 400,
        height: 50,
        borderColor: 'red',
        flexDirection: 'row'
    },
    pesquisacabecalho: {
        paddingLeft: 45,
        paddingRight: 120,
        fontSize: 22,
        color: "#393f57"
    },
    iconconfcabecalho: {
        width: 35,
        height: 35,
        resizeMode: 'cover',
        borderRadius: 10,
        backgroundColor: "#393f57"
    },
    // ~~~~~~~~~~~~~~~~~~~~ Fim do Cabeçalho ~~~~~~~~~~~~~~~~~~~~



    // ~~~~~~~~~~~~~~~~~~~~ Começo da Imagem Pós Cabeçalho ~~~~~~~~~~~~~~~~~~~~
    imgcab: {
        paddingTop: 20,
        paddingBottom: 20
    },

    imgposcabecalho: {
        width: 390,
        height: 170,
        borderRadius: 60,
        resizeMode: 'contain',
        alignContent: 'center'
    },
    // ~~~~~~~~~~~~~~~~~~~~ Fim da Imagem Pós Cabeçalho ~~~~~~~~~~~~~~~~~~~~


    // ~~~~~~~~~~~~~~~~~~~~ Corpo ~~~~~~~~~~~~~~~~~~~~
    corpo: {
        paddingLeft: 45,
    },
    usercorpo: {
        paddingBottom: 7,
        paddingTop: 7,
        borderColor: 'white',
        flexDirection: 'row',

    },
    estilocorpouserum: {

    },
    estilocorpouserdois: {

    },
    imguser: {
        width: 35,
        height: 35,
        resizeMode: 'cover',

    },
    nometxtuser: {
        color: '#393f57',
        paddingRight: 135,
        fontSize: 15

    },
    desctxtuser: {
        color: '#393f57',
        fontSize: 11
    },
    horastxtuser: {
        color: '#393f57',
        fontSize: 15
    },
    avaviewuser: {
        flexDirection: 'row'
    },
    estrelauser: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    avatxtuser: {
        fontSize: 15,
        color: '#c1e2f5'
    },
    // ~~~~~~~~~~~~~~~~~~~~ Fim do Corpo ~~~~~~~~~~~~~~~~~~~~



    // ~~~~~~~~~~~~~~~~~~~~ Menu Bottom ~~~~~~~~~~~~~~~~~~~~
    menubottom: {

    },
    // ~~~~~~~~~~~~~~~~~~~~ Fim do Menu Bottom ~~~~~~~~~~~~~~~~~~~~

})