import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { color } from '@/constants';

interface FixedBottomCTAProps {
  label: string;
  onPress: () => void;
}

const FixedBottomCTA = ({ label, onPress }: FixedBottomCTAProps) => {
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
      <CustomButton label={label} onPress={onPress} />
    </View>
  );
};

export default FixedBottomCTA;

const styles = StyleSheet.create({
  fixed: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: color.GRAY[300],
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});
