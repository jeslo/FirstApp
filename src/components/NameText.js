import React,{Component} from "react";
import { Text,StyleSheet, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default class NameText extends React.Component {
render(){

  return(
   
      <Text style={styles.textStyle}> {this.props.name} </Text>
   
  );
}

}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: "#000000",
    backgroundColor: "red",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10
  }
})