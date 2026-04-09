import { useState } from "react";
import { Image, Pressable } from "react-native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IMC from "./(projects)/IMC";
import Contact from "./(contact)/Contact";
import Show  from "../../constants/showmenus";

const { width, height } = Dimensions.get('screen');
const { width: wid, height: hei } = Dimensions.get('window');
const scale = height / 20;

export default function index() {
    const [showIMC, setShowIMC] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showHome, setHome] = useState(true);
    const [showSideMenu, setShowSideMenu] = useState(false);
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
                        lineHeight: 11, top: -35}}
                        selectable={false}>
                        __ __ __
                    </Text>
                </Pressable>
                <Text style={{ fontSize: scale, color: '#fff' }}>Portifólio - João Victor</Text>
            </View>
            <View style={style.main}>
                <View style={[style.sideMenu, !showSideMenu ? { display: 'flex' } : { display: 'none' }]}>
                    <Pressable style={style.menuItem} onPress={() => { setHome(true), setShowIMC(false), setShowContact(false) }}>
                        <Image source={require('@/assets/images/home.svg')} resizeMode="center" style={style.menuIcon}></Image>
                        <Text style={style.menuFont} selectable={false}>Home</Text>
                    </Pressable>
                    <Pressable style={style.menuItem} onPress={() => setShowProjects(!showProjects)}>
                        <Image source={require('@/assets/images/tasks.svg')} resizeMode="center" style={style.menuIcon}></Image>
                        <Text style={style.menuFont} selectable={false}>Projetos</Text>
                    </Pressable>
                    {showProjects && (
                        <Pressable style={[style.menuItem, { marginLeft: 50 }]} onPress={() => { setShowIMC(true), setHome(false), setShowContact(false) }}>
                            <Image source={require('@/assets/images/calculator.svg')} resizeMode="center" style={style.menuIcon}></Image>
                            <Text style={style.menuFont} selectable={false}>IMC</Text>
                        </Pressable>
                    )}
                    <Pressable style={style.menuItem} onPress={() => {setShowContact(true), setShowIMC(false), setHome(false), setShowIMC(false)}}>
                        <Image source={require('@/assets/images/contact.svg')} resizeMode="center" style={style.menuIcon}></Image>
                        <Text style={style.menuFont} selectable={false}>Contato</Text>
                    </Pressable>
                </View>
                <View style={style.menu}>
                    {showHome && (
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, optio consequatur ea quidem inventore eius praesentium suscipit placeat natus aperiam maxime aut, nemo repudiandae ad saepe pariatur. Ea, quia mollitia.
                        </Text>
                    )}
                    {showIMC && (
                        <View style={{ flex: 1 ,width: '100%', height: '100%'}}>
                            <IMC />
                        </View>
                    )}
                    {showContact && (
                        <View style={{ flex: 1 ,width: '100%', height: '100%'}}>
                            <Contact />
                        </View>
                    )}
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
        justifyContent: 'center',
        flexDirection: 'row',
        height: '87%',
        width: '99%',
        backgroundColor: '#999',
    },
    sideMenu: {
        flexDirection: 'column',
        width: (Dimensions.get('window').width >= 600) ? '15%' : '100%',
        display: width >= 600 ? 'flex' : 'none', // Mudar depois
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 10,
        gap: 20,
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width >= 600) ? '85%' : '100%',
        height: '100%',
    },
    menuIcon: {
        left: 10,
        width: 30,
        height: 30,
        resizeMode: 'center',
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },
    menuFont: {
        width: 100,
        fontFamily: 'High Tower Text',
        fontSize: 20,
        fontWeight: 'bold',
    }
})