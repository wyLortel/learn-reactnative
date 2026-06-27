import { Stack } from 'expo-router';
import { color } from '@/constants';

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: color.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: '설정',
        }}
      />
    </Stack>
  );
}
