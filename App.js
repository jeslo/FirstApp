import React from "react";
import NameText from "./src/components/NameText.js"
import { View,Text,StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default class App extends React.Component {
render(){

  return(
    <View style={styles.container}>
      <NameText name="Jeslo" />
      <Image 
      source = {require('./src/images/email.png')}
      />
      <Image
      
      source = {{
        uri: 'https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }}
      style = {{width: 300,height: 100}}
      />
    </View>

  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"

  },
})