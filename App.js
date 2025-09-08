import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditarRoleta() {
    const [nome, setNome] = useState('');
    const [opcoes, setOpcoes] = useState([
        { id: '1', texto: 'Opção 1', cor: '#FF4081' },
        { id: '2', texto: 'Opção 2', cor: '#000000' },
        { id: '3', texto: 'Opção 3', cor: '#00BCD4' },
        { id: '4', texto: 'Opção 4', cor: '#AA00FF' },
    ]);

    const adicionarOpcao = () => {
        const novaOpcao = {
            id: (opcoes.length + 1).toString(),
            texto: `Opção ${opcoes.length + 1}`,
            cor: gerarCorAleatoria()
        };
        setOpcoes([...opcoes, novaOpcao]);
    };

    const gerarCorAleatoria = () => {
        const cores = ['#FF4081', '#000000', '#00BCD4', '#AA00FF', '#4CAF50', '#FFC107'];
        return cores[Math.floor(Math.random() * cores.length)];
    };

    const renderItem = ({ item }) => (
        <View style={[styles.opcaoContainer, { backgroundColor: item.cor }]}>
            <Text style={styles.textoOpcao}>{item.texto}</Text>
            <TouchableOpacity>
                <Ionicons name="create-outline" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>EDITAR ROLETA</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#ccc"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.subtitulo}>Opções:</Text>

            <FlatList
                data={opcoes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={{ maxHeight: 250 }}
            />

            <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarOpcao}>
                <Ionicons name="add-circle" size={20} color="#fff" />
                <Text style={styles.textoBotao}>Adicionar opção</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoSalvar}>
                <Text style={styles.textoBotaoSalvar}>SALVAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7E57C2',
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    opcaoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    textoOpcao: {
        color: '#fff',
        fontSize: 16,
    },
    botaoAdicionar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7E57C2',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
    },
    botaoSalvar: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    textoBotaoSalvar: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
