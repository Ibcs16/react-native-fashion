import React, { useMemo } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme, Text } from '../Theme';

interface ButtonProps {
  variant: 'primary' | 'transparent' | 'default';
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
});

const Button: React.FC<ButtonProps> = ({ variant, label, onPress }) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    !variant || variant === 'default'
      ? theme.colors.grey
      : theme.colors[variant];

  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.button;
  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

export default Button;
