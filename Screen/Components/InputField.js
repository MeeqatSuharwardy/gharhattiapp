import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors, withTheme } from "react-native-elements";
class InputField extends Component {
    render() {
        const {
            labelText,
            labelTextSize,
            labelColor,
            textColor,
            borderBottomColor,
            inputType,
            customStyle,
            onChangeText
        } = this.props;;
        const color = labelColor || colors;   //color.white
        const fontSize = labelTextSize || 14;
        const inputColor = textColor || colors;
        const borderBottom = borderBottomColor || "transparent";

        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
                <TextInput
                    onChangeText={onChangeText}
                    autoCorrect={false}
                    style={[
                        { color: inputColor, borderBottomColor: borderBottom },
                        styles.InputField
                    ]}
                    secureTextEntry={inputType === "password"}
                />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    InputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    }
});
export default InputField;