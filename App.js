import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  Logo: {
    width: 30,
    height: 30,
    padding:100,
  },
  title:{
    fontFamily:"Cairo-Regular",
    fontSize:25,
    padding: 10, 
  }
});

const HelloWorldApp = () => {
  return (
    <View
      style={{
        //flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>

      <Text
      style={styles.title}
      >
      <Image style={styles.Logo} source={require('./img/logo.png')} />
      {" "}
        نبراس
      </Text>

      <TextInput
      style={{ height: 50,width:200, borderColor: 'gray', borderWidth: 1 }}
      //onChangeText={text => onChangeText(text)}
      //value={value}
    />

    </View>
  )
}
export default HelloWorldApp;