import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet, ScrollView} from 'react-native';
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
import { getWidth } from '../../Config/Functions';
import CustomInputText from './CustomInputText';
import CustomPickerItem from './CutomPickerItem';



function BankAcount() {
  const navigate = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View
      style={{
        flex:1,
        }}>
        <HeaderTitleCenter
            isBack='true'
            title={'Cập nhật'}
        />
        <View style={{alignItems:'center',paddingTop:15}}>
            <CustomInputText
                control={control}
                title={'Ngân hàng'}
                name={'bank'}
                placeholder={'Nhập tên Ngân hàng'}
                error={errors.name}
                rules={{required:true}}
                defaultValue=''
            />
            <CustomPickerItem
                    control={control}
                    data={[
                        {name:"name12"},
                        {name:"name124"},
                        {name:"name125"}
                    ]}
                    title={'Tỉnh/Thành phố'}
                    rules={{required:true}}
                    defaultValue=''
                    name={'city'}
                    error={errors.city}
                />
            <CustomPickerItem
                    control={control}
                    data={[
                        {name:"name12"},
                        {name:"name124"},
                        {name:"name125"}
                    ]}
                    title={'Chi nhánh'}
                    rules={{required:true}}
                    defaultValue=''
                    name={'branch'}
                    error={errors.branch}
            />
            <CustomInputText
                control={control}
                title={'Số tài khoản'}
                name={'accountnumber'}
                placeholder={'Nhập Số tài khoản'}
                error={errors.accountnumber}
                rules={{required:true}}
                defaultValue=''
            />    
            <CustomInputText
                control={control}
                title={'Chủ tài khoản'}
                name={'accountholder'}
                placeholder={'Nhập Chủ tài khoản'}
                error={errors.accountholder}
                rules={{required:true}}
                defaultValue=''
            />   
            <View style={{alignItems:'center',paddingVertical:30}}>
                <Button
                    // noBackgroundImage='true'
                    title={'Cập nhật tài khoản'}
                    onPress={handleSubmit(onSubmit)}
                >
                </Button>
            </View>               
        </View> 
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
        }

});

export default BankAcount;
