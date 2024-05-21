import React from 'react'
import { Text , View, TouchableOpacity} from 'react-native'

function Contact({navigation}) {
  return (
    <View>

    <Text>Contact screen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home screen</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Contact
