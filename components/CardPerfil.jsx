import {Text, View, StyleSheet, Image} from "react-native";

export default function CardPerfil({local_img, nome, descricao}) {
    return (
        <View>
            <Text style={styles.nome}>{nome}</Text>
            <Image style={styles.image} src={local_img}></Image>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 20,
        fontFamily: 'Arial, helvetica, sans-serif',
    },
    descricao: {
        fontSize: 18,
    },
    image: {
        backgroundColor: 'transparent',
        maxWidth: 60,
        borderRadius: 30,
    }
})