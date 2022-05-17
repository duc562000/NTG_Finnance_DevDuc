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

const BondsFullDetail = (props) =>  {
    console.log("props.data",props.data)
    const {cty,bondCodeId,releaseDate,dateDue,denominations,bondType,originalPayment,firstTerm,nextTerms}=props.data
    return (
        <>
        <View style={{flex:1/4}}>
            <Text style={styles.txtTitle}>Thông tin trái phiếu</Text>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.txtSmallTitle}>Tổ chức phát hành</Text>
                    <Text style={styles.txtSmallTitle}>Mệnh giá</Text>
                    <Text style={styles.txtSmallTitle}>Ngày phát hành</Text>
                    <Text style={styles.txtSmallTitle}>Ngày đáo hạn</Text>
                </View>
                <View>
                    <Text style={styles.txtNomalRight}>{cty}</Text>
                    <Text style={styles.txtNomalRight}>{denominations} VNĐ</Text>
                    <Text style={styles.txtNomalRight}>{releaseDate}</Text>
                    <Text style={styles.txtNomalRight}>{dateDue}</Text>
                </View>
            </View>
        </View>
        <View style={{flex:1/4}}>
            <Text style={styles.txtTitle}>Loại trái phiếu</Text>
                <Text style={styles.txtNomal}>{bondType}</Text>
            <Text style={styles.txtTitle}>Thanh toán và Lợi tức</Text>
                <Text style={styles.txtNomal}>{originalPayment}</Text>
            <Text style={styles.txtTitle}>Coupon Trái phiếu</Text>
                <Text style={styles.txtNomal}>1.Kỳ đầu tiên: {firstTerm}/năm</Text>
                <Text style={styles.txtNomal}>2.Các kỳ tiếp theo: {nextTerms}/năm</Text>
        </View>
        </>
    );
};

const styles=StyleSheet.create({
    txtTitle:{
        fontSize:16,
        fontWeight:'600',
        paddingVertical:10,
        paddingHorizontal:10
    },
    txtSmallTitle:{
        fontSize:15,
        paddingVertical:3,
        paddingHorizontal:10,
        color:R.colors.brown
    },
    txtNomalRight:{
        fontSize:15,
        color:R.colors.black,
        paddingVertical:3,
        paddingHorizontal:10,
        textAlign:'right'
    },
    txtNomal:{
        fontSize:16,
        color:R.colors.black,
        paddingVertical:3,
        paddingHorizontal:10,
    }
})

export default BondsFullDetail;