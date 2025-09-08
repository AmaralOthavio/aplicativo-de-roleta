import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Baloo_2_400Regular, Baloo_2_700Bold } from '@expo-google-fonts/baloo';
import AppLoading from 'expo-app-loading';

export default function EditarRoleta() {
    const [nome, setNome] = useState('');
    const [opcoes, setOpcoes] = useState([
        { id: '1', texto: 'Opção 1', cor: '#FF4081' },
        { id: '2', texto: 'Opção 2', cor: '#000000' },
        { id: '3', texto: 'Opção 3', cor: '#00BCD4' },
        { id: '4', texto: 'Opção 4', cor: '#AA00FF' },
    ]);
    const [pesquisa, setPesquisa] = useState('');
    const [editandoId, setEditandoId] = useState(null);
    const [novoTexto, setNovoTexto] = useState('');

    let [fontsLoaded] = useFonts({
        Baloo_2_400Regular,
        Baloo_2_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const gerarId = () => Date.now().toString();

    const adicionarOpcao = () => {
        const novaOpcao = {
            id: gerarId(),
            texto: `Opção ${opcoes.length + 1}`,
            cor: gerarCorAleatoria()
        };
        setOpcoes([...opcoes, novaOpcao]);
    };

    const gerarCorAleatoria = () => {
        const cores = ['#FF4081', '#000000', '#00BCD4', '#AA00FF', '#4CAF50', '#6236DA'];
        return cores[Math.floor(Math.random() * cores.length)];
    };

    const editarOpcao = (id) => {
        const novaLista = opcoes.map(op => {
            if (op.id === id) {
                return { ...op, texto: novoTexto || op.texto };
            }
            return op;
        });
        setOpcoes(novaLista);
        setEditandoId(null);
        setNovoTexto('');
    };

    const removerOpcao = (id) => {
        Alert.alert(
            'Remover Opção',
            'Tem certeza que deseja remover essa opção?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Remover', style: 'destructive', onPress: () => {
                        setOpcoes(opcoes.filter(op => op.id !== id));
                    }
                }
            ]
        );
    };

    const opcoesFiltradas = opcoes.filter(op =>
        op.texto.toLowerCase().includes(pesquisa.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <View style={[styles.opcaoContainer, { backgroundColor: item.cor }]}>
            {editandoId === item.id ? (
                <TextInput
                    style={[styles.textoOpcao, { backgroundColor: '#fff', color: '#000', flex: 1 }]}
                    value={novoTexto}
                    onChangeText={setNovoTexto}
                    autoFocus
                />
            ) : (
                <Text style={styles.textoOpcao}>{item.texto}</Text>
            )}
            <View style={{ flexDirection: 'row' }}>
                {editandoId === item.id ? (
                    <TouchableOpacity onPress={() => editarOpcao(item.id)}>
                        <Ionicons name="checkmark-circle" size={24} color="#fff" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => setEditandoId(item.id)}>
                        <Ionicons name="create-outline" size={24} color="#fff" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => removerOpcao(item.id)}>
                    <Ionicons name="trash-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>EDITAR ROLETA</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome da roleta"
                placeholderTextColor="#ccc"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Pesquisar opções"
                placeholderTextColor="#ccc"
                value={pesquisa}
                onChangeText={setPesquisa}
            />

            <FlatList
                data={opcoesFiltradas}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={{ maxHeight: 250 }}
            />

            <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarOpcao}>
                <Ionicons name="add-circle" size={20} color="#6236DA" />
                <Text style={styles.textoBotao}>Adicionar opção</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoSalvar}
                onPress={() => Alert.alert('Salvo', 'Roleta salva com sucesso!')}
            >
                <Text style={styles.textoBotaoSalvar}>SALVAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6236DA', // fundo roxo
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Baloo_2_700Bold',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontFamily: 'Baloo_2_400Regular',
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
        fontFamily: 'Baloo_2_400Regular',
        flex: 1,
    },
    botaoAdicionar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF', // botão branco
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    textoBotao: {
        color: '#6236DA', // letras roxas
        fontSize: 16,
        marginLeft: 8,
        fontFamily: 'Baloo_2_400Regular',
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
        fontFamily: 'Baloo_2_700Bold',
    },
});
