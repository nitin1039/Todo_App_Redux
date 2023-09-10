import { View, Text, Pressable, TextInput, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo,editTodo } from '../redux/action'
const CountShow = () => {
  const dispatch = useDispatch()
  const [modalvisible, setModalVisible] = useState(false)
  const [editText, setEditText] = useState('')
  const [editTextId, setEditTextId] = useState()
  const selector = useSelector((state) => state.todolistReducer.data)
  const searchTodo = useSelector((state) => state.todolistReducer.searchQuery)





  const filteredTodos = selector.filter((todo) => todo.value.toLowerCase().includes(searchTodo.toLowerCase()));

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id))
    
  }

  const editHandler = (id, value) => {

    setModalVisible(true)
    setEditText(value)
    setEditTextId(id)

  }

  const saveTextHandler = () => {

    dispatch(editTodo(editTextId, editText))

    setModalVisible(false)
  }


  return (
    <View style={{ alignSelf: 'center' }}>
      <View>
        <TextInput placeholder='Search Something here' onChangeText={(text) => dispatch({ type: 'SEARCH_TODO_QUERY', payload: text })} style={{ borderWidth: 2, padding: 20, borderRadius: 8, width: 300 }} />
      </View>
      {filteredTodos.map((task, index) => {
        return <>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
            <Text key={task.id} style={{ fontSize: 30 }}>{task.value}</Text>
            <Pressable onPress={() => deleteHandler(task.id)}>
              <Text style={{ fontSize: 30 }} >Delete</Text>
            </Pressable>

            <Pressable onPress={() => editHandler(task.id, task.value)}>
              <Text style={{ fontSize: 30 }} >Edit</Text>
            </Pressable>

          </View>
        </>
      })}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput placeholder='Edit TODO' value={editText} onChangeText={(text) => setEditText(text)} style={{ borderWidth: 2, padding: 20, width: '50%' }} />
          <Button title="Save" onPress={() => saveTextHandler()} />
          <Button
            title="Cancel"
            onPress={() => {
              setModalVisible(false)

            }}
          />
        </View>
      </Modal>

    </View>
  )
}

export default CountShow