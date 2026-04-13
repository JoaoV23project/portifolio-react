import { useState } from "react";
import { Dimensions, StyleSheet, Text, View, PixelRatio, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('screen');
const scale = width / 20;

export default function index() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#444', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.main}>
                <Text style={styles.title}>Olá, sobre o que gostaria de falar?</Text>
                <Text style={styles.subtitle}>Por favor, indentifique-se</Text>
                <TextInput style={styles.inputText} placeholder="Nome..." onChangeText={(value) => setName(value)}></TextInput>
                <TextInput style={styles.inputText} placeholder="Email..."></TextInput>
            </View>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    main: {
        width: '90%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    title: {
        fontSize: Math.round(PixelRatio.roundToNearestPixel(scale)),
        position: 'absolute',
        top: 0,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: Math.round(PixelRatio.roundToNearestPixel(scale / 4)),
        position: 'absolute',
        top: 75,
        fontFamily: 'Times New Roman',
    },
    inputText: {
        margin: 50,
        width: '80%',
        height: '7%',
        backgroundColor: 'rgba(49, 49, 49, 0.5)',
        color: 'white',
        borderRadius: 100,
        paddingStart: 20,
    },
})