import React, { useState } from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import R from '../../assets/R';
import Chart from './Chart';
import BondsFullDetail from './BondsFullDetails';
import BondsOverview from './BondsOverview';
import Project from './Project';
import Bonds from './Bonds';
import ListInvest from './ListInvest';

export const data =[
    {
        bondCodeId:'NTG1234',
        dateTime:'12 tháng',
        interestRate:'15%',
        cty:'Công ty TNHH Ngọc Thiên',
        releaseDate:'5/6/2010',
        dateDue:'5/6/2022',
        denominations:'100.000.000',
        bondType:'Trái phiếu không chuyển đổi và không kèm chứng quyền,có tài sản đảm bảo',
        originalPayment:'Gốc trái phiếu thanh toán vào ngày đáo hạn.Lãi trái phiếu được thanh toán',
        firstTerm:'12%',
        nextTerms:'11%',
        imgBg:require('../../assets/images/bgOrangeCard.png'),
        imgBg1:require('../../assets/images/bgCard.png'),
        idVideos:"KVZ-P-ZI6W4",
        
    },
    {
        bondCodeId:'NTG22199',
        dateTime:'6 tháng',
        interestRate:'15%',
        cty:'Công ty TNHH Thiên Ngọc',
        releaseDate:'5/6/2010',
        dateDue:'5/6/2022',
        denominations:'200.000.000',
        bondType:'Trái phiếu không chuyển đổi và không kèm chứng quyền,có tài sản đảm bảo',
        originalPayment:'Gốc trái phiếu thanh toán vào ngày đáo hạn.Lãi trái phiếu được thanh toán',
        firstTerm:'12%',
        nextTerms:'11%',
        imgBg:require('../../assets/images/bgCard.png'),
        imgBg1:require('../../assets/images/bgCard.png'),
        idVideos:'FN7ALfpGxiI'
    },
    
]

const Tab = createMaterialTopTabNavigator();
const MaterialBondTab = (props) => {
    console.log("data",props.data)
    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor:R.colors.brown,
                    inactiveTintColor:R.colors.brownLight
                  }}
                style={{ borderBottomWidth: 0.1}}
                // tabBarScrollEnabled={true}
                screenOptions={{
                    tabBarLabelStyle: { fontSize:14,fontWeight:'bold',textTransform:'none' },
                    tabBarInActiveTintColor:R.colors.brown,
                    tabBarScrollEnabled:true,
                    tabBarIndicatorStyle :{
                        justifyContent:'center',
                        backgroundColor:R.colors.brown,
                        width:130,
                        left:15,
                        height:3,
                    },
                    
                    tabBarstyle:{
                        textAlign:'center',
                        height:10,
                        backgroundColor:R.colors.white,
                        width:'auto',
                    },   
                    }}
            >
                    <Tab.Screen   name="Đầu tư bền vững" component={()=> <ListInvest data={data} title={""} /> }  />
                    <Tab.Screen   name="Đầu tư chủ động" component={()=> <ListInvest  title={""} /> }  />
                    {/* <Tab.Screen   name="Chi tiết trái phiếu" component={()=> <BondsFullDetail data={props.data} title={"ban tin chih"} /> }  /> */}
                    {/* <Tab.Screen   name="Bản tin tài chính" component={()=> <FinanceNews data={data} title={"ban tin chih"} /> }  />
                    <Tab.Screen  name="Tổ chức phát hành" component={()=> <FinanceNews   data={data1} title={"ban tin chih 121"} /> } />
                    <Tab.Screen  name="Hướng dẫn" component={()=> <FinanceNews  data={data} title={"ban tin chih  21312" } /> } />
                    <Tab.Screen  name="Hướng d2ẫn" component={()=> <FinanceNews  data={data} title={"ban tin chih  213d12" } /> } /> */}
            </Tab.Navigator>
        </>
    )
}

export default MaterialBondTab