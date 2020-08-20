import React, { useMemo, useState, useCallback } from 'react';
import { useTheme } from '@shopify/restyle';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Theme, Text, Box } from '../../Theme';

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  containerStyle?: object;
  validator(input: string): Promise<boolean>;
}

const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  icon,
  validator,
  containerStyle = {},
  children,
  ...rest
}) => {
  const [value, setValue] = useState('');

  const theme = useTheme<Theme>();

  const [state, setState] = useState<InputState>(Pristine);

  const SIZE = theme.borderRadii.m * 2;

  const reColor = useMemo<keyof typeof theme.colors>(() => {
    switch (state) {
      case Valid:
        return 'primary';
      case Invalid:
        return 'danger';
      default:
        return 'text';
    }
  }, [state]);

  const color = useMemo(() => {
    return theme.colors[reColor];
  }, [reColor, theme.colors]);

  const validate = useCallback(async () => {
    const valid = await validator(value);
    setState(valid);
  }, [value, validator]);

  const handleOnChangeText = useCallback(
    text => {
      setValue(text);
      if (state === Pristine) {
        validate();
      }
    },
    [state, validate],
  );

  return (
    <Box
      style={containerStyle}
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box padding="s">
        <Icon name={icon} {...{ color }} />
      </Box>
      <RNTextInput
        {...{ placeholder }}
        placeholderTextColor={color}
        style={{ flex: 1 }}
        underlineColorAndroid="transparent"
        onBlur={validate}
        onChangeText={handleOnChangeText}
        {...rest}
      />
      {state && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? 'primary' : 'danger'}
        >
          <Icon
            name={state === Valid ? 'check' : 'x'}
            {...{ color }}
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
