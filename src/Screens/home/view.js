import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import i18n from '../../helper/i18/i18n';
const HomeView = props => {
  return (
    <View style={{flex: 1}}>
      <Header title={i18n.t('Home')} />
      <Text>Home screen</Text>

      
    </View>
  );
};

export default HomeView;
