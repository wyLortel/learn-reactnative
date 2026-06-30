import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import InputFiled from './InputFiled';

function PasswordInput() {
  //부모가 뿌려준 form 기능 가져다 쓰는것
  const { control } = useFormContext();

  return (
    //유즈폼과 연결
    <Controller
      name="password"
      //폼 관리자랑 연결
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 8) {
            return '비밀번호는 8자 이상 입력해주세요';
          }
        },
      }}
      //근데 실제 화면은 TextInput인지, InputFiled인지,
      //커스텀 컴포넌트인지 모름 그래서 render로 알려주는것
      //와 개쩌네 그럼 그냥 onChange로 불러오면 함수 생성안해도 알아서 판단해서 바꿔주는듯
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputFiled
          ref={ref}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          secureTextEntry
          returnKeyType="next"
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default PasswordInput;
