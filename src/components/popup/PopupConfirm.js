import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import R from "../../assets/R";
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from "../../Config/Functions";
import i18n from "../../helper/i18/i18n";

const PopupConfirm = (props) => {
  return (
    <Modal
      isVisible={props.isModalVisible}
      transparent={true}
      backdropOpacity={0.5}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          props.setModalVisible(false);
        }}
      >
        <View style={styles.opacity}>
          <TouchableWithoutFeedback>
            <View style={styles.contain}>
              <Text style={styles.txtTitle}>{props.title}</Text>
              <TouchableOpacity
                style={{ position: "absolute", right: 15, top: 10 }}
                onPress={() => {
                  props.setModalVisible(false);
                }}
              >
                <Image
                  source={R.images.icClose}
                  style={{ width: 34, height: 34, tintColor: R.colors.black }}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
              <Text style={styles.txtContent}>{props.content}</Text>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity
                  style={[styles.button, { marginRight: WIDTHXD(20) }]}
                  onPress={() => {
                    props.setModalVisible(false);
                  }}
                >
                  <Text style={styles.txtContent}>
                    {props.negativeText ? props.negativeText : i18n.t("Cancel")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { marginLeft: WIDTHXD(20) }]}
                  onPress={() => {
                    props.onAgreePress();
                    props.setModalVisible(false);
                  }}
                >
                  <Text style={[styles.txtContent, { color: "#1754C7" }]}>
                    {props.positiveText ? props.positiveText : i18n.t("Agree")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  opacity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contain: {
    width: "90%",
    backgroundColor: R.colors.white,
    borderRadius: WIDTHXD(20),
    paddingHorizontal: WIDTHXD(40),
    paddingVertical: WIDTHXD(40),
  },
  txtTitle: {
    fontSize: 20,
    color: R.colors.black,
    fontWeight: "600",
    textAlign: "center",
    paddingBottom: HEIGHTXD(40),
  },
  txtContent: {
    color: "#767676",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    height: HEIGHTXD(100),
    color: R.colors.white,
    marginTop: HEIGHTXD(60),
    marginBottom: HEIGHTXD(20),
    borderRadius: WIDTHXD(15),
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
export default PopupConfirm;
