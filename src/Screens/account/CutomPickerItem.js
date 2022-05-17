import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import InputForm from "../../components/Input/InputForm";
import R from "../../assets/R";
import PickerItem from "../../components/Picker/PickerItem";
import { getFontXD,getWidth } from "../../Config/Functions";


const CustomPickerItem =({control,title,name,defaultValue,data,error,rules={}}) => {
    return(
        <View style={{paddingHorizontal:15,marginLeft:10}} >
                            <Controller
                                control={control}
                                rules={rules}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <PickerItem 
                                        width={getWidth()-40}
                                        value={value}
                                        data={data}
                                        title={title}
                                        onValueChange={onChange}
                                        defaultValue={defaultValue}
                                        error={error}
                                        /> 
                                    )}
                                    name={name}
                                    
                                />  
                    </View> 
    )
}

export default CustomPickerItem;