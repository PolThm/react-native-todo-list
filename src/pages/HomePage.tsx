import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import MyButton from '../components/MyButton';

const HomePage: FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 25 }}>Welcome to this Todo App !</Text>
        <Text style={{ fontSize: 16 }}>Click below to see the list.</Text>
      </View>
      <View style={{ flex: 1 }}>
        <MyButton
          title="Go to Jane's Todo List"
          onPress={() => navigation.navigate('Todo List', { name: 'Jane' })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  textContainer: {
    flex: 0.67,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10
    // paddingBottom: 40,
  }
});

export default HomePage;
