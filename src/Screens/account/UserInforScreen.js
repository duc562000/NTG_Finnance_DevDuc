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
import Button from '../../components/Button';
import PickerDropdown from '../../components/Picker/PickerDropdown';
import PickerItem from '../../components/Picker/PickerItem'; 
import { getWidth } from '../../Config/Functions';
import { data } from '../News/DataNews';
import CustomInputText from './CustomInputText';
import CustomPickerItem from './CutomPickerItem';


const data1 = [
    {
        name:'Đức',
        fullname:'Nguyễn Minh'
    }
]

function UserInfoScreen() {
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
            title={'THÔNG TIN CÁ NHÂN'}
        />
        <ScrollView>
            <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row',paddingTop:15}}>
                    <CustomInputText
                        control={control}
                        title={'Tên'}
                        name={'name'}
                        placeholder={'Nhập tên'}
                        widthInput={130}
                        error={errors.name}
                        rules={{required:true}}
                        defaultValue=''
                    />
                    <CustomInputText
                        control={control}
                        title={'Họ và Tên đệm'}
                        name={'Surnamemiddlename'}
                        placeholder={'Nhập Họ và Tên đệm'}
                        widthInput={190}
                        error={errors.Surnamemiddlename}
                        rules={{required:true}}
                        defaultValue=''
                    />
                </View>
                <CustomInputText
                    control={control}
                    title={'Số điện thoại'}
                    name={'PhoneNumber'}
                    placeholder={'Nhập Số điện thoại'}
                    error={errors.PhoneNumber}
                    rules={{required:true}}
                    defaultValue=''
                />
                <CustomInputText
                    control={control}
                    title={'Email'}
                    name={'Email'}
                    placeholder={'Nhập Email'}
                    error={errors.Email}
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
                    title={'Quận/Huyện'}
                    rules={{required:true}}
                    defaultValue=''
                    name={'district'}
                    error={errors.district}
                />
                <CustomPickerItem
                    control={control}
                    data={[
                        {name:"name12"},
                        {name:"name124"},
                        {name:"name125"}
                    ]}
                    title={'Phường/Xã'}
                    rules={{required:true}}
                    defaultValue=''
                    name={'ward'}
                    error={errors.ward}
                />    
                <CustomInputText
                        control={control}
                        title={'Địa chỉ cụ thể'}
                        name={'address'}
                        placeholder={'Nhập Địa chỉ cụ thể'}
                        error={errors.address}
                        rules={{required:true}}
                        defaultValue=''
                />
                <CustomInputText
                        control={control}
                        title={'Mã số thuế'}
                        name={'taxcode'}
                        placeholder={'Nhập Mã số thuế'}
                        rules={{required:false}}
                        defaultValue=''
                />
                <CustomInputText
                        control={control}
                        title={'Mã người giới thiệu'}
                        name={'referrercode'}
                        placeholder={'Nhập Mã người giới thiệu'}
                        rules={{required:false}}
                        defaultValue=''
                />
                <View style={{paddingVertical:25,alignItems:'center'}}>
                    <Button
                        // noBackgroundImage='true'
                        title={'Xác thực'}
                        onPress={handleSubmit(onSubmit)}
                    >
                    </Button>
                </View>
            </View>               
        </ScrollView> 
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

export default UserInfoScreen;
