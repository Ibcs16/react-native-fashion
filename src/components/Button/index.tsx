import React, { useMemo } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../Theme';

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
  const theme = useTheme<Theme>();

  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.body;

  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;
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
