import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";

interface Item {
    label: string;
    value: string;
}


const data: Item[] = [
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Masculino', value: 'Masculino' },
];
export default function IMC() {
    const [sexo, setSexo] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const imc = Number(peso) / (Number(altura) * Number(altura))
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#546B41' }}>
            <View style={style.header}>
                <Text style={style.title}>Calcular IMC</Text>
            </View>
            <View style={style.form}>
                <Dropdown
                style={style.input}
                data={data}
                labelField={'label'}
                valueField={'value'}
                placeholder="Selecione seu gêrero"
                value={sexo}
                onChange={(item: Item) => {setSexo(item?.value);}}
                />
                <TextInput style={style.input} placeholder="Peso (kg)..." onChangeText={(valuePeso) => setPeso(valuePeso)}/>
                <TextInput style={style.input} placeholder="Altura (m)..." onChangeText={(valureAltura) => setAltura((valureAltura))} />
                <Pressable  onPress={() => {console.log(imc)}} style={[style.input, {width: '45%'}]}>
                    <Text selectable={false}>Calcular</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        borderColor: '#fff',
        borderWidth: 10,
    },
    title: {
        fontSize: 50,
        color: '#fff',
        fontFamily: 'High Tower Text',
        fontWeight: 'bold',
    },
    form: {
        alignItems: 'center',
        height: '90%',
        borderColor: '#777',
        borderWidth: 10,
    },
    input: {
        padding: 10,
        borderRadius: 100,
        width: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 25,
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 1)',
        marginBottom: 25,
    },
    button: {
        top: 25,
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 1)',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8
    },
})