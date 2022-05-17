import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text,StyleSheet,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import R from '../../assets/R';
import HeaderTitleLeft from '../../components/Header/HeaderTitleLeft';
import HeaderTitleCenter from '../../components/Header/HeaderTitleCenter';
import { BONDS_DETAIL_SCREEN } from '../../routers/ScreenNames';
import ArticleBonds from './ArticleBonds';
import MaterialBondTab from './MaterialBondTab';



const Bonds = (props) => {
    const navigate = useNavigation();
    
    return (
        <View style={{flex:1}}>
            
            <HeaderTitleCenter
                title='Trái phiếu'
                QRcode={true}
                isIconNoti={true}
                isRed={true}
                isBack={true}
            />
            <MaterialBondTab/>
            {/* <FlatList
            data={data}
            renderItem={({ item }) => <ArticleBonds item={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.bondCodeId}
            /> */}
        </View>
    );
};


export default Bonds;

