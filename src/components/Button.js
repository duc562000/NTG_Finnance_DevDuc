import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import R from "../assets/R";
import { colors, sizes } from "../assets/theme";
import { getFontXD, getWidth, HEIGHTXD, WIDTHXD } from "../Config/Functions";
import LinearGradient from "react-native-linear-gradient";

const Button = (props) => {
  const { title,transformStyle, onPress, containerStyle, txtStyle, backgroundColor,heightBtn,widthBtn } = props;
  const renderContent = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Text
        style={[
          {
            fontSize: 16,
            color: R.colors.white,
            fontWeight: "700",
            textTransform: transformStyle ? transformStyle : "uppercase",
          },
          { ...txtStyle },
        ]}
      >
        {title}
      </Text>
    </View>
  );
  return (
    <TouchableOpacity
      style={[
        {
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          elevation: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1,
          
        },
        { ...containerStyle },
      ]}
      disabled={props.disabled}
      onPress={onPress}
    >
      {!props.noBackgroundImage ? (
        <ImageBackground
          source={
            props.disabled ? R.images.bgDisableButton : R.images.bgWithdrawButton
          }
          style={{ width: widthBtn ? widthBtn : 350, height: heightBtn ? heightBtn : 55,borderRadius: 10,overflow:"hidden" }}
          
        >
          {renderContent()}
        </ImageBackground>
      ) : (
        renderContent()
      )}
    </TouchableOpacity>
  );
};
export default Button;
