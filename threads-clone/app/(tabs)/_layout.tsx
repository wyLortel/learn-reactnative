import { router, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
          title: 'Search',
        }}
      />
      <Tabs.Screen
        name="add"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate('/modal');
          },
        }}
        options={{
          presentation: 'modal',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-circle-outline"
              size={28}
              color={focused ? 'black' : 'gray'}
            />
          ),
          title: 'Add',
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart-outline"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
          title: 'Activity',
        }}
      />
      <Tabs.Screen
        name="[username]"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
