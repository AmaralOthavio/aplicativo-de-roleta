import {StyleSheet, View, ScrollView} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import Header from "../components/Header";
import sizes from "../design/sizes"
import colors from "../design/colors"
import {useEffect, useState} from "react";
import Botao from "../components/Botao";
import RoletaIlustrativa from "../components/RoletaIlustrativa";

export default function HomeScreen() {

    const [lista, setLista] = useState([])
    const [totalCriado, setTotalCriado] = useState(0)
    const [totalConcluido, setTotalConcluido] = useState(0)
    const [textCadastro, setTextCadastro] = useState("")
    const [pesquisa, setPesquisa] = useState("")

    useEffect(() => {
        var totalConcluidos = lista.filter((item => item.concluido))

        var totalNaoConcluidos = lista.filter((item => !item.concluido))

        setTotalConcluido(totalConcluidos.length)
        setTotalCriado(totalNaoConcluidos.length)

    }, [lista]);


    function cadastrarTarefa(){
        let listaAux = [...lista]

        if (textCadastro.trim() === "") {
            alert("Nomeie a tarefa antes de adicioná-la")
            return false
        }
        for (let i = 0; i < lista.length; i++) {
            if (textCadastro.toLowerCase() === lista[i].titulo.toLowerCase()) {
                alert("Já existe uma tarefa com esse nome")
                return false
            }
        }

        listaAux.push({
            titulo: textCadastro,
            concluido: false
        })
        setLista(listaAux)

        console.log(listaAux)

        setTextCadastro("")
        setLista(listaAux)
    }

    function concluirTarefa(index){
        var listaAux = [...lista]

        listaAux[index].concluido = !listaAux[index].concluido
        setLista(listaAux)
    }

    function excluirTarefa(index){
        var listaAux = [...lista]
        listaAux.splice(index, 1)
        setLista(listaAux)

    }

    return (
        <ScrollView style={styles.container}>
            <Header/>
            <View style={styles.container_btn}>
                <Botao texto={"CRIAR NOVA ROLETA"} cor={"verde"}/>
                <Botao texto={"MODELOS PRONTOS"} cor={"vermelho"}/>
            </View>
            <RoletaIlustrativa/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.azul_escuro,

    },
    container_btn: {
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    }
})