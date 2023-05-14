import {FC, useState} from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import MyButton from './MyButton';

interface Todo {
  id: number;
  title: string;
}

const TodoList: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = (): void => {
    setTodos([...todos, { id: Date.now(), title: newTodo.trim() }]);
    setNewTodo('');
  };

  const handleDeleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Component to render each item in the list of tasks.
  const renderItem = ({ item }: { item: Todo }) => (
    <View style={styles.todo}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <MyButton
        onPress={() => handleDeleteTodo(item.id)}
        title='Delete'
        buttonStyle={styles.deleteButton}
      />
    </View>
  );

  return (
      <View style={styles.container}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <>
              <View style={styles.header}>
                <TextInput
                  style={styles.input}
                  placeholder="Add a task"
                  value={newTodo}
                  onChangeText={setNewTodo}
                />
                <MyButton
                  onPress={handleAddTodo}
                  title='Add'
                  buttonStyle={styles.addButton}
                />
              </View>
              <View style={styles.divider} />
            </>
          }
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoTitle: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
});

export default TodoList;
