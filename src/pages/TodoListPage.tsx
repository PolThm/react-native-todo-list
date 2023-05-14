import {StyleSheet, Text, View} from 'react-native';
import {FC} from 'react';
import TodoList from '../components/TodoList';

const TodoListPage: FC = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>This is {route.params.name}'s Todo List</Text>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingTop: 40,
  }
});

export default TodoListPage;