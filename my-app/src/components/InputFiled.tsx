import { color } from '@/constants';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
} from 'react-native';

interface InputFiledProps extends TextInputProps {
  label?: string;
  variant?: 'filled' | 'standard' | 'outline';
  error?: string;
}

function InputFiled({
  label,
  variant = 'filled',
  error = '',
  ...props
}: InputFiledProps) {
  return (
    <View>
      <Text>{label && <Text style={styles.label}>{label}</Text>}</Text>
      <View
        style={[
          styles.container,
          styles[variant as keyof typeof styles],
          Boolean(error) && styles.inputError,
        ]}
      >
        <TextInput
          placeholderTextColor={color.GRAY[500]}
          style={styles.input}
          {...props}
        />
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  label: {
    fontSize: 12,
    color: color.GRAY[700],
    marginBottom: 5,
  },

  filled: {
    backgroundColor: color.GRAY[100],
  },

  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
  error: {
    fontSize: 12,
    marginTop: 5,
    color: color.RED[500],
  },

  inputError: {
    backgroundColor: color.RED[100],
  },
});

export default InputFiled;
