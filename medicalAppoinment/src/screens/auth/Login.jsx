import React from 'react'
import TextAble from '../../components/inputs/TextAble'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../theme/colors'
import { fontFamilies } from '../../constant/fonts'

function Login() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.scrrenHeader}>
          Wellcome
        </Text>
        <Text style={{fontFamily: fontFamilies.bold}}>
          Sign In
        </Text>
        <Text>
          Korem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <TextAble
          label='Email'
          onChange={text => console.log(text)}
          defaultValue='Entar Email'
          placeholder={"Enter Email"}
        />
        <TextAble
          label='Email'
          onChange={text => console.log(text)}
          defaultValue='Entar Email'
          placeholder={"Enter Email"}
          isPassword={true}
        />
      </View>
    </SafeAreaView>

  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  scrrenHeader: {
    textAlign: 'center',
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily : fontFamilies.bold
  },

})