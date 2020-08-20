import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import * as Yup from 'yup';

import theme, { Box, Text } from '../../../components/Theme';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import TextInput from '../../../components/Forms/TextInput';
import CheckBox from '../../../components/Forms/CheckBox';

import SocialLogin from './components/SocialLogin';

const { width } = Dimensions.get('window');

const picture = {
  src: require('../assets/5.png'),
  width: 3383,
  height: 5070,
};

const emailValidator = async (email: string) => {
  const emailSchema = Yup.object().shape({
    email: Yup.string().email('Should be an email').required('Required field'),
  });

  try {
    await emailSchema.isValid({
      email,
    });
    return true;
  } catch {
    return false;
  }
};

const passwordValidator = async (password: string) => {
  const emailSchema = Yup.object().shape({
    passowrd: Yup.string().required('Required field'),
  });

  try {
    await emailSchema.isValid({
      password,
    });
    return true;
  } catch {
    return false;
  }
};

export const assets = [picture.src];

const Login: React.FC = () => {
  return (
    <Container footer={<SocialLogin />}>
      <Box padding="xl">
        <Text variant="title1" marginBottom="m" textAlign="center">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials and login to your account
        </Text>
      </Box>

      <Box marginHorizontal="xl" marginTop="m">
        <TextInput
          icon="mail"
          placeholder="Enter your e-mail"
          validator={emailValidator}
        />

        <TextInput
          containerStyle={{ marginTop: theme.spacing.m }}
          icon="lock"
          placeholder="Enter your password"
          validator={passwordValidator}
        />
      </Box>
      <Box
        flexDirection="row"
        margin="xl"
        marginTop="s"
        justifyContent="space-between"
      >
        <CheckBox label="Remember-me" />
        <Button onPress={() => {}} variant="transparent">
          <Text color="primary" textAlign="right">
            Forgot password
          </Text>
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
