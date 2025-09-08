import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import colors from "../design/colors.js";

export default function EscolhaDeRoleta({ onPress }) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>Cores</Text>
            <View style={styles.cornerImageContainer}>
                <Image
                    source={require('../assets/roletaPadrao.png')}
                    style={styles.cornerImage}
                />
            </View>
            <Pressable style={styles.button} onPress={onPress}>
                <Image
                    source={require('../assets/iconCarregar.png')}
                    style={styles.refreshIcon}
                />
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 190,
        height: 190,
        backgroundColor: colors.azul_escuro,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.14,
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 8,
        elevation: 9,
        marginBottom: 20,
        marginLeft: 7,


    },
    label: {
        position: 'absolute',
        top: 16,
        left: 16,
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
        padding: 0
    },
    button: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#34d660',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 6,
        transform: [{ translateX: -30 }, { translateY: -30 }], // centraliza
    },
    refreshIcon: {
        width: 33,
        height: 33,
        resizeMode: 'contain',
        tintColor: '#fff'
    },
    cornerImageContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 120,
        height: 120,
        overflow: 'hidden',
        borderBottomRightRadius: 32, // opcional, para borda arredondada
    },
    cornerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});
