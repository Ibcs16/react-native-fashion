import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { Text } from '../../../../components/Theme';
import Button from '../../../../components/Button';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    padding: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  subtitle: {
    textAlign: 'center',
  },
  description: {
    marginTop: 12,

    textAlign: 'center',
    marginBottom: 40,
  },
});

const Subslide: React.FC<SubslideProps> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? 'Lets get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
