import React, { memo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator
      size="large"
      color="#0000ff"
      testID="activity-indicator"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(Loader);
