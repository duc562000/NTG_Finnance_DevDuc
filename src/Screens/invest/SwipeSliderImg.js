import React, {useEffect, useState} from 'react';
import {View, Text,StyleSheet, ImageBackground, Dimensions,ScrollView,FlatList} from 'react-native';
import R from '../../assets/R';
import Swiper from 'react-native-swiper'


const SwipeSliderIMG = (props) =>  {
    const {title} = props
    const {imgBg,imgBg1} = props.data
    return(
        <>
        <Text style={styles.txtTitle}>{title}</Text>
        <View style={{height:150,marginBottom:-25}} >

            <Swiper activeDotColor={R.colors.brown} loop={true}>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <ImageBackground style={styles.imgBg} source={imgBg}/>
                    <ImageBackground style={styles.imgBg} source={imgBg1}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <ImageBackground style={styles.imgBg} source={imgBg}/>
                    <ImageBackground style={styles.imgBg} source={imgBg}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <ImageBackground style={styles.imgBg} source={imgBg}/>
                    <ImageBackground style={styles.imgBg} source={imgBg}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <ImageBackground style={styles.imgBg} source={imgBg}/>
                    <ImageBackground style={styles.imgBg} source={imgBg}/>
                </View>
            </Swiper>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    imgBg:{
        borderRadius:15,
        overflow:'hidden',
        height:100,
        width:180,
    },
    txtTitle:{
        fontSize:16,
        fontWeight:'600',
        paddingVertical:10,
        paddingHorizontal:10
    },
})

export default SwipeSliderIMG;