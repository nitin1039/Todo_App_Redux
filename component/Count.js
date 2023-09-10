import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Count = () => {
  const selector=useSelector((state)=>state.numberReducer.count)
  console.log(selector)
  return (
    <View>
      <Text style={{fontSize: 40}}>{selector}</Text>
    </View>
  )
}

export default Count