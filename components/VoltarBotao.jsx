import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import colors from "../design/colors.js";

export default function VoltarBotao({onPress}) {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image
                    source={require('../assets/Voltar.png')}
                    style={styles.refreshIcon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#6e4bd4',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 6,
    }
});
