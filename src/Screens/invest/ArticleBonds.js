import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  ImageBackground,
} from "react-native";
import R from "../../assets/R";
import {useNavigation} from '@react-navigation/native';
import { BONDS_DETAIL_SCREEN } from "../../routers/ScreenNames";
import { data } from "./DataNews";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ArticleBonds({ item }) {
//   const openLink = () => {
//     const url = item.url;

//     // https://reactnative.dev/docs/linking
//     Linking.canOpenURL(url).then((supported) => {
//       if (supported) {
//         Linking.openURL(url);
//       } else {
//         Alert.alert("Broken Link!");
//       }
//     });
//   };

//   const publishedFromNow = formatDistanceToNow(new Date(item.publishedAt));
const navigate = useNavigation();
  return (
    <View style={{flex:1,paddingHorizontal:10,paddingVertical:15,}}>
      <View style={{borderColor:R.colors.gray,borderWidth:0.2,borderTopRightRadius:10,borderTopLeftRadius:10}}>
        <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:15}}>
          <View style={{height:60,width:60,borderRadius:60,backgroundColor:R.colors.brown,alignItems:'center',justifyContent:'center'}}>
            <Image source={R.images.icBonds} style={{width:30,height:30}}/>
          </View>
          <View style={{paddingLeft:15}}>
            <Text style={{color:R.colors.brown,fontSize:18,fontWeight:'600'}}>{item.bondCodeId}</Text>
            <Text style={{color:R.colors.gray,fontSize:14,fontWeight:'500'}}>{item.bondCodeId}</Text>
          </View>
        </View>
        <Text style={{color:R.colors.black,fontSize:16,paddingHorizontal:15,paddingVertical:10}}>spspsp</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingVertical:15}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialCommunityIcons style={{paddingRight:5}} name="calendar-blank-outline" size={24} color={R.colors.brown}/>
            <Text style={{color:R.colors.brownLight,fontSize:14}}>hi</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialCommunityIcons style={{paddingRight:5}} name="chart-donut" size={24} color={R.colors.brown}/>
            <Text style={{color:R.colors.success,fontSize:14}}>hi</Text>
          </View>
        </View>
        
          <TouchableOpacity onPress={() => navigate.navigate(BONDS_DETAIL_SCREEN,{item})}  >
            <ImageBackground source={R.images.bgOrangeCard} borderBottomRightRadius={10} borderBottomLeftRadius={10} style={{height:50,width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:R.colors.white}}>Đầu tư ngay</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
    
});