import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageRequireSource,
} from 'react-native';
import theme from 'src/components/Theme';

import { Text } from '../../../../components/Theme';
const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },

  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide: React.FC<SlideProps> = ({ title, right }) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? '-90deg' : '90deg',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
