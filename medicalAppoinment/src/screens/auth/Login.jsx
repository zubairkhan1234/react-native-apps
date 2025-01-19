import React, { useRef } from 'react'
import InputComp from '../../components/inputs/Input'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../theme/colors'
import { fontFamilies } from '../../constant/fonts'
import ButtonComp from '../../components/button/Button'
import Google from "../../assets/svg/google.svg"
import FaceBook from "../../assets/svg/facebook.svg"

function Login() {
  const email = useRef('hello')
  const password = useRef('1234')

  const LoginNow = () => {
    console.log({ email, password })


  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.scrrenHeader}>
          Wellcome
        </Text>
        <Text style={{ fontFamily: fontFamilies.bold }}>
          Sign In
        </Text>
        <Text>
          Korem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <InputComp
          label='Email'
          onChange={text => email.current = text}
          defaultValue={email.current}
          placeholder={"Enter Email"}
        />
        <InputComp
          label='Password'
          onChange={text => password.current = text}
          defaultValue={password.current}
          placeholder={"Enter Your Password"}
          isPassword={true}
        />
        <Text>Forget Password</Text>

        <ButtonComp onClick={LoginNow} title={"Sign In "} size={"sm"} />
        <Text>or</Text>

        <View>
          <View>
            <Google />
          </View>
          <View>
            <FaceBook />
          </View>
        </View>
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
    fontFamily: fontFamilies.bold
  },

})