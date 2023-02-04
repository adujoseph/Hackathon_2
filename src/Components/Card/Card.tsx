import {StyleSheet, Text, View, TextStyle, ViewProps, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors} from '../../Utils/Theme'

interface TextProps {
  style?: ViewStyle;
  children: ReactNode;
}
const Card = (props: TextProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        padding: hp(1.6),
        borderRadius: hp(1),
        marginBottom: hp(1),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    }
});