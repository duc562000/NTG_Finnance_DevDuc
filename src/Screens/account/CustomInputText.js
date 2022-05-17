import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import InputForm from "../../components/Input/InputForm";
import R from "../../assets/R";


const CustomInputText =({control,title,placeholder,name,defaultValue,QRcode,widthInput,error,rules={}}) => {
    return(
        <View style={{paddingHorizontal:15}}>
                        <Controller
                            control={control}
                            rules={rules}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputForm
                                        textColor={R.colors.black}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeHolderColor={"#333"}
                                        placeholder={placeholder}
                                        widthInput={widthInput}
                                        title={title}
                                        QRcode={QRcode}
                                        error={error}
                                        name={name}
                                />
                            )}
                                name={name}
                                defaultValue={defaultValue}
                            />  
                </View> 
    )
}

export default CustomInputText;