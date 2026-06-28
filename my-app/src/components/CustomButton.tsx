import { color } from '@/constants';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface CustomButtonProps extends PressableProps {
  label: string;
  size?: 'medium' | 'large';
  variant?: 'filled';
}

function CustomButton({
  label,
  size = 'large',
  variant = 'filled',
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size as keyof typeof styles],
        styles[variant as keyof typeof styles],
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={styles[variant as keyof typeof styles]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  large: {
    width: '100%',
    height: 44,
  },
  filled: {
    backgroundColor: color.ORANGE[600],
    fontSize: 14,
    fontWeight: 'bold',
    color: color.WHITE,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
