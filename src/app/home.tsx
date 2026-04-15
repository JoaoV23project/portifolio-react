import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const { width: wi, height: he } = Dimensions.get('screen');
const data = new Date();
const idade = data.getFullYear() - 2023;

export default function Home() {
    return (
        <ScrollView style={{ backgroundColor: '#111111' }}>
            <View style={style.content}>
                    <View style={style.header}>
                        <Text style={style.title}>Quem sou?</Text>
                        <Image source={require('@/assets/images/eu.jpg')} style={{ height: 75, width: 75, borderRadius: 100, borderColor: '#000' }} />
                    </View>
                <View style={style.body}>
                    <Text style={style.textBasic}>Olá mundo! Meu nome é João Victor, atuo no desenvolvimento de sistemas a {idade} anos, estou em processo de especialização nas áres de Desenvolvimento <i>Web</i> e <i>Back-End</i>. Valorizo o aprendizado contínuo e interesse em desafios inovadores. Atualmente tenho como principal objetivo minha consolidação como Desenvolvedor <i>Full-Stack</i></Text>
                </View>
            </View>
            <View style={style.content}>
                    <View style={style.header}>
                        <Text style={style.title}>Minhas habilidades</Text>
                    </View>
                <View style={style.body}>
                    <ul style={style.textBasic}>
                        <li>C# - Intermédario</li>
                        <li>HTML / CSS / Javascript - Intermédario</li>
                        <li>Typescript - Iniciante</li>
                        <li>React / React-native - Intermédario</li>
                    </ul>
                </View>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    content: {
        margin: 5,
        padding: 20,
        gap: 20,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#F5FEFD'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        width: '100%',
        borderRadius: 100,
        backgroundColor: 'rgba(145, 154, 153, 0.1)',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)'

    },
    title: {
        fontSize: (wi < 700) ? (wi / 10) : (wi / 25),
        fontFamily: 'Arial',
    },
    body: {
        padding: 20,
        alignItems: 'center',
        width: '100%',
        borderRadius: 50,
        backgroundColor: 'rgba(145, 154, 153, 0.1)',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
    },
    textBasic: {
        fontSize: (wi < 700) ? (wi / 15) : (wi / 50),
        maxWidth: '95%',
    }
})