import React, { useEffect, useState } from "react";
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
import { CELL_COUNT } from "../../Config/constants";
import i18n from "../../helper/i18/i18n";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const PopupConfirm = (props) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [propsCell, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    setValue("");
  }, [props.isModalVisible]);

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
              <Text style={styles.txtTitle}>
                {i18n.t("TransactionPassword")}
              </Text>
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

              <View style={{ marginBottom: 10 }}>
                <CodeField
                  ref={ref}
                  {...propsCell}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <View
                      onLayout={getCellOnLayoutHandler(index)}
                      key={index}
                      style={[styles.cellRoot]}
                    >
                      <Text style={styles.cellText}>
                        {symbol ? "•" : null || (isFocused ? <Cursor /> : null)}
                      </Text>
                    </View>
                  )}
                />
              </View>

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
                    if (value) {
                      props.onAgreePress(value);
                      props.setModalVisible(false);
                    }
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
    backgroundColor: "#C8D9FF",
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
  codeFieldRoot: {
    marginTop: 0,
  },

  cellRoot: {
    width: 45,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: R.colors.white,
    backgroundColor: R.colors.white,
    borderWidth: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  cellText: {
    color: R.colors.black,
    fontSize: 42,
    textAlign: "center",
  },
});
export default PopupConfirm;
