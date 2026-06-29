import { Link, Stack } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import { color } from '@/constants';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: color.BLACK,
        contentStyle: {
          backgroundColor: color.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: '로그인',
          headerShown: true,
          headerLeft: () => (
            //replace> 뒤로가기 할때 화면 기록에 안남기는것
            //그 로그인 했는데 전키 누른다고 다시 로그인으로 가는건 이상하잖수
            <Link href={'/'} replace>
              <Foundation name="home" size={28} color={'black'} />
            </Link>
          ),
        }}
      />

      <Stack.Screen
        // 저 옵션의 타이틀이 헤더에 표시되는 이름이구나
        name="login"
        options={{
          title: '이메일 로그인',
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          // 저 옵션의 타이틀이 헤더에 표시되는 이름이구나
          title: '회원가입',
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
    </Stack>
  );
}
