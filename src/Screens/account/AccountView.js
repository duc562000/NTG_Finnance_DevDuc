import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import HeaderTitleLeft from '../../components/Header/HeaderTitleLeft';
import PickerAvatar from '../../components/Picker/PickerAvatar'
import R from '../../assets/R';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { reduce } from 'lodash';
import ButtonNext from '../../components/ButtonNext';
import ButtonLogout from '../../components/ButtonLogout';
import { BANK_ACCOUNT_SCREEN, LOGINSCREEN, QUESTIONS_SCREEN, USER_INFOR_SCREEN } from '../../routers/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import SwitchTouchID from '../../components/SwitchTouchID';





const AccountView = props => {
  const navigate = useNavigation();
  return (
    
    <View style={{flex: 1}}>
      <HeaderTitleLeft
        title='QUẢN LÝ TÀI KHOẢN'
        QRcode={true}
        isIconNoti={true}
        isRed={true}
      />
      <ScrollView>
        <View style={{alignItems:'center',paddingTop:10}}>
          <PickerAvatar/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:10}}>
          <Text 
            style={{color:R.colors.black,
                    fontWeight:'700',
                    fontSize:16,
                    paddingHorizontal:5,
                    paddingVertical:3
                  }}>
            </Text>
          <AntDesign style={{}} name="checkcircle" size={16} color={R.colors.success} />          
        </View>

        <View >
          <Text style={styles.txtTitle}>Quản lý tài khoản</Text>
          <ButtonNext
            title={'Thông tin cá nhân'}
            iconName='account-outline'
            isColor = {R.colors.brown}
            onPress={() => navigate.navigate(USER_INFOR_SCREEN)}
          />
          <ButtonNext
            title={'Xác thực danh tính'}
            iconName='account-check-outline'
            isColor = {R.colors.brown}
          />
          <ButtonNext
            title={'Tài khoản ngân hàng'}
            iconName='credit-card-outline'
            isColor = {R.colors.brown}
            onPress={() => navigate.navigate(BANK_ACCOUNT_SCREEN)}
          />
          <Text style={styles.txtTitle}>Bảo mật tài khoản</Text>
          <ButtonNext
              title={'Đặt lại PIN'}
              iconName='lock-outline'
              isColor = {R.colors.brown}
          />
          <SwitchTouchID
            title='Xác thực vân tay'
            isColor ={R.colors.brown}
          />
          
          <Text style={styles.txtTitle}>Khác</Text>
          <ButtonNext
              title={'Câu hỏi thường gặp'}
              iconName='lifebuoy'
              isColor = {R.colors.brown}
              onPress={() => navigate.navigate(QUESTIONS_SCREEN)}
          />
          <ButtonNext
              title={'Góp ý'}
              iconName='message-outline'
              isColor = {R.colors.brown}
          />
          <ButtonNext
              title={'Ngôn ngữ'}
              iconName='translate'
              info='Tiếng việt'
              isColor = {R.colors.brown}
          />
          <ButtonNext
              title={'Thông tin ứng dụng'}
              iconName='information-outline'
              isColor = {R.colors.brown}
          />
          <ButtonNext
              title={'Mời bạn bè'}
              iconName='account-supervisor-outline'
              info='0833434xxx'
              isColor = {R.colors.brown}
          />
          <Text style={styles.txtTitle}>Mạng xã hội</Text>
          <ButtonNext
              title={'Cộng đồng Facebook'}
              iconName='facebook'
              isColor = {R.colors.lightBlue}
          />
          <ButtonNext
              title={'Kênh Youtube chính thức'}
              iconName='youtube'
              isColor={R.colors.red}
          />
          <ButtonLogout
            title={'Thoát tài khoản'}
            iconName='sign-out'
            onPress={() => navigate.navigate(LOGINSCREEN)}
          />
        </View>
        
        </ScrollView>
    </View>
  );
};

const styles=StyleSheet.create({
  txtTitle : {
    fontSize:14,
    fontWeight:'600',
    color:R.colors.black,
    paddingVertical:15,
    paddingHorizontal:15
  },
})

export default AccountView;
