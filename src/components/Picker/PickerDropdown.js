

import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {HEIGHTXD, WIDTHXD, getFontXD} from "../../Config/Functions";
import R from "../../assets/R";
import DropDownPicker from 'react-native-dropdown-picker';
import I18n from "../../helper/i18/i18n";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const PickerDropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [showPassword, setShowPassword] = useState(false)
  const {
    title,
    placeholder,
    onChangeText,
    isPassword,
    QRcode,
    maxLength,
    isNumber,
    editable,
    error,
    onBlur,
    keyboardType,
    placeHolderColor,
    textColor,
    tinColor,
    fontSize,
    borderBottomColor,
    required,
    autoCapitalize,
    heightInput,
    widthInput
  } = props;
  return (
    <View style={{paddingBottom:15}}>
      {title ? <Text style={{
        fontSize: R.fontsize.fontSizeLabel,
        fontWeight: '700',
        color: R.colors.black,
        marginBottom: 8
      }}>
        <Text>{title}</Text>
        {required && <Text style={{color: R.colors.red1}}> *</Text>}
      </Text> : null}
      <View style={{justifyContent: 'center'}}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={placeholder}
          style={{
            height: heightInput ? heightInput : 50,
            width:widthInput ? widthInput : 350,
            color: textColor ? textColor : R.colors.black,
            fontSize: fontSize ? fontSize : R.fontsize.fontSizeInputText,
            paddingVertical: 5,
            fontWeight: '400',
            paddingHorizontal: 17,
            backgroundColor: R.colors.white,
            borderRadius: 5,
            borderWidth:0.2,
          
        }}
      />
      </View>
    </View>
  );
};

export default React.memo(PickerDropdown);
