import { Tabs, useRouter } from 'expo-router';
import { Heart, Home, Plus, Search, User } from 'lucide-react-native';
import { useState, useRef } from 'react';
import { Modal, Text, TouchableOpacity, View, Animated } from 'react-native';

export default function TabLayout() {
  const router = useRouter();
  const isLoggedIn = true;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <Tabs
        backBehavior="history"
        screenOptions={{
          tabBarLabel: '',
          tabBarItemStyle: {
            paddingVertical: 10,
          },
          tabBarButton: (props) => <AnimationTabBarButton {...props} />,
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <Home color={color} size={24} />,
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <Search color={color} size={24} />,
          }}
        />

        <Tabs.Screen
          name="add"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              if (isLoggedIn) {
                router.navigate('/modal');
              } else {
                openLoginModal();
              }
            },
          }}
          options={{
            title: 'Add',
            tabBarIcon: ({ color }) => <Plus color={color} size={24} />,
          }}
        />

        <Tabs.Screen
          name="activity"
          options={{
            title: 'Activity',
            tabBarIcon: ({ color }) => <Heart color={color} size={24} />,
          }}
        />

        <Tabs.Screen
          name="[username]"
          listeners={{
            tabPress: (e) => {
              if (!isLoggedIn) {
                e.preventDefault;
                openLoginModal();
              }
            },
          }}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <User color={color} size={24} />,
          }}
        />

        <Tabs.Screen
          name="following"
          options={{
            tabBarLabel: () => null,
            href: null,
          }}
        />

        <Tabs.Screen
          name="(post)/[username]/post/[postID]"
          options={{
            href: null,
          }}
        />
      </Tabs>
      <Modal visible={isLoginModalOpen} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 24,
              width: '80%',
            }}
          >
            <TouchableOpacity
              onPress={closeLoginModal}
              style={{ alignSelf: 'flex-end', marginBottom: 16 }}
            >
              <Text style={{ fontSize: 24 }}>✕</Text>
            </TouchableOpacity>
            <Text
              style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}
            >
              로그인이 필요합니다
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#007AFF',
                paddingVertical: 12,
                borderRadius: 8,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                }}
              >
                로그인
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

function AnimationTabBarButton({
  children,
  onPress,
  ...props
}: any) {
  const rippleAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    rippleAnim.setValue(0);

    Animated.sequence([
      Animated.timing(rippleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    onPress?.();
  };

  const rippleScale = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2.5],
  });

  const rippleOpacity = rippleAnim.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [0.6, 0.3, 0],
  });

  const rippleTranslateY = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <TouchableOpacity onPress={handlePress} {...props} activeOpacity={0.8}>
      <View style={{ position: 'relative', alignItems: 'center' }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            transform: [{ scale: rippleScale }, { translateY: rippleTranslateY }],
            opacity: rippleOpacity,
          }}
        />
        <View>{children}</View>
      </View>
    </TouchableOpacity>
  );
}
