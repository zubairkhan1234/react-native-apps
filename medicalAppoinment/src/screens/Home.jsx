import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

function Home({navigation}) {
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Contact')}>
        <Text>Go to Contact Screens</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
