import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListaItens({ array }) {
    // Usando a função map, para cada componente do array eu posso retornar elementos.
    return (
        <View style={styles.container}>
            {array.map((item, index) => (
                <Text key={index} style={styles.texto}>{item}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0 ,
    },
    texto: {
        textAlign: "center",
        padding: 0,
        margin: 0,
        letterSpacing: 0,
        position: "relative",
    }
})
