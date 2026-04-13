import { useState } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const { width: wi, height: he } = Dimensions.get('window');

export default function ToDo() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState<any>([]);
  const [newTask, showNewTask] = useState(false);

  function handleAddTask(task: String) {
    setTaskItems([...taskItems, task]);
    showNewTask(false);
  }
  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Pressable onPress={() => showNewTask(!newTask)}>
          <Text style={style.title} selectable={false}>+</Text>
        </Pressable>
        <Text style={style.title}>Lista de tarefas</Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          {taskItems.map((item: String, index: number) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <View style={style.item}>
                  <View style={style.square}></View>
                  <Text style={style.itemText}>{item}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
      {newTask && (
        <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
          <View style={[style.newTaskMain]}>
            <TextInput style={style.taskName} placeholder="Digite o nome da tarefa..." onChangeText={(value) => setTask(value)} />
            <Pressable onPress={() => handleAddTask(task)} style={{ backgroundColor: '#0085b9', padding: 15, borderRadius: 25, width: '50%', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Adicionar</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002a77',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    gap: '30%',
  },
  title: {
    color: '#fff',
    fontSize: (wi >= 600) ? wi / 20 : wi / 10,
  },
  newTaskMain: {
    top: '10%',
    left: '50%',
    transform: [
      { translateX: '-50%' }
    ],
    position: 'absolute',
    width: '90%',
    height: '80%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    backgroundColor: '#fff',
  },
  taskName: {
    borderWidth: 1,
    borderRadius: 25,
    width: '90%',
    height: 60,
    paddingLeft: 20,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    margin: 10,
    gap: 10,
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 1)',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: '75%',
  },
})