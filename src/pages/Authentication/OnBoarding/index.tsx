import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash';
import Animated, { multiply, divide } from 'react-native-reanimated';

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomEndRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    marginTop: -20,
    flexDirection: 'row',
    //backgroundColor: 'rgba(100,200,300,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find your Outfits',
    description:
      "Can't find anything in your wardrobe. You are in the right place",
    color: '#BFEAF5',
    right: false,
    picture: require('../assets/1.png'),
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description: 'Explore hundreds of outfit ideas',
    color: '#BEECC4',
    right: true,
    picture: require('../assets/2.png'),
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your way',
    description:
      'Your individual and unique style will make you look amazing everyday',
    color: '#FFE409',
    right: false,
    picture: require('../assets/3.png'),
  },
  {
    title: 'Funky',
    subtitle: 'Look Good. Feel Good',
    description: 'Find your own personality and explore fashion',
    color: '#FFDDDD',
    right: true,
    picture: require('../assets/4.png'),
  },
];

const OnBoarding: React.FC = () => {
  const scroll = useRef<Animated.ScrollView>(null);

  // TODO: scrollHandler useScrollHandler
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          {...scrollHandler}
        >
          {slides.map((slide, i) => (
            <Slide
              key={i}
              title={slide.title}
              right={slide.right}
              picture={slide.picture}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <Animated.View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              width: width * slides.length,
              flexDirection: 'row',
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                {...{ subtitle, description }}
                last={index === slides.length - 1}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default OnBoarding;
