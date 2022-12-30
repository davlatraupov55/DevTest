import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import AddToDoButton from '../components/AddTodoButton';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import { height, width } from '../consts';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/redux';
import Logo from '../components/logo';
const COLORS = { primary: '#1f145c', white: '#fff' };

const MainToDoScreen = () => {

  const dispatch = useDispatch();

  const todo = useSelector((state) => state.Todo.todo)

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    setTodos(todo)
  }, [todos, todo]);


  const markTodoComplete = todoId => {
    const newTodosItem = todos.map(item => {
      if (item.id == todoId) {
        return { ...item, completed: item.completed === true ? false : true };
      }
      return item;
    });

    setTodos(newTodosItem);
    dispatch(deleteTodo(newTodosItem))
  };

  const delTodo = todoId => {
    const newTodosItem = todos.filter(item => item.id != todoId);
    setTodos(newTodosItem);
    dispatch(deleteTodo(newTodosItem))
  };


  const ListItem = ({ todo }) => {

    const leftButton = (
      <SwipeButtonsContainer
        style={styles.swipeButton}

      >
        <TouchableOpacity
          onPress={() => delTodo(todo.id)}
        >
          <Text>Удалить</Text>
        </TouchableOpacity>
      </SwipeButtonsContainer>
    );

    return (
      <SwipeProvider>
        <SwipeItem
          style={styles.button}
          swipeContainerStyle={styles.listItem}
          leftButtons={leftButton}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
              <View style={[styles.actionIcon, { backgroundColor: todo.completed ? 'black' : 'white' }]}>
                <Image style={[styles.image, { display: todo.completed ? 'flex' : 'none' }]} source={require('../img/Vector.png')} />
              </View>
            </TouchableOpacity>
            <Text
              style={[styles.text, { textDecorationLine: todo?.completed ? 'line-through' : 'none' }]}>
              {todo?.task}
            </Text>
          </View>
        </SwipeItem>
      </SwipeProvider>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.header}>
        <Logo />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />}
      />

      <View style={styles.footer}>
        <AddToDoButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: width / 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width / 1.3,
  },
  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionIcon: {
    height: width/15,
    width: width/15,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'red',
    height: height / 9,
    width: width / 1.1,
    marginVertical: 10,
    borderRadius: 7,
  },
  swipeButton: {
    alignSelf: 'center',
    aspectRatio: 1,
    flexDirection: 'column',
    padding: 10,
  },
  image: {
    height: width / 22,
    width: width / 22,
  },
  text: {
    fontWeight: 'bold',
    fontSize: width/23,
    color: COLORS.primary,
    paddingHorizontal: width / 20
  }
});

export default MainToDoScreen;