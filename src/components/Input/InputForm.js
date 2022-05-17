import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {HEIGHTXD, WIDTHXD, getFontXD} from "../../Config/Functions";
import R from "../../assets/R";
import I18n from "../../helper/i18/i18n";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const TextField = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    name,
    title,
    onChangeText,
    isPassword,
    QRcode,
    maxLength,
    isNumber,
    value,
    editable,
    error,
    onBlur,
    placeholder,
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
    <View>
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
        <TextInput
          onBlur={onBlur}
          maxLength={maxLength ? maxLength : 256}
          placeholderTextColor={placeHolderColor ? placeHolderColor : '#8E8E8E'}
          editable={editable != null ? editable : true}
          placeholder={placeholder}
          secureTextEntry={isPassword && !showPassword}
          autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
          value={value}
          fontSize={13}
          keyboardType={keyboardType}
          onChangeText={(val) => {
            if (keyboardType === 'number-pad') {
              const text = val.replace(/[^0-9]/g, "");
              onChangeText(text)
            } else {
              onChangeText(val)
            }
          }}
          style={{
            height: heightInput ? heightInput : 50,
            width:widthInput ? widthInput : 350,
            color: textColor ? textColor : R.colors.black,
            
            fontSize: fontSize ? fontSize : R.fontsize.fontSizeInputText,
            paddingVertical: 5,
            fontWeight: '400',
            paddingHorizontal: 17,
            backgroundColor: R.colors.colorBgInputText,
            borderRadius: 5,
            borderWidth:0.2,
          }}
        />
        {isPassword && <TouchableOpacity style={{position: 'absolute', right: 17}}
                                         onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color={'#4B4B4B'}/>
        </TouchableOpacity>
        }

        {QRcode && <TouchableOpacity style={{position: 'absolute', right: 17}}
                                         
        >
          <FontAwesome name="qrcode" size={20} color="black" />
        </TouchableOpacity>
        }
      </View>
      <View
        style={{
          height: 20,
          marginTop: 5,
        }}
      >
        {error && (
          <Text
            style={{
              color: tinColor ? tinColor : R.colors.red1,
              fontSize: getFontXD(32),
            }}
          >
            *Vui lòng nhập {title}*
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextField);
