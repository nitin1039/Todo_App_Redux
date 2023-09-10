import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/action'

const Buttonhandler = () => {
    const dispatch=useDispatch()
    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }
    return (
        <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-between', alignSelf: 'center', marginVertical: 250 }}>
            <Pressable onPress={incrementHandler}>
                <Text style={{ fontSize: 40 }}>+</Text>
            </Pressable>

            <Pressable onPress={decrementHandler}>
                <Text style={{ fontSize: 40 }}>-</Text>
            </Pressable>

        </View>
    )
}

export default Buttonhandler