import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DetailRowProps } from '../types/interfaces';
import { Colors } from '../constants/colors';

const DetailRow: React.FC<DetailRowProps> = ({ title, value }) => (
  <>
    <View style={styles.detailRow}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
    <View style={styles.divider} />
  </>
);

const styles = StyleSheet.create({
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray,
  },
  detailValue: {
    fontSize: 16,
    color: Colors.gray,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 8,
  },
});

export default memo(DetailRow);
