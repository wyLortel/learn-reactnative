import { color } from '@/constants';
import React, { ReactNode } from 'react';
import { Image, Pressable, StyleSheet, View, Text } from 'react-native';

interface ProfileProps {
  onPress: () => void;
  nickname: string;
  imageUrl?: string;
  createdAt: string;
  option?: ReactNode;
}

function Profile({
  onPress,
  imageUrl,
  nickname,
  createdAt,
  option,
}: ProfileProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileContainer} onPress={onPress}>
        <Image
          source={
            imageUrl
              ? { uri: imageUrl }
              : require('@/assets/images/default-avatar.png')
          }
          style={styles.avatar}
        />
        <View>
          <Text style={styles.nickname}>{nickname}</Text>
          <Text style={styles.createdAt}>{createdAt}</Text>
        </View>
      </Pressable>
      {option}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.GRAY[300],
  },

  nickname: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.BLACK,
  },

  createdAt: {
    fontSize: 14,
    color: color.GRAY[500],
  },
});

export default Profile;
