import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash';
import Animated, {
  multiply,
  divide,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';

import theme from '../../../components/Theme';

import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes, AuthNavigationProps } from 'src/components/Navigation';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: 'hidden',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
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
    picture: { src: require('../assets/1.png'), width: 2513, height: 3583 },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description: 'Explore hundreds of outfit ideas',
    color: '#BEECC4',
    right: true,
    picture: { src: require('../assets/2.png'), width: 2791, height: 3744 },
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your way',
    description:
      'Your individual and unique style will make you look amazing everyday',
    color: '#FFE409',
    right: false,
    picture: { src: require('../assets/3.png'), width: 2738, height: 3244 },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good. Feel Good',
    description: 'Find your own personality and explore fashion',
    color: '#FFDDDD',
    right: true,
    picture: { src: require('../assets/4.png'), width: 2791, height: 3744 },
  },
];

export const assets = slides.map(slide => slide.picture.src);

type OnBoardingProps = AuthNavigationProps<'Onboarding'>;

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
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
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.7) * width,
              index * width,
              (index + 0.7) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}
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
            <Slide key={i} title={slide.title} right={slide.right} />
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
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default OnBoarding;
