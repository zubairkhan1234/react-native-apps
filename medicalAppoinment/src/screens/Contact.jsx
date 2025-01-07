import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'

function Contact({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Contact screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Contact
