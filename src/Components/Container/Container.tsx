import {StyleSheet, Text, Touchable, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {Colors} from '../../Utils/Theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}
const Container = (props: ContainerProps) => {
  return (
  
      <View style={styles.container}>
        {props.children}
      </View>
 
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
  },
});
