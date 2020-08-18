import React from 'react';
import { View, Image, Dimensions } from 'react-native';

import theme, { Box, Text } from '../../../components/Theme';
import Button from '../../../components/Button';

const { width } = Dimensions.get('window');
const picture = {
  src: require('../assets/5.png'),
  width: 3383,
  height: 5070,
};

export const assets = [picture.src];

const Welcome: React.FC = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          justifyContent="space-evenly"
          alignItems="center"
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          padding="xl"
        >
          <Text variant="title2" textAlign="center">
            Let's get started
          </Text>
          <Text variant="body" textAlign="center">
            Login to your account below, or signup for an amazing experience
          </Text>
          <Button
            onPress={() => {}}
            variant="primary"
            label="Have an account? Login"
          />
          <Button onPress={() => {}} label="Join us, it's Free" />
          <Button
            onPress={() => {}}
            variant="transparent"
            label="Join us, it's Free"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
