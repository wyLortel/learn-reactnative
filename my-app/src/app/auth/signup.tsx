import { useState } from 'react';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import InputFiled from '@/components/InputFiled';
import { StyleSheet, View } from 'react-native';

export default function SignupScreen() {
  const [signValues, setSignValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [error , setError] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChangeInput = (text: string, name: string) => {
    setSignValues((prev) => {
      return { ...prev, [name]: text };
    });
  };

  const handleSubmit = () => {
    if(signValues.email.length === 0 ){
      setError(prev => ({...prev , email:"이메일을 입력해주세요"}))
    }
  };

  return (
    <>
      <View style={styles.container}>
        <InputFiled
          label="이메일"
          placeholder="이메일을 입력해주세요"
          onChangeText={(text) => handleChangeInput(text, 'email')}
          error={error.email}
        />
        <InputFiled
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          onChangeText={(text) => handleChangeInput(text, 'password')}
          error={error.password}
        />
        <InputFiled
          label="비밀번호확인"
          placeholder="비밀번호를 입력해주세요"
          onChangeText={(text) => handleChangeInput(text, 'passwordConfirm')}
          error={error.passwordConfirm}
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={handleSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
