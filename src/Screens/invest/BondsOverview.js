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

const BondsOverview = (props) =>  {
    console.log("props.data",props.data)
    // 
    return (
        <>
        <View style={{flex:1}}>
            <Text style={styles.txtTitle}>Biểu đồ hiệu quả đầu tư</Text>
        </View>
        </>
    );
};

const styles=StyleSheet.create({
    txtTitle:{
        fontSize:16,
        fontWeight:'600',
        paddingVertical:20,
        paddingHorizontal:10
    },
    
})

export default BondsOverview;