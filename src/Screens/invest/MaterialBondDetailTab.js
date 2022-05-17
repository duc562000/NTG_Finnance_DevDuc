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



const Tab = createMaterialTopTabNavigator();
const MaterialBondDetailTab = (props) => {
    console.log("data",props.data)
    
    return (
        <>
            <Tab.Navigator
            
                style={{ borderBottomWidth: 0.1}}
                // tabBarScrollEnabled={true}
                tabBarOptions={{
                    activeTintColor:R.colors.brown,
                    inactiveTintColor:R.colors.brownLight
                }}
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
                        width:'auto'
                    },   
                    }}
            >
                    <Tab.Screen   name="Tổng quan" component={()=> <Chart title={"ban tin chih"} /> }  />
                    <Tab.Screen   name="Dự án" component={()=> <Project data={props.data}  title={"ban tin chih"} /> }  />
                    <Tab.Screen   name="Chi tiết trái phiếu" component={()=> <BondsFullDetail data={props.data} title={"ban tin chih"} /> }  />
                    {/* <Tab.Screen   name="Bản tin tài chính" component={()=> <FinanceNews data={data} title={"ban tin chih"} /> }  />
                    <Tab.Screen  name="Tổ chức phát hành" component={()=> <FinanceNews   data={data1} title={"ban tin chih 121"} /> } />
                    <Tab.Screen  name="Hướng dẫn" component={()=> <FinanceNews  data={data} title={"ban tin chih  21312" } /> } />
                    <Tab.Screen  name="Hướng d2ẫn" component={()=> <FinanceNews  data={data} title={"ban tin chih  213d12" } /> } /> */}
            </Tab.Navigator>
        </>
    )
}

export default MaterialBondDetailTab