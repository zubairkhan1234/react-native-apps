import React from 'react'
import TextAble from '../../components/inputs/TextAble'
import { SafeAreaView, Text, View } from 'react-native'

function Login() {
  return (
    <SafeAreaView>
      <View >
        <TextAble 
        label='Email'
        onChange={text => console.log(text)}
        defaultValue='Entar Email'
        placeholder={"Enter Email"}
        />
      </View>
    </SafeAreaView>

  )
}

export default Login
