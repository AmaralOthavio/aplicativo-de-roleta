import {useState} from "react";
import {Button, TextInput} from "react-native";

export default function CampoTexto({ texto }) {

    function exibir {
        alert(texto)
    }

    const [texto, setTexto] = useState("")

    return (
        <TextInput placeholder={"Digite algum texto"} onChangeText={setTexto}/>
        <Button onPress={exibir} title={"Exibir mensagem"}/>
    )
}
