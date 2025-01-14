import React, { useRef } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { Text } from 'react-native-svg'

function TextAble({ label = "", onChange, placeholder }) {
    const inputRef = useRef(null)

console.log(label , onChange, placeholder )
    return (
        <View>
            <Text style={styles.lableStyle}>
                {label}
            </Text>
            <TextInput
                ref={inputRef}
                style={styles.inputStyle}
                onChangeText={onChange}
                placeholder={placeholder}
            />
        </View>
    )
}

export default TextAble


const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    },
    lableStyle: {
        fontSize: 22,
        color: 'black'
    }
})