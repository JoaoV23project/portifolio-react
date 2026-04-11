import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: wi, height: he } = Dimensions.get('screen');

export default function Home() {
    return (
        <ScrollView style={{ borderWidth: 10 }}>
            <View style={style.header}>
                <Text style={style.title}>Quem sou?</Text>
                <Image source={require('@/assets/images/eu.jpg')} style={{ height: 75, width: 75, borderRadius: 100, borderEndWidth: 2, borderStartWidth: 2, borderColor: '#000' }}/>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    header: {
        borderColor: 'red',
        borderWidth: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    title: {
        fontSize: (wi < 700) ? (wi / 10) : (wi / 25),
        color: '#ffffff',
        fontFamily: 'Arial',
    }
})