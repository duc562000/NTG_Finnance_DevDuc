import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import R from '../../assets/R';
import HeaderTitleLeft from '../../components/Header/HeaderTitleLeft';
import { BANK_ACCOUNT_SCREEN, BONDS_SCREEN } from '../../routers/ScreenNames';
import HeaderTitleCenter from '../../components/Header/HeaderTitleCenter';
import Button from '../../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialBondDetailTab from './MaterialBondDetailTab';


function BondsDetail({route}) {
    const {bondCodeId,dateTime,interestRate,cty} = route.params.item
    console.log("route.params.item",route.params.item)
    const navigate = useNavigation();
    return (
        <View style={{flex:1}}>
            <HeaderTitleCenter
                isBack={true}
                QRcode={true}
                isIconNoti={true}
                isRed={true}
                title={bondCodeId}
            />
            <View style={{backgroundColor:'#eee'}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',paddingVertical:20}}>
                    <View style={{paddingHorizontal:10,paddingRight:50}}>
                        <Text style={{fontSize:18,fontWeight:'700',color:R.colors.brown}}>{bondCodeId}</Text>
                        <Text style={{fontSize:16,color:R.colors.brown}}>{cty}</Text>
                    </View>
                    <View>
                        <Button
                            widthBtn={120}
                            heightBtn={39}
                            title='Đặt lệnh'
                            transformStyle='none'
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',paddingBottom:20}}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                        <MaterialCommunityIcons style={{paddingRight:5}} name="calendar-blank-outline" size={24} color={R.colors.brown}/>
                        <Text style={{color:R.colors.brown,fontSize:15}}>{dateTime}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                        <MaterialCommunityIcons style={{paddingRight:5}} name="chart-donut" size={24} color={R.colors.brown}/>
                        <Text style={{color:R.colors.success,fontSize:15}}>{interestRate}/năm</Text>
                    </View>
                </View>
            </View>
            <MaterialBondDetailTab data={route.params.item} />
        </View>
    );
};


export default BondsDetail;