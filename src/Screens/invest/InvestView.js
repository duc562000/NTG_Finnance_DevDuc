import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import R from '../../assets/R';
import HeaderTitleLeft from '../../components/Header/HeaderTitleLeft';
import { BANK_ACCOUNT_SCREEN, BONDS_SCREEN } from '../../routers/ScreenNames';


const InvestView = props => {
    const navigate = useNavigation();
    return (
        <View style={{flex:1}}>
            <HeaderTitleLeft
                title='DANH MỤC ĐẦU TƯ'
                QRcode={true}
                isIconNoti={true}
                isRed={true}
            />
            <TouchableOpacity onPress={() => navigate.navigate(BONDS_SCREEN)}>
                <Text style={{textAlign:'center',paddingTop:100,color:R.colors.black}}>Trái phiếu</Text>
            </TouchableOpacity>
        </View>
    );
};


export default InvestView;