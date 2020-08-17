import React, { useMemo } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';

interface ButtonProps {
  variant: 'primary' | 'default';
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontFamily: 'SFProText-Regular',
  },
});

const Button: React.FC<ButtonProps> = ({ variant, label, onPress }) => {
  const backgroundColor = variant === 'primary' ? '#2CB980' : 'rgba(12,13,52)';

  const color = variant === 'primary' ? 'white' : '#0c0d34';
  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

export default Button;
