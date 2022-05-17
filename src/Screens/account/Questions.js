import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet, ScrollView,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TABNAVIGATOR} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import { Controller,useForm } from 'react-hook-form';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import I18n from "../../helper/i18/i18n";
import HeaderTitleCenter from '../../components/Header/HeaderTitleCenter';
import PickerItem from '../../components/Picker/PickerItem';
import Button from '../../components/Button';
import { getFontXD, getWidth, HEIGHTXD, itemWidth } from '../../Config/Functions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { auto } from 'async';
import PickerOpenDetails from '../../components/Picker/PickerOpenDetails';



const data =[
    {
        id:'1',
        title :'This little trick can be very useful in many cases and I suggest you to use it in your developments because you can quickly check a condition.',
        content :'I had the same issue where I would want to show / hide Views, but I really didnt want the UI jumping around when things were added/removed or necessarily to deal with re-rendering.I wrote a simple Component to deal with it for me. Animated by default, but easy to toggle. I put it on GitHub and NPM with a readme, but all the code is below.'
    },
    {
        id:'2',
        title :'This little trick can be very useful in many cases and I suggest you to use it in your developments because you can quickly check a condition.',
        content :'I had the same issue where I would want to show / hide Views, but I really didnt want the UI jumping around when things were added/removed or necessarily to deal with re-rendering.I wrote a simple Component to deal with it for me. Animated by default, but easy to toggle. I put it on GitHub and NPM with a readme, but all the code is below.'
    },
    {
        id:'3',
        title :'This little trick can be very useful in many cases and I suggest you to use it in your developments because you can quickly check a condition.',
        content :'I had the same issue where I would want to show / hide Views, but I really didnt want the UI jumping around when things were added/removed or necessarily to deal with re-rendering.I wrote a simple Component to deal with it for me. Animated by default, but easy to toggle. I put it on GitHub and NPM with a readme, but all the code is below.'
    },
    {
        id:'4',
        title :'I suggest you to use it in your developments because you can quickly check a condition.',
        content :' but I really didnt want the UI jumping around when things were added/removed or necessarily to deal with re-rendering.I wrote a simple Component to deal with it for me. Animated by default, but easy to toggle. I put it on GitHub and NPM with a readme, but all the code is below.'
    }
]


function Questions() {
  const navigate = useNavigation();
  const renderQuestions = ({ item }) => <PickerOpenDetails item={item} />;
  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View
      style={{
        flex:1,
        }}>
        <HeaderTitleCenter
            isBack='true'
            title={'Câu hỏi thường gặp'}
        />
        <FlatList
            data={data}
            renderItem={renderQuestions}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    txt: { 
        fontSize:14,
        fontWeight:'600',
        color:R.colors.black,
        paddingBottom:10
        },
    pickerStyle: {
        backgroundColor: 'white',
        marginTop: 5,
        fontSize: getFontXD(42),
        paddingHorizontal: 15,
        },
    
});

export default Questions;
