import React, { useMemo, useState, useCallback } from 'react';
import { useTheme } from '@shopify/restyle';
import {
  CheckBox as RNCheckBox,
  CheckBoxProps as RNCheckBoxProps,
  StyleSheet,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Theme, Text, Box } from '../../Theme';

interface CheckBoxProps extends RNCheckBoxProps {
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, ...rest }) => {
  const handleOnChangeText = useCallback(text => {}, []);

  return (
    <Box>
      <Box padding="s"></Box>
      <RNCheckBox {...rest} />
    </Box>
  );
};

export default CheckBox;
