import {Button, StyleSheet, Text, View} from "react-native"

export default function BotaoCustomizado({ cor, texto, funcao }) {
    return (
        <Button color={cor} onPress={funcao} title={texto}/>
    )
}

