import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  RefreshControl,
} from "react-native";
import R from "../../assets/R";
import {
  getFontXD,
  getHeight,
  getWidth,
  toPriceVnd,
  WIDTHXD,
} from "../../Config/Functions";
import i18n from "../../helper/i18/i18n";
import { rgbaColor } from "react-native-reanimated/src/reanimated2/Colors";
import { isTablet } from "react-native-device-info";
import { FocusAwareStatusBar } from "../FocusAwareStatusBar";

const HEADER_EXPANDED_HEIGHT = 270;
const HEADER_COLLAPSED_HEIGHT = 56;

const TITLE_EXPANDED_HEIGHT = 24;
const TITLE_COLLAPSED_HEIGHT = 16;
const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export default class CollapsibleToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      open: true,
    };
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: "clamp",
    });

    const headerSlide = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 32],
      extrapolate: "clamp",
    });

    const headerTitleSize = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [TITLE_EXPANDED_HEIGHT, TITLE_COLLAPSED_HEIGHT],
      extrapolate: "clamp",
    });

    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const { point, amount, benifit_yesterday, total_notification_not_read } =
      this.props.walletInfo;
    const renderContentView = () => {
      return (
        <View style={styles.container}>
          <Animated.View
            onLayout={(event) => this.onLayout(event)}
            style={[
              styles.header,
              {
                height: headerHeight,
              },
            ]}
          >
            <Animated.View style={styles.appBar}>
              <Image
                style={styles.backIcon}
                source={R.images.icLogo2}
                resizeMode={"contain"}
              />
            </Animated.View>

            <Animated.Image
              style={{
                position: "absolute",
                height: HEADER_EXPANDED_HEIGHT,
                width: "100%",
                opacity: imageOpacity,
                right: 0,
                bottom: 0,
                borderBottomLeftRadius: isTablet() ? 40 : 0,
                borderBottomRightRadius: isTablet() ? 40 : 0,
              }}
              source={this.props.image}
              resizeMode={"cover"}
            />
            <Animated.View
              style={{
                position: "absolute",
                height: HEADER_EXPANDED_HEIGHT,
                width: "100%",
                opacity: imageOpacity,
                right: 0,
                bottom: 0,
                top: 40,
              }}
            >
              <Animated.View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={R.images.icLogo2}
                  style={{ height: 35, width: 156 }}
                  resizeMode={"contain"}
                />
              </Animated.View>
              <Animated.View
                style={{ flexDirection: "column", paddingVertical: 20 }}
              >
                <Text style={[styles.txtWallet]}>
                  {i18n.t("AccountBalance")}
                </Text>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "600",
                      color: R.colors.white,
                      textAlign: "center",
                    }}
                  >
                    {toPriceVnd(amount, true)}
                  </Text>
                  <Text style={{ fontSize: 14, color: R.colors.white }}>đ</Text>
                </View>
              </Animated.View>
              <Animated.View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 20,
                }}
              >
                <Animated.View
                  style={[styles.containerBenefit, { marginRight: 8 }]}
                >
                  <Text style={[styles.txtWallet]}>
                    {i18n.t("YesterdayProfit")}
                  </Text>
                  <Text style={styles.txtMoneyBenefit}>
                    {benifit_yesterday
                      ? toPriceVnd(benifit_yesterday, true)
                      : 0}{" "}
                    đ
                  </Text>
                </Animated.View>
                <Animated.View
                  style={[styles.containerBenefit, { marginLeft: 8 }]}
                >
                  <Text style={styles.txtWallet}>{i18n.t("RewardPoints")}</Text>
                  <Text style={[styles.txtMoneyBenefit, { color: "#FFBD12" }]}>
                    {toPriceVnd(point, true)}
                  </Text>
                </Animated.View>
              </Animated.View>
            </Animated.View>
            <TouchableOpacity
              style={{ position: "absolute", top: 40, right: 10 }}
              onPress={() => {
                this.props.onNotificationPress();
              }}
            >
              <View>
                {total_notification_not_read > 0 ? (
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      position: "absolute",
                      borderRadius: 10,
                      top: -2,
                      left: 0,
                      zIndex: 2,
                    }}
                  />
                ) : null}

                <Image
                  source={R.images.icNotification}
                  style={{ width: 24, height: 24 }}
                  resizeMode={"contain"}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.props.refreshing}
                onRefresh={this.props.onRefresh}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.state.scrollY,
                  },
                },
              },
            ])}
            scrollEventThrottle={16}
          >
            {this.props.children}
          </ScrollView>
        </View>
      );
    };

    return (
      <>
        {Platform.OS === "android" ? (
          <SafeAreaView style={{ flex: 1 }}>
            <FocusAwareStatusBar
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
            />
            {renderContentView()}
          </SafeAreaView>
        ) : (
          <>
            <FocusAwareStatusBar
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
            />
            {renderContentView()}
          </>
        )}
      </>
    );
  }

  onLayout(event) {
    const { x, y, height, width } = event.nativeEvent.layout;
    this.setState({ open: height === HEADER_COLLAPSED_HEIGHT ? false : true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: HEADER_EXPANDED_HEIGHT,
  },
  header: {
    position: "absolute",
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 2,
  },
  title: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  headerTitle: {
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
    bottom: 16,
    zIndex: 99,
  },
  maxHeader: {
    fontSize: 24,
    left: 16,
    lineHeight: 38,
  },
  minHeader: {
    fontSize: 16,
    paddingLeft: 16,
    color: R.colors.white,
  },
  backIcon: {
    height: 30,
    width: 156,
  },
  image: {
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 5,
    backgroundColor: R.colors.main,
  },
  imgIcon: {
    width: 65,
    height: 65,
  },
  containerBenefit: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: rgbaColor(245, 247, 252, 0.2),
  },
  containerItem: {
    borderRadius: 15,
    padding: 15,
    marginVertical: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: R.colors.white,
  },
  txtNormal: {
    fontSize: 14,
    color: "#717E95",
  },

  txtMoneyBenefit: {
    fontSize: 16,
    color: rgbaColor(0, 240, 255, 1),
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
  },

  txtWallet: {
    fontSize: 14,
    fontWeight: "600",
    color: rgbaColor(255, 255, 255, 0.6),
    textAlign: "center",
  },

  txtMoney: {
    fontSize: 14,
    color: R.colors.black,
    fontWeight: "600",
  },

  txtHeader: {
    color: R.colors.orange,
    fontSize: getFontXD(36),
    marginTop: 5,
    marginHorizontal: WIDTHXD(40),
    marginVertical: WIDTHXD(40),
  },

  txtButton: {
    fontSize: 12,
    fontWeight: "600",
    color: R.colors.white,
  },

  bgButton: {
    height: 26,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
