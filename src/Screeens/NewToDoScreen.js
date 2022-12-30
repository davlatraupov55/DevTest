import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setTodo } from '../redux/redux';
import { width, height } from '../consts';
const COLORS = { primary: '#1f145c', white: '#fff' };

const NewToDoScreen = () => {

  const dispatch = useDispatch();

  const [todos, setTodos] = React.useState([]);

  const [textInput, setTextInput] = React.useState('');

  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Пожалуйста, введите текст');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
      dispatch(setTodo(newTodo))
    }
  };



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={textInput}
            placeholder="Add Todo"
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={[styles.iconContainer, { backgroundColor: textInput === '' ? '#676D75' : '#222F3E' }]}>
            <Text style={styles.ButtonText} >Добавить</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    top: height / 4,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ButtonText: {
    fontSize: width / 24,
    color: 'white'
  },
  inputContainer: {
    height: height / 13,
    width: width / 1.3,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginVertical: 20,
    borderRadius: 5,
  },
  iconContainer: {
    height: height / 13,
    width: width / 1.3,
    elevation: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewToDoScreen;