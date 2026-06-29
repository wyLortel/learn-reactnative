import { StyleSheet } from 'react-native';

import FeedList from '@/components/FeedList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from '@/constants';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
});
