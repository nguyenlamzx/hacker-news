
import React from 'react';
import { Image } from 'react-native';

export default function LogoTitle(props) {
  return (
    <Image
      style={{ width: 32, height: 32 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}