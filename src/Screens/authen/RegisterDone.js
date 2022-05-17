import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGINSCREEN, SURVEYSCREEN, SURVEYSTEP1, TABNAVIGATOR} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import Button from '../../components/Button';

function RegisterDone() {
  const navigate = useNavigation();
  const onSubmit = (data) => {
    navigate.navigate(SURVEYSTEP1);
    console.log(data);
  };

  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:R.colors.white
        }}>
      <Text 
        style={{
            fontSize:18,
            fontWeight:'bold',
            padding:15
        }}>Đăng ký thành công</Text>
      <Text
        style={{
            fontSize:16,
            paddingBottom:200,
            color:R.colors.brown
        }}
      >Chúc mừng bạn đã đăng ký thành công !</Text>
    <View style={{position:'absolute',bottom:40}}>
        <Button
            title='Đăng nhập'
            onPress={onSubmit}
        />
    </View>
    </View>

    
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

});

export default RegisterDone;
