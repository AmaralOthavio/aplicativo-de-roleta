import {StyleSheet, View, ScrollView} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import sizes from "../design/sizes"
import colors from "../design/colors"
import EmptyList from "../components/EmptyList";
import Search from "../components/Search";
import Card from "../components/Card";
import {useEffect, useState} from "react";

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
        <ScrollView>
            <Header/>
            <FormCadastro
                fnCadastrar={cadastrarTarefa}
                texto={textCadastro}
                setTexto={setTextCadastro}
            />

            <View style={styles.containerBotoes}>
                <BtnCont titulo={"Tarefas criadas"} numero={totalCriado}/>
                <BtnCont titulo={"Concluídas"} numero={totalConcluido} eVerde={true}/>
            </View>
            <Search
                pesquisa = {pesquisa}
                setPesquisa={setPesquisa}
            />

            {lista.length === 0 && <EmptyList/>}
            {lista
                .sort(function( a, b ) {
                    return a.concluido - b.concluido
                })
                .map(function (item, index) {
                if (item.titulo.toLowerCase().includes(pesquisa.toLowerCase())) {
                    return (
                        <Card
                            key={index}
                            texto={item.titulo}
                            ativo={!item.concluido}
                            fnExcluir={() => excluirTarefa(index)}
                            fnConcluir={() => concluirTarefa(index)}
                        />
                    )
                }
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerBotoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: sizes.margin_horizontal,
        marginTop: sizes.padding_large,
        paddingBottom: sizes.padding_large,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray_330
    }
})