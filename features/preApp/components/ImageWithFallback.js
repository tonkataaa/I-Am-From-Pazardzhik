import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export function ImageWithFallback({ src, fallbackSrc, style }) {
  const [error, setError] = useState(false);

  return (
    <Image
      source={"/i-am-from-pz/images/e2a83b52-de37-49d0-97cb-faa8374e924a.png"}
      style={style}
      onError={() => setError(true)}
    />
  );
}