import React, {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch
} from 'react-native';
import R from '../assets/R';
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from '../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import { LOGINSCREEN, TABNAVIGATOR } from '../../routers/ScreenNames';
const SwitchTouchID = props => {
  const {iconName,title,onPress,info,isColor} = props;
  const navigate = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
     <View
        style={{flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'space-between',
                                    paddingVertical:13,
                                    borderBottomWidth:0.2,
                                    borderTopWidth:0.2,
                                    borderColor:R.colors.gray3
                }}>
            
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15}}>
                    <MaterialCommunityIcons name='fingerprint' size={24} color={isColor} />
                    <Text style={{fontSize:14,paddingHorizontal:15,color:R.colors.black}}>{title}</Text>
                </View>
                <View style={{alignItems:'center',paddingHorizontal:15}}>
                    <Switch
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                        trackColor={{ false: R.colors.black, true: R.colors.brown }}
                        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#000"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
            </View>
          </View>
    </>
  );
};

export default SwitchTouchID;

const styles = StyleSheet.create({
  
});
