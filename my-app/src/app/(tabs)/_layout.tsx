import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { color } from '@/constants';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color.ORANGE[600],
        tabBarInactiveTintColor: color.GRAY[300],
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? 'home-filled' : 'home'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: '내 프로필',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: '설정',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? 'settings' : 'settings'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
