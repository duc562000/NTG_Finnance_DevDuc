import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FORGOT_PASSWORD, TABNAVIGATOR,REGISTER,LOGINSCREEN, REGISTER_DONE} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import Button from '../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

function Register() {
  const navigate = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate.navigate(REGISTER_DONE);
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
        backgroundColor:R.colors.black
        }}>
      <Image 
        source={require('../../assets/images/LogoNTG-removebg-preview.png')} 
        style ={{
          height:100,
          width:100,
          margin:50 
                }}>
      </Image>
      <Controller
          control={control}
          rules={{
            required: 'Sodienthoai is sai',
          }}
        render={({ field: { onChange, onBlur, value, } }) => (
          <InputForm
                textColor={R.colors.black}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.Sodienthoai}
                placeHolderColor={"#333"}
                placeholder={"Số điện thoại"}
            
          />
        )}
          name="Sodienthoai"
          defaultValue=""
      />
      
      <Controller
          control={control}
          rules={{
            required: true,
          }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputForm

                textColor={R.colors.black}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.FullName}
                placeHolderColor={"#333"}
                placeholder={"Họ và Tên"}
            
          />
        )}
        name="FullName"
        defaultValue=""
      />
      
      <Controller
          control={control}
          rules={{
            required: true,
          }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputForm

                textColor={R.colors.black}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.Email}
                placeHolderColor={"#333"}
                placeholder={"Email"}
            
          />
        )}
        name="Email"
        defaultValue=""
      />
      <Controller
          control={control}
          rules={{
            required: false,
          }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputForm

                textColor={R.colors.black}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeHolderColor={"#333"}
                placeholder={"Mã người giới thiệu( Nếu có )"}
                QRcode='true'
          />
        )}
        name="MaGioiThieu"
        defaultValue=""
      />

      <View style={{margin:25}}>
        <Button
          // noBackgroundImage='true'
          title={'Đăng Ký'}
          onPress={handleSubmit(onSubmit)}
          >
        </Button>
      </View>
      
      <View style={{flexDirection:'row',marginTop:80,marginBottom:90}}>
        <Text style={styles.txtColor}>Bạn đã có tài khoản? </Text>
        <TouchableOpacity
          onPress={() => navigate.navigate(LOGINSCREEN)}
        >
          <Text style={[styles.txtColor,{color:R.colors.colorTextLink}]}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  txtColor: {
    color:R.colors.white,
    fontSize:16,
  }
});

export default Register;
