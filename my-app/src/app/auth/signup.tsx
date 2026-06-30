import { StyleSheet, View } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import EmailInput from '@/components/EmailInput';
import PasswordConfirmInput from '@/components/PasswordConfirmInput';
import PasswordInput from '@/components/PasswordInput';

type SignupFormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function SignupScreen() {
  const signupForm = useForm<SignupFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onsubmit = (formValues: SignupFormValues) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
        <PasswordConfirmInput />
      </View>
      <FixedBottomCTA
        label="회원가입하기"
        onPress={signupForm.handleSubmit(onsubmit)}
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
