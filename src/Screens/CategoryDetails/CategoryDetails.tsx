import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {DrawerNavigatorProps} from '../../Routes/Routes';
import Container from '../../Components/Container/Container';
import {TextInput} from 'react-native-gesture-handler';

const CategoryDetails: FC<DrawerNavigatorProps<'CategoryDetail'>> = ({
  route,
  navigation,
}) => {
  const {title, attributes} = route.params.category;
  return (
    <Container>
      <Text>CategoryDetails : {title}</Text>
      {attributes.map((attr: any, i: number) => (
        <View key={i}>
            {attr.type === 'Text' ? <TextInput value={attr.name}/> : null}
            {attr.type === 'Checkbox' ? <Text>{attr.name}</Text> : null}
            {attr.type === 'Date' ? <TextInput /> : null}
            {attr.type === 'Number' ? <Text>{attr.name}</Text> : null}
        </View>
      ))}
    </Container>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({});
