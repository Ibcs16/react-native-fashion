import React, { useMemo, ReactNode } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import theme, { Theme, Text, Box } from '../Theme';
import Button from '../Button';

interface ContainerProps {
  footer: ReactNode;
}

const { width } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
export const assets = [require('../assets/patterns/1.png')];

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<ContainerProps> = ({ children, footer }) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Box flex={1} backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={assets[0]}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={assets[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
              //borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
          >
            {children}
          </Box>
        </Box>

        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box alignItems="center" margin="m">
            <Button
              onPress={() => {}}
              variant="transparent"
              containerStyle={{ flexDirection: 'row' }}
            >
              <Text color="white">Don't have an account?</Text>
              <Text marginLeft="s" color="primary">
                SignUp
              </Text>
            </Button>
          </Box>
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Container;
