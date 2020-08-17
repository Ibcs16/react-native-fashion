import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Button from '../../../../components/Button';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    padding: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'SFProText-Semibold',
    color: '#0C0D34',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    fontFamily: 'SFProText-Regular',
    color: '#0c0D34',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});

const Subslide: React.FC<SubslideProps> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? 'Lets get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
