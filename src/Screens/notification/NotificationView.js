import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import i18n from '../../helper/i18/i18n';
import Header from '../../components/Header/Header';

const NotificationView = props => {
  const {onRefresh, isRefresh, onLoadMore} = props;

  return (
    <View style={{flex: 1}}>
      <Header title={i18n.t('Notification')} />
      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          style={{paddingVertical: 6}}
          keyExtractor={item => item.id}
          refreshing={isRefresh}
          onRefresh={onRefresh}
          onEndReachedThreshold={0.01}
          onEndReached={info => {
            onLoadMore();
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => props.onPressItem(item)}>
              <View
                style={{
                  backgroundColor: item.is_read ? 'white' : '#D0E5FF',
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  marginVertical: 7,
                  padding: 15,
                  borderRadius: 10,
                }}>
                <Image
                  source={{uri: item.icons}}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 5,
                    borderColor: '#D0D0D0',
                    borderWidth: 1,
                  }}
                />
                <View style={{marginLeft: 15, flex: 1}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    {item.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      marginTop: 5,
                    }}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#7A7A7A',
                      marginTop: 5,
                    }}>
                    {item.date_post}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '700',
            marginTop: 20,
          }}>
          {i18n.t('NullDataSearch')}
        </Text>
      )}
    </View>
  );
};

export default NotificationView;
