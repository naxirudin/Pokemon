import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ErrorMessageProps } from '../types/interfaces';
import { Colors } from '../constants/colors';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: Colors.error,
    textAlign: 'center',
  },
});

export default memo(ErrorMessage);
