import {StyleSheet, Text, View, TextStyle, ViewProps} from 'react-native';
import React, {ReactNode} from 'react';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {Colors} from '../../Utils/Theme'

interface TextProps {
  style?: TextStyle;
  children: ReactNode;
}
const BigText = (props: TextProps) => {
  return <Text style={[styles.smallText, props.style]}>{props.children}</Text>;
};

export default BigText;

const styles = StyleSheet.create({
    smallText: {
        fontSize: rf(2.8),
        color: Colors.black,
    }
});