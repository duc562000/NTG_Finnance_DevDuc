import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NEWS_READ_SCREEN, TABNAVIGATOR} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import HeaderTitleLeft from '../../components/Header/HeaderTitleLeft';
import HeaderTitleCenter from '../../components/Header/HeaderTitleCenter';
import Article from "./Article"
import fontsize from '../../assets/fontsize';


function NewsReadScreen({route}) {
  const navigate = useNavigation();
  const {title,image,content,type} = route.params.item
  // const {data} = props
  const renderArticle = ({ item }) => <Article item={item} />;
  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View style={{flex: 1}}>
      <HeaderTitleCenter
        isBack='true'
        QRcode='true'
        isIconNoti='true'
        isRed='true'
        title={title}
      />
      <Text style={{fontSize:13,
                    fontWeight:'bold',
                    color:R.colors.brown,
                    paddingHorizontal:10,
                    paddingVertical:10
                  }}>
                    {type}
      </Text>
      <View>
        
      </View>
      {/* <FlatList
      data={data.list}
      renderItem={renderArticle}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => {
          return(
              <View style={styles.finaceNews}>
                 
                      <Image 
                      source={data.main.image}
                      style={styles.finaceNewsImg}
                      />
                      <Text style={styles.txtfinaceNews}>{data.main.title}</Text>
                  
              </View>
          )
      }}
      // ItemSeparatorComponent={renderDivider}
      // ListFooterComponent={renderFooter}
      // initialNumToRender={6}
      // onEndReached={() => setPage((page) => page + 1)}
      // onEndReachedThreshold={1}
      // onRefresh={refreshData}
      // refreshing={refreshing}
      />
       */}
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

});

export default NewsReadScreen;
