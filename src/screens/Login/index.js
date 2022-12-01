import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {MyButton} from '../../components/MyButton';

import {useTranslation} from 'react-i18next';

import styles from './styles';
import {setItem} from '../../utils/mmkv';

const Login = props => {
  const [email, setEmail] = useState('email@mail.com');
  const [password, setPassword] = useState('password');

  const {t, i18n} = useTranslation();

  const handleLang = lang => {
    i18n.changeLanguage(lang);
    setItem('@language', lang);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
      />
      <TextInput style={styles.input} secureTextEntry value={password} />
      <MyButton
        backgroundColor={true}
        buttonText={t('login')}
        navigation={props.navigation}
        screen={'Home'}
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button title="en" onPress={() => handleLang('en')} />
      <Button title="tr" onPress={() => handleLang('tr')} />
    </View>
  );
};

export {Login};
