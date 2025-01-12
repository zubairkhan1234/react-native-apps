import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import Logo from '../assets/svg/logo.svg';
function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>
          hello hllto
        </Text>
        <View>
        <Logo  width={50} height={50}/>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
          <Text style={{color:'red'}} >Home screen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text>Go to Contact Screen</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

export default Home;
