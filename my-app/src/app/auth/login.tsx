import { StyleSheet, View } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import EmailInput from '@/components/EmailInput';
import PasswordInput from '@/components/PasswordInput';

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const loginForm = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onsubmit = (formValues: LoginFormValues) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>
      <FixedBottomCTA
        label="로그인하기"
        onPress={loginForm.handleSubmit(onsubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
