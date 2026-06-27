import { BlurView } from 'expo-blur';
import { usePathname, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const isLoggedIN = false;
  console.log(pathname);
  console.log(insets);

  return (
    <SafeAreaView style={style.container}>
      <BlurView style={style.header} intensity={70}>
        <Image
          source={require('../../assets/logo.png')}
          style={style.headerLogo}
        />
        {!isLoggedIN && (
          <TouchableOpacity
            onPress={() => router.navigate('/login')}
            style={style.loginButton}
          >
            <Text style={style.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>
      {isLoggedIN && (
        <View style={style.tabContainer}>
          <View style={style.tab}>
            <TouchableOpacity onPress={() => router.push(`/`)}>
              <Text style={{ color: pathname === '/' ? 'red' : 'black' }}>
                For you
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.tab}>
            <TouchableOpacity onPress={() => router.push(`/following`)}>
              <Text style={{ color: pathname === '/' ? 'black' : 'red' }}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View>
        <TouchableOpacity onPress={() => router.push(`/@/post/1`)}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@/post/2`)}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@/post/3`)}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  tab: {
    paddingHorizontal: 16,
  },

  header: {
    alignItems: 'center',
  },

  headerLogo: {
    width: 42,
    height: 42,
  },

  loginButton: {
    position: 'absolute',
    right: 20,
    top: 0,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black',
  },

  loginButtonText: {
    color: 'white',
  },
});
