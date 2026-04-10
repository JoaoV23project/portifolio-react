import { use, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Item {
    label: string;
    value: string;
}

const data: Item[] = [
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Masculino', value: 'Masculino' },
];

export default function IMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const imc = Number(peso) / (Number(altura) * Number(altura))
    let estado;
    const [showIMC, setShowIMC] = useState(false);
    
    if (imc <= 0 || imc == Infinity){
       estado = ('Dados inválidos');
    }
    else if (imc < 17) {
       estado = ('Muito abaixo do peso');
    }
    else if (imc >= 17 && imc <= 18.49) {
       estado = ('Abaixo do peso');
    }
    else if (imc >= 18.5 && imc <= 24.99) {
       estado = ('Peso normal');
    }
    else if (imc >= 25 && imc <= 29.99) {
       estado = ('Acima do peso');
    }
    else if (imc >= 30 && imc <= 34.99) {
       estado = ('Obesidade I');
    }
    else if (imc >= 35 && imc <= 39.99) {
       estado = ('Obesidade II');
    }
    else if (imc >= 40) {
       estado = ('Obesidade III');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#546B41' }}>
            <ScrollView>
                <View style={style.header}>
                    <Text style={style.title}>Calcular IMC</Text>
                </View>
                <View style={style.form}>
                    <TextInput style={style.input} placeholder="Peso (kg)..." onChangeText={(valuePeso) => [setPeso(valuePeso), setShowIMC(false)]} />
                    <TextInput style={style.input} placeholder="Altura (m)..." onChangeText={(valureAltura) => [setAltura(valureAltura), setShowIMC(false)]} />
                    <Pressable onPress={() => { setShowIMC(true) }} style={[style.input, { width: '45%', alignItems: 'center' }]}>
                        <Text selectable={false} style={{ color: '#fff', fontSize: 30, fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Calcular</Text>
                    </Pressable>
                    <View style={[style.resultado, { display: (showIMC) ? 'flex' : 'none' }]}>
                        <Text style={style.text}>Seu peso: {peso} Kg</Text>
                        <Text style={style.text}>Sua altura: {altura} m</Text>
                        <Text style={style.text}>Seu IMC: {imc.toFixed(2)} Kg/m²</Text>
                        <Text style={style.text}>{estado}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',

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
    resultado: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        gap: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        fontSize: (Dimensions.get('screen').width > 500)? 40 : 15,
        color: '#fff',
        fontFamily: 'High Tower Text',
        fontWeight: 'bold',
        letterSpacing: 3,
    }
})