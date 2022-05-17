import React, {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import R from '../assets/R';
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from '../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { LOGINSCREEN, TABNAVIGATOR } from '../../routers/ScreenNames';
const ButtonLogout = props => {
  const {iconName,title,onPress,info,isColor} = props;
  const navigate = useNavigation();
  return (
    <>
    <View style={{paddingVertical:35}}>
     <TouchableOpacity 
        onPress={onPress}
        style={{flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'space-between',
                                    paddingVertical:10,
                                    borderBottomWidth:0.2,
                                    borderTopWidth:0.2,
                                    borderColor:R.colors.gray
                }}>
            
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15}}>
                    <FontAwesome name={iconName} size={24} color={R.colors.red1} />
                    <Text style={{fontSize:14,paddingHorizontal:15,color:R.colors.black}}>{title}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15}}>
                    <Text style={{fontSize:14,paddingHorizontal:10,color:R.colors.brown}}>{info}</Text>
        
            </View>
          </TouchableOpacity>
    </View>
    </>
  );
};

export default ButtonLogout;

const styles = StyleSheet.create({
  
});
