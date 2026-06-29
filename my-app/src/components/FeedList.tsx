import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Feeditem from './Feeditem';
import { color } from '@/constants';

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: '더미제목입니다',
    description: '더미 내용입니다',
    createdAt: '더미',
    author: {
      id: 1,
      nickName: '닉네임',
      imageUrl: '',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 2,
    title: '더미제목입니다',
    description: '더미 내용입니다',
    createdAt: '더미',
    author: {
      id: 1,
      nickName: '닉네임',
      imageUrl: '',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 3,
    userId: 3,
    title: '더미제목입니다',
    description: '더미 내용입니다',
    createdAt: '더미',
    author: {
      id: 1,
      nickName: '닉네임',
      imageUrl: '',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
];

function FeedList() {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <Feeditem post={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: color.GRAY[200],
    gap: 12,
  },
});

export default FeedList;
