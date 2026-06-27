//이건 동적 라우팅 [].tsx 이렇게 하면 동적 라우팅이 되는듯
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Username() {
  const router = useRouter();
  const { username } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View>
        <TouchableOpacity onPress={() => router.push(`/${username}/threads`)}>
          <Text>Treads</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/${username}/replies`)}>
          <Text>Replies</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/${username}/reposts`)}>
          <Text>Reposts</Text>
        </TouchableOpacity>
      </View>
      <Text>Edit app/[username].tsx to edit this screen.</Text>
    </View>
  );
}
