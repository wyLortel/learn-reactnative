import { router } from 'expo-router';
import { Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.push('/explore')}>
        <Text>홈스크린</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'yellow',
    color: '',
    flex: 1,
  },
  container2: {
    backgroundColor: 'blue',
    color: '',
    flex: 1,
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
  input: {
    fontSize: 30,
  },
});
