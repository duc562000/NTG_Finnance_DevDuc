import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FORGOT_PASSWORD, TABNAVIGATOR,REGISTER} from '../../routers/ScreenNames';
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

function Login() {
  const navigate = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate.navigate(TABNAVIGATOR);
    console.log(data);
  };

  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View
      style={{
        flex:1,
        
        backgroundColor:R.colors.black
        }}>
      <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal:20
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
              required: true,
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
            name='Sodienthoai'
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
                  error={errors.Pin}
                  placeHolderColor={"#333"}
                  placeholder={"PIN"}
                  isPassword='true'
              
            />
          )}
          name="Pin"
          defaultValue=""
        />
        <View style={styles.row}>
            <View />
            <TouchableOpacity onPress={() => navigate.navigate(FORGOT_PASSWORD)}>
              <Text 
                style={{
                  color:R.colors.white,
                  fontWeight:'bold',
                  fontSize:16,
                  paddingBottom:20,
                  position:'absolute',
                  right:0
                  }}>Quên mật khẩu</Text>
            </TouchableOpacity>
          </View>
        <View style={{margin:50}}>
          <Button
            // noBackgroundImage='true'
            title={'Đăng nhập'}
            onPress={handleSubmit(onSubmit)}
            >
          </Button>
        </View>
        <TouchableOpacity>
          <View style={{
            height:58,
            width:58,
            backgroundColor:R.colors.brown,
            borderRadius:20,
            alignItems:'center'
            }}>
              <Ionicons style={{padding:10}} name="finger-print" size={39} color={R.colors.white} />
          </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:80,marginBottom:90}}>
          <Text style={styles.txtColor}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            onPress={() => navigate.navigate(REGISTER)}
          >
            <Text style={[styles.txtColor,{color:R.colors.colorTextLink}]}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
         
          
          width:'100%',
          height:120,
          bottom:0,
          backgroundColor:R.colors.brown,
          position:'absolute',
          opacity:0.3
      }}>
      </View>
      <View style={{flexDirection:'row',marginBottom:30,justifyContent:'space-evenly'}}>
        <View >
          <TouchableOpacity style={{alignItems:'center'}}>
            <Entypo name="lifebuoy" size={24} color={R.colors.white} />
            <Text style={{color:'#fff',paddingTop:10}}>Quick View</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={{alignItems:'center'}}>
            <Entypo name="message" size={25} color={R.colors.white} />
            <Text style={{color:'#fff',paddingTop:10}}>Chat</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={{alignItems:'center'}}>
            <Entypo name="phone" size={24} color={R.colors.white} />
            <Text style={{color:'#fff',paddingTop:10}}>Call</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={{alignItems:'center'}}>
            <Entypo name="map" size={24} color={R.colors.white} />
            <Text style={{color:'#fff',paddingTop:10}}>Map</Text>
          </TouchableOpacity>
        </View>
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

export default Login;
