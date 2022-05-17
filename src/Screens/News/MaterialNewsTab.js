import React, { useState } from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FinanceNews from './ FinanceNews';
import Huongdan from './Huongdan';
import Tochucphathanh from './Tochucphathanh';
import { ScrollView } from 'react-native-gesture-handler';
import R from '../../assets/R';

const Tab = createMaterialTopTabNavigator();
export const data={
    main:  {
        id:'1',
        type:'Bản tin tài chính',
        image:require('../../assets/images/bgCard.png'),
        title:'the typical read more/less text.',
        datetime:'5/6/200',
        content:'How can I get the number of lines of a text before it is rendered?I have implemented my own "CollapsibleText" (the typical rea'
    },
    list:[
        {
            type:'Bản tin tài chính',
            id:'1',
            image:require('../../assets/images/bgCard.png'),
            title:'my own "CollapsibleText" (the typical read more/less text).',
            datetime:'5/6/200',
        },
        {
            type:'Bản tin tài chính',
            id:'2',
            image:require('../../assets/images/bgCard.png'),
            title:'How can I get the number of lines of a text before it is rendered?I have implemented my own "CollapsibleText" (the typical read more/less text).',
            datetime:'5/6/200',
        },
        {
            type:'Bản tin tài chính',
            id:'3',
            image:require('../../assets/images/bgCard.png'),
            title:'How can I get the number of lines of a text before it is rendered?I have implemented my own "CollapsibleText" (the typical read more/less text).',
            datetime:'5/6/200',
        },
        {
            type:'Bản tin tài chính',
            id:'4',
            image:require('../../assets/images/bgCard.png'),
            title:'How can I get the number of lines of a text before it is rendered?I have implemented my own "CollapsibleText" (the typical read more/less text).',
            datetime:'5/6/200',
        },
        {
            type:'Bản tin tài chính',
            id:'5',
            image:require('../../assets/images/bgCard.png'),
            titles:'How can I get the number of lines of a text before it is rendered?I have implemented my own "CollapsibleText" (the typical read more/less text).',
            datetime:'5/6/200',
        }
    ]
}

const data1={
    main:  {
        id:'1',
        image:require('../../assets/images/bgCard.png'),
        title:'implemented my own "CollapsibleText" (the typical read more/less text).',
        datetime:'5/6/200',
        
    },
    list:[
        {
            id:'1',
            image:require('../../assets/images/bgCard.png'),
            title:'implemented my own "CollapsibleText" (the typical read more/less text).',
            datetime:'5/6/200',
        },
        {
            id:'2',
            image:require('../../assets/images/bgCard.png'),
            title:'How can I get the number of lines of a text before it is rendered?I have implemented my own "CollapsibleText" (the typical read more/less text).',
            datetime:'5/6/200',
        }
       
    ]
}



const MaterialNewsTab = (props) => {
    
    return (
        <>
            <Tab.Navigator
            
                style={{ borderBottomWidth: 0.1,}}
                tabBarScrollEnabled={true}
                
                screenOptions={{
                    tabBarLabelStyle: { fontSize:14,fontWeight:'bold',textTransform:'none' },
                    tabBarActiveTintColor:R.colors.brown,
                    tabBarInactiveTintcolor:R.colors.brown,
                    tabBarScrollEnabled:true,
                    tabBarIndicatorStyle :{
                        backgroundColor:R.colors.brown,
                        
                    },
                    tabBarstyle:{
                        
                        textAlign:'center',
                        height:50,
                        backgroundColor:R.colors.white,
                        width:'auto'
                        
                    },   
                  }}
            >
                
                    <Tab.Screen   name="Bản tin tài chính" component={()=> <FinanceNews data={data} title={"ban tin chih"} /> }  />
                    
                    <Tab.Screen  name="Tổ chức phát hành" component={()=> <FinanceNews   data={data1} title={"ban tin chih 121"} /> } />
                    <Tab.Screen  name="Hướng dẫn" component={()=> <FinanceNews  data={data} title={"ban tin chih  21312" } /> } />
                    <Tab.Screen  name="Hướng d2ẫn" component={()=> <FinanceNews  data={data} title={"ban tin chih  213d12" } /> } />
                    

                
            </Tab.Navigator>
        </>
    )
}

export default MaterialNewsTab