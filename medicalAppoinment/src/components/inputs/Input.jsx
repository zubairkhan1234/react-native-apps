import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Text } from 'react-native'

function InputComp({ label, onChange, placeholder, isPassword = false, defaultValue = '' }) {
    return (
        <View>
            <Text>
                {label}
            </Text>
            <TextInput
                defaultValue={defaultValue}
                style={styles.inputStyle}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={isPassword}
            />
        </View>
    )
}

export default InputComp


const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        // margin: 10
    },
    lableStyle: {
        fontSize: 22,
        color: 'black'
    }
})