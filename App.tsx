import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './src/pages/HomePage';
import TodoListPage from './src/pages/TodoListPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Todo List" component={TodoListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


