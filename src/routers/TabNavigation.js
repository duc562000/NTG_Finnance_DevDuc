import React, {useEffect, useState} from 'react';
import {DeviceEventEmitter, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {connect} from 'react-redux';
import R from '../assets/R';

import Account from '../Screens/account/Account';
import i18n from '../helper/i18/i18n';
import SnackBar from '../components/SnackBar';
import Notification from '../Screens/notification/Notification';
import Home from '../Screens/home';
import WalletModal from './PlussModal';
import News from '../Screens/News/News'
import InvestView from '../Screens/invest/InvestView';


const Tab = createBottomTabNavigator();

const WalletPopupComponent = () => {
  return null;
};

const TabNavigator = props => {
  
  const [reload, setReload] = useState(false);
  useEffect(() => {
    let setLanguage = DeviceEventEmitter.addListener('setLanguage', value => {
      setReload(!reload);
    });
    return () => {
      setLanguage.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Screen5"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:R.colors.brown,
        tabBarShowLabel:true,
        tabBarStyle:[
          {
            display:'flex',
            borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.29,
          shadowRadius: 2,
          elevation: 7,
          justifyContent: 'center',
          },
          null
        ]
      }}
      >
      <Tab.Screen
        name="HomeScreen1"
        component={Home}
        options={{
          tabBarLabel: i18n.t('Home'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={R.images.icHome}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Invest"
        component={InvestView}
        options={{
          tabBarLabelStyle: { fontSize:12,fontWeight:'bold',textTransform:'none' },
          tabBarLabel:'Đầu tư',
          tabBarIcon: ({color, size}) => (
            <Image
              source={R.images.icCodeopen}
              style={{width: size +20, height: size + 20, tintColor: color}}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={WalletPopupComponent}
        options={{
          tabBarButton: () => <WalletModal />,
        }}
      />

      <Tab.Screen
        name="NewsScreen"
        component={News}
        options={{
          tabBarLabelStyle: { fontSize:12,fontWeight:'bold',textTransform:'none' },
          tabBarLabel: 'Tin tức',
          tabBarIcon: ({color, size}) => (
            <Image
              source={R.images.icEarth}
              style={{width: size +5, height: size + 5, tintColor: color}}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={Account}
        options={{
          tabBarLabelStyle: { fontSize:12,fontWeight:'bold',textTransform:'none' },
          tabBarLabel: ('Tài khoản'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={R.images.icAccount}
              style={{width: size, height: size - 3, tintColor: color}}
              resizeMode={'contain'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
