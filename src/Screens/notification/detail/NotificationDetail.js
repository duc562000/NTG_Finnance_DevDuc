import React from 'react';
import {ScrollView, Text, View, useWindowDimensions} from 'react-native';
import Header from '../../../components/Header/Header';
import i18n from '../../../helper/i18/i18n';
import R from '../../../assets/R';
import RenderHtml from 'react-native-render-html';

const NotificationDetailView = props => {
  const {width} = useWindowDimensions();
  return (
    <View style={{flex: 1}}>
      <Header isBack title={i18n.t('NotificationDetail')} />
      <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: R.colors.colorBlueLight,
            fontSize: 20,
            fontWeight: '400',
            textAlign: 'center',
          }}>
          {props.notificationDetail.title}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            fontWeight: '400',
            lineHeight: 15,
            marginTop: 10,
          }}>
          {props.notificationDetail.fullDescription}
        </Text>

        <RenderHtml
          contentWidth={width}
          source={{html: props.notificationDetail.content}}
          enableExperimentalMarginCollapsing={true}
        />
      </ScrollView>
    </View>
  );
};
export default NotificationDetailView;
