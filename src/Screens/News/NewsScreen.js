import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Header from '../../components/Header/Header';
import HeaderTitleLeft from '../../components/Header/HeaderTitleLeft';
import MaterialNewsTab from './MaterialNewsTab';

const NewsScreen = () => {


  

  return (
    <View style={{flex: 1}}>
      <HeaderTitleLeft
        title ='TIN TỨC'
        QRcode='true'
        isIconNoti='true'
        isRed='true'
      />
      <MaterialNewsTab/>
    </View>
  );
};

export default NewsScreen;
const styles = StyleSheet.create({
  preview: {
  
  },
});
