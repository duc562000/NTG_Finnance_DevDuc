import React, {useEffect, useState} from 'react';
import AccountView from './AccountView';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {saveUserToRedux, saveWalletInfo} from '../../actions/users';
import {showLoading, hideLoading} from '../../actions/loadingAction';
import {logoutAPI} from '../../apis/Functions/users';
import {logout} from '../../Config/Functions';

const Account = props => {
  return <AccountView />;
};

const mapStateToProps = state => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};
export default connect(mapStateToProps, {
  saveUserToRedux,
  saveWalletInfo,
  showLoading,
  hideLoading,
})(Account);
