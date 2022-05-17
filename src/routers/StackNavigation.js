import React, {Fragment, useRef, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigation';
import Login from '../Screens/authen/Login';
import * as ScreenName from './ScreenNames';
import FogotPassword from '../Screens/authen/FogotPassword';
import Register from '../Screens/authen/Register';
import RegisterDone from '../Screens/authen/RegisterDone';
import SurveyScreen from '../Screens/Survey/SurveyScreen';
import SurveyStep1 from '../Screens/Survey/SurveyStep1';
import NewsReadScreen from '../Screens/News/NewsReadScreen';
import { data } from '../Screens/News/MaterialNewsTab';
import UserInfoScreen from '../Screens/account/UserInforScreen';
import BankAcount from '../Screens/account/BankAccount';
import Questions from '../Screens/account/Questions';
import Bonds from '../Screens/invest/Bonds';
import BondsDetail from '../Screens/invest/BondsDetail';

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown:false
      }}
      
      initialRouteName={ScreenName.LOGINSCREEN}>
      <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
      <Stack.Screen name={ScreenName.FORGOT_PASSWORD} component={FogotPassword} />
      <Stack.Screen name={ScreenName.REGISTER} component={Register} />
      <Stack.Screen name={ScreenName.REGISTER_DONE} component={RegisterDone} />
      <Stack.Screen name={ScreenName.SURVEYSCREEN} component={SurveyScreen} />
      <Stack.Screen name={ScreenName.SURVEYSTEP1} component={SurveyStep1} />
      <Stack.Screen name={ScreenName.NEWS_READ_SCREEN} component={NewsReadScreen} />
      <Stack.Screen name={ScreenName.USER_INFOR_SCREEN} component={UserInfoScreen} />
      <Stack.Screen name={ScreenName.BANK_ACCOUNT_SCREEN} component={BankAcount} />
      <Stack.Screen name={ScreenName.QUESTIONS_SCREEN} component={Questions} />
      <Stack.Screen name={ScreenName.BONDS_SCREEN} component={Bonds} />
      <Stack.Screen name={ScreenName.BONDS_DETAIL_SCREEN} component={BondsDetail} />
      <Stack.Screen name={ScreenName.TABNAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default function App(props) {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
