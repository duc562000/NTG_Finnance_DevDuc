import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SURVEYSCREEN, TABNAVIGATOR} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import Quiz from './Quiz';
import Button from '../../components/Button';
import SurveyScreen from './SurveyScreen';

function SurveyStep1() {
  const navigate = useNavigation();

  return (
    <>
    <StatusBar barStyle='light-content'/>
    <Header
      title ='KHẢO SÁT'
      isBack ='true'
      
      
    />
    <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:R.colors.white,
        marginBottom:450
        }}>
            <Text 
                style={{
                    fontSize:18,
                    fontWeight:'bold',
                    padding:50,
                    textAlign:'center',
                    color:R.colors.black,
                }}
            >Chúng tôi có vài câu hỏi muốn dành cho bạn,bạn sẵn sàng tham gia khảo sát cùng chúng tôi chứ?
            </Text>
            <Button
                title='Tham gia ngay'
                onPress={() => navigate.navigate(SURVEYSCREEN)}
            />
            <TouchableOpacity
                onPress={() => navigate.navigate(TABNAVIGATOR)}
            >
                <Text
                    style={{
                        fontSize:16,
                        color:R.colors.brown,
                        margin:30
                    }}
                >Bỏ qua
                </Text>
            </TouchableOpacity>
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

export default SurveyStep1;
