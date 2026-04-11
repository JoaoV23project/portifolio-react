import { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IMC from "./(projects)/IMC";
import Contact from "./(contact)/Contact";
import Home from "./home";
import ToDo from "./(projects)/toDo";

const { width, height } = Dimensions.get('screen');
const scale = height / 20;

export default function index() {

    type Screen = "home" | "imc" | "contact" | "toDo";

    const [activeScreen, setActiveScreen] = useState<Screen>("toDo");

    const [showProjects, setShowProjects] = useState(false);
    const [showSideMenu, setShowSideMenu] = useState(true);

    const handleChangeScreen = (screen: Screen) => {
        setActiveScreen(screen);
        (width <= 600) ? setShowSideMenu(false) : setShowSideMenu(true);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#444', alignItems: 'center' }}>
            <View style={style.header}>
                <Pressable onPress={() => setShowSideMenu(!showSideMenu)}>
                    <Text style={{
                        fontSize: scale,
                        color: '#fff',
                        width: 50,
                        height: 1,
                        flexWrap: 'wrap',
                        marginRight: 50,
                        lineHeight: 11,
                        top: -35
                    }}
                        selectable={false}>
                        __ __ __
                    </Text>
                </Pressable>
                <Text style={{ fontSize: scale / 1.5, color: '#fff' }}>Portifólio - João Victor</Text>
            </View>
            <View style={style.main}>
                <View style={[style.sideMenu, showSideMenu ? { display: 'flex' } : { display: 'none' }]}>

                    <Pressable style={style.menuItem} onPress={() => { handleChangeScreen('home') }}>
                        <Image source={require('@/assets/images/home.svg')} resizeMode="center" style={style.menuIcon}></Image>
                        <Text style={style.menuFont} selectable={false}>Home</Text>
                    </Pressable>
                    <Pressable style={style.menuItem} onPress={() => setShowProjects(!showProjects)}>
                        <Image source={require('@/assets/images/tasks.svg')} resizeMode="center" style={style.menuIcon}></Image>
                        <Text style={style.menuFont} selectable={false}>Projetos</Text>
                    </Pressable>
                    {showProjects && (
                        <View style={{ gap: 20 }}>
                            <Pressable style={[style.menuItem, { marginLeft: 50 }]} onPress={() => { handleChangeScreen('imc') }}>
                                <Image source={require('@/assets/images/calculator.svg')} resizeMode="center" style={style.menuIcon}></Image>
                                <Text style={style.menuFont} selectable={false}>IMC</Text>
                            </Pressable>
                            <Pressable style={[style.menuItem, { marginLeft: 50 }]} onPress={() => { handleChangeScreen('toDo') }}>
                                <Image source={require('@/assets/images/toDo.svg')} resizeMode="center" style={style.menuIcon}></Image>
                                <Text style={style.menuFont} selectable={false}>Lista de tarefas</Text>
                            </Pressable>
                        </View>
                    )}
                    <Pressable style={style.menuItem} onPress={() => { handleChangeScreen('contact') }}>
                        <Image source={require('@/assets/images/contact.svg')} resizeMode="center" style={style.menuIcon}></Image>
                        <Text style={style.menuFont} selectable={false}>Contato</Text>
                    </Pressable>
                </View>
                <View style={[style.menu && { display: (Dimensions.get('window').width >= 600 || !showSideMenu) ? 'contents' : 'none', }]}>
                    <View style={{ flex: 1, display: (activeScreen == 'home') ? 'flex' : 'none' }}>
                        <Home />
                    </View>

                    <View style={{ flex: 1, display: (activeScreen == 'imc') ? 'flex' : 'none' }}>
                        <IMC />
                    </View>

                    <View style={{ flex: 1, display: (activeScreen == 'contact') ? 'flex' : 'none' }}>
                        <Contact />
                    </View>
                    <View style={{ flex: 1, display: (activeScreen == 'toDo') ? 'flex' : 'none' }}>
                        <ToDo />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '12%',
        width: 'auto',
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        height: '87%',
        width: '99%',
        backgroundColor: '#999',
    },
    sideMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width >= 750) ? '15%' : '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 20,
        gap: 30,
    },
    menu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuIcon: {
        left: 10,
        width: 30,
        height: 30,
        resizeMode: 'center',
    },
    menuItem: {
        padding: 10,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 20,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)'
    },
    menuFont: {
        width: 100,
        fontFamily: 'High Tower Text',
        fontSize: 20,
        fontWeight: 'bold',
    }
})