import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

const Index = ({ navigation }) => {

  const dispatch = useDispatch()


  const [task, setTask] = useState('')



  const addGoalHandler = () => {
    dispatch({ type: 'TODO_HANDLER', payload: task })
    setTask('')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <TextInput placeholder='Enter your task' value={task} style={{ borderWidth: 2, padding: 20, width: 200 }} onChangeText={(text) => setTask(text)} />

      <Button title="Add goal" onPress={addGoalHandler} />


      <Button title="show todo data" onPress={() => navigation.navigate('CountShow')} />


    </View>
  )
}

export default Index