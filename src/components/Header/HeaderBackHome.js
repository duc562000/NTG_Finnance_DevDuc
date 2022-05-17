import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import R from "../../assets/R";
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from "../../Config/Functions";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SnackBar from "../SnackBar";

const Header = (props) => {
  const { title, isBack, isTransparent, hideShadow } = props;
  const navigate = useNavigation();
  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: R.colors.white,
        }}
      />
      <StatusBar
        backgroundColor="white"
        translucent={false}
        barStyle="dark-content"
      />
      <SnackBar />
      <View
        style={
          isTransparent
            ? styles.headerContainerTransparent
            : hideShadow
            ? styles.headerContainer
            : styles.headerContainer
        }
      >
        <Text
          numberOfLines={1}
          style={[
            styles.txtTitle,
            { color: isTransparent ? R.colors.white : R.colors.black },
          ]}
        >
          {title}
        </Text>
        {props.addPress && (
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 10,
            }}
            onPress={props.addPress}
          >
            <Ionicons
              name={"ios-add-circle-outline"}
              size={WIDTHXDICON(80)}
              color={isTransparent ? R.colors.white : R.colors.black}
            />
          </TouchableOpacity>
        )}
        {isBack && (
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 10,
              width: 35,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigate.goBack();
              navigate.goBack();
            }}
          >
            <Icon
              color={isTransparent ? R.colors.white : R.colors.black}
              name={"arrowleft"}
              size={22}
            />
          </TouchableOpacity>
        )}
        {props.filterPress && (
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 20,
            }}
            onPress={props.filterPress}
          >
            <Image
              source={R.images.icFilter}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainerShadow: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    backgroundColor: R.colors.white,
    shadowColor: "#000000",
    justifyContent: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 5,
  },

  headerContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    backgroundColor: R.colors.white,
    justifyContent: "center",
  },
  headerContainerTransparent: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  txtTitle: {
    flex: 1,
    fontSize: getFontXD(42),
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: R.colors.black,
  },
});
