import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text,StyleSheet, ImageBackground, Dimensions,ScrollView} from 'react-native';
import R from '../../assets/R';
import SwipeSliderIMG from './SwipeSliderImg';
import Videos from './Video';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Project = (props) =>  {
    
    const {imgBg}=props.data

    return (
        <ScrollView>
            <View style={{paddingVertical:5,paddingTop:20}}>
                <ImageBackground style={{width:'100%',height:160}} source={imgBg}>
                </ImageBackground>
            </View>
            <SwipeSliderIMG
                title={'Phối cảnh dự án'}
                data={props.data}
            />
            <SwipeSliderIMG
                title={'Căn hộ mẫu'}
                data={props.data}
            />
            <Videos
                title={'Videos'}
                data={props.data}
            />
        </ScrollView>
    );
};

const styles=StyleSheet.create({
    imgBg:{
        borderRadius:10,
        overflow:'hidden',
        height:100,
        width:180,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    txtTitle:{
        fontSize:16,
        fontWeight:'600',
        paddingVertical:10,
        paddingHorizontal:10
    },
})

export default Project;
