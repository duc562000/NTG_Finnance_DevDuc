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
import { CART } from "../../routers/ScreenNames";
import { connect } from "react-redux";
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

        <TouchableOpacity
          style={{
            position: "absolute",
            left: 10,
            width: 35,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigate.goBack()}
        >
          <Icon
            color={isTransparent ? R.colors.white : R.colors.black}
            name={"arrowleft"}
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
          }}
          onPress={() => {
            navigate.navigate(CART);
          }}
        >
          {props.cart.length > 0 ? (
            <View
              style={{
                backgroundColor: "red",
                width: 15,
                height: 15,
                borderRadius: 10,
                top: -5,
                right: -10,
                position: "absolute",
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                {props.cart.length}
              </Text>
            </View>
          ) : null}

          <Icon name={"shoppingcart"} size={24} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};
export default connect(mapStateToProps, {})(Header);

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
