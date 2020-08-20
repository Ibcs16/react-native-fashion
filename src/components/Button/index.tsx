import React, { useMemo } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme, Text } from '../Theme';

interface ButtonProps {
  variant: 'primary' | 'transparent' | 'default';
  label?: string;
  containerStyle?: object;
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

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  onPress,
  containerStyle = {},
  children,
}) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    !variant || variant === 'default'
      ? theme.colors.grey
      : theme.colors[variant];

  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.secondary;
  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }, { ...containerStyle }]}
    >
      {children}
      {label && (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

export default Button;
