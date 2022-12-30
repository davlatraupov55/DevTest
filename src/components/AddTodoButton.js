import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { width } from "../consts";

const AddToDoButton = () => {
  const navigation = useNavigation();
  const addTodo = () => {
    navigation.navigate('NewToDoScreen')
  };

  return (
    <TouchableOpacity onPress={addTodo} >
      <View style={styles.iconContainer}>
        <Image style={styles.Image} source={require('../img/addIcon.png')} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#222F3E',
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: width / 15,
    width: width / 15
  }
})


export default AddToDoButton