import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const { width: wi, height: he } = Dimensions.get('window');
export default function ToDo() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Pressable onPress={() => console.log('a')}>
          <Text style={style.title} selectable={false}>+</Text>
        </Pressable>
        <Text style={style.title}>Lista de tarefas</Text>
        <Image source={require('@/assets/images/trash.svg')} style={{ width: 40, height: 40, tintColor: '#fff' }}></Image>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002a77',
    borderWidth: 5,
    borderColor: 'red',
  },
  header: {
    position: 'sticky',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 100,
    // borderColor: 'red',
    // borderWidth: 10,
  },
  title: {
    color: '#fff',
    fontSize: (wi >= 600) ? wi / 20 : wi / 10,
  }
})