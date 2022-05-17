import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Platform,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import R from "../../assets/R";
import {
  WIDTHXD,
  getFontXD,
  HEIGHTXD,
  getHeight,
  WIDTHXDICON,
} from "../../Config/Functions";
import Icon from "react-native-vector-icons/AntDesign";
import I18n from "../../helper/i18/i18n";
import SearchProvinceModal from "../../Screens/account/verification/SearchProvinceModal";

const data = [];
/**
 * This Function to show piker with list date (for example [{name:'Picker1'},{name:'Picker2}])
 * @callback onValueChange return value of item you choice
 * @param value value of picker you choice
 * @param defaultIndex defaultIndex of picker you choice
 * @param containerStyle custom containerStyle of view
 * @param data data value of date
 * @param width width of picker
 * @param height height of picker
 * @param date value of date you choice
 * @param heightItem height of picker Item
 * @param maxHeight set height of list
 * @param iconDropdown to set icon for dropdown
 * @param iconDropdownStyle to style icon dropdown
 * other you can make minDate,maxDate... with props of libary react-native-datepicker
 */
export default class PickerProvince extends Component {
  constructor(props) {
    super(props);
    this._button = null;
    this._buttonFrame = null;
    this.state = {
      value: "",
      showInBottom: true,
      isSearchProvince: false,
      index: null,
    };
  }

  render() {
    const {
      width,
      onValueChange,
      containerStyle,
      height,
      defaultValue,
      data,
      defaultIndex,
      iconDropdown,
      iconDropdownStyle,
      disabled,
      isTriangle,
      textStyle,
      title,
      onPress,
      required,
      value,
    } = this.props;
    return (
      <View style={styles.cell}>
        {title ? (
          <Text
            style={{
              fontSize: R.fontsize.fontSizeLabel,
              fontWeight: "700",
              color: R.colors.black,
              marginBottom: 8,
            }}
          >
            <Text>{title}</Text>
            {required && <Text style={{ color: R.colors.red1 }}> *</Text>}
          </Text>
        ) : null}
        <TouchableOpacity
          disabled={disabled}
          ref={(button) => {
            this._button = button;
          }}
          onPress={() => {
            this.setState({ isSearchProvince: true });
          }}
          style={[
            styles.pickerStyle,
            containerStyle !== null && containerStyle,
            height && { height },
            width && { width },
          ]}
        >
          <Text
            numberOfLines={1}
            style={[
              styles.dropdown_row_text,
              width && { width: width - WIDTHXD(125) },
              textStyle ? textStyle : {},
            ]}
          >
            {value && value.name}
          </Text>
          {iconDropdown || isTriangle ? (
            <Icon name={"caretup"} size={16} color={"#4B4B4B"} />
          ) : (
            <Icon name={"caretdown"} size={16} color={"#4B4B4B"} />
          )}
        </TouchableOpacity>
        <View
          style={{
            height: 20,
            marginTop: 5,
          }}
        >
          {this.props.error && (
            <Text
              style={{
                color: R.colors.red1,
                fontSize: getFontXD(32),
              }}
            >
              {`${I18n.t("PleaseSelect")}${title}`}
            </Text>
          )}
        </View>
        <SearchProvinceModal
          isModalVisible={this.state.isSearchProvince}
          indexSelected={this.state.index}
          value={value && value}
          setModalVisible={(showModal) =>
            this.setState({ isSearchProvince: showModal })
          }
          onPressItem={(province, index) => {
            this.setState({ isSearchProvince: false, index });
            onPress(province);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flex: 0,
  },
  dropdown: {
    alignSelf: "center",
    width: WIDTHXD(960),
    height: HEIGHTXD(0),
  },
  dropdown_text: {
    fontSize: getFontXD(42),
  },
  dropdown_dropdown: {
    width: WIDTHXD(960),
    maxHeight: HEIGHTXD(200),
    borderBottomLeftRadius: WIDTHXD(20),
    borderBottomRightRadius: WIDTHXD(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: Platform.OS == "ios" ? 0 : -21,
  },
  dropdown_row: {
    flexDirection: "row",
    height: HEIGHTXD(100),
    alignItems: "center",
    paddingHorizontal: 5,
  },
  dropdown_row_text: {
    // marginHorizontal: 4,
    fontSize: getFontXD(42),
    textAlignVertical: "center",
  },
  dropdown_separator: {
    borderBottomWidth: 0.3,
    borderBottomColor: R.colors.iconGray,
  },
  pickerStyle: {
    width: "100%",
    height: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
    borderRadius: 10,
    fontSize: getFontXD(42),
    paddingHorizontal: 17,
    backgroundColor: R.colors.colorBgInputText,
  },
});
