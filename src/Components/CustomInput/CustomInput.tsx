import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Styles from './Styles';
import SmallText from '../Text/SmallText';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  removable?: boolean;
  type?: string;
  data?: {};
  onChangeText?: (text: string) => void;
  value?: string
  onDelete?: () => void;
  placeholder?: string;
}
const CustomInput = (props: Props) => {
  return (
    <View style={Styles.container}>
      <TextInput style={Styles.input} placeholder={props.placeholder || props.type} onChangeText={props.onChangeText} value={props.value}/>
      {props.removable ? (
        <View style={Styles.content}>
          <SmallText>{props.type}</SmallText>
          <TouchableOpacity onPress={props.onDelete}>
          <Ionicons name="trash" color="red" size={20} />
          </TouchableOpacity>
        
        </View>
      ) : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
