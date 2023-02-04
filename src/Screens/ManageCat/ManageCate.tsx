import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../Components/Container/Container';
import CustomButton from '../../Components/Button';
import Card from '../../Components/Card/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Styles';
import {fieldTypes, field, forms} from './ManageData';
import SmallText from '../../Components/Text/SmallText';
import CustomInput from '../../Components/CustomInput/CustomInput';
import RegularText from '../../Components/Text/RegularText';
import {UniqueIds} from '../../Helpers/UniqueId';
import {useSelector, useDispatch} from 'react-redux';
import {POST_CATEGORY} from '../../Store/Actions/ActionTypes/ActionTypes';
import {postCategory} from '../../Store/Actions/CategoryAction/CategoryAction';

interface formProps {
  name: string;
  type: string;
  removal: boolean;
}
const ManageCate = () => {
  const dispatch = useDispatch();
  const all_categories = useSelector(
    (state: any) => state.category.all_categories,
  );

  const [showCard, setShowCard] = useState(false);
  const [showFieldType, setShowFieldType] = useState(false);
  const [customs, setCustoms] = useState<any>({});

  //state
  const [inputFields, setInputFields] = useState([
    {name: '', type: 'Text', removal: true},
  ]);
  const [title, setTitle] = useState<string>();
  //new implementation

  const handleFormChange = (index: number, event: string) => {
    let data: any[] = [...inputFields];
    data[index].name = event;
    setInputFields(data);
  };
  const addFields = (type: string) => {
    let newfield = {name: '', type: type, removal: true};
    setInputFields([...inputFields, newfield]);
    setShowFieldType(false);
  };
  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  const handleCreation = () => {
    setShowCard(true);
  };

  const addFieldHandler = () => {
    setShowFieldType(true);
  };
  const saveHandler = async () => {
    if (!title) {
      Alert.alert('Enter title');
      return;
    }
    const titlecheck = all_categories.filter(
      (result: any) => result.title.toLowerCase() === title.toLowerCase(),
    );

    if (titlecheck.length) {
      Alert.alert('Category already exist');
      return;
    }
    if (inputFields.length < 1) {
      Alert.alert('Select Attribute');
      return;
    }
    const payload = {
      title,
      id: UniqueIds(),
      attributes: inputFields,
    };

    await dispatch({
      type: POST_CATEGORY,
      payload,
    });

    setShowCard(false);
  };

  // const selectFieldOption = (type: field) => {
  //   setFormList([...formlist, type]);
  //   setShowFieldType(false);
  // };
  // const handleDelete = (item: number) => {
  //   setFormList(formlist.filter(form => form.id != item));
  // };
  // const handleFormInput = () => {};
  // const handleChangeText = (text: string, field: number) => {
  //   setCustoms((prev: {}) => ({...prev, [field]: text}));
  // };

  return (
    <Container onPress={() => setShowCard(false)}>
      <View style={{flex: 1}}></View>

      <View style={styles.lower}>
        {showCard ? (
          <Card>
            <TouchableOpacity
              onPress={() => setShowCard(false)}
              style={styles.cancel}
            >
              <Ionicons name="close-circle" size={20} color="gray" />
            </TouchableOpacity>
            <View>
              <RegularText>{title?.toUpperCase()}</RegularText>
              <CustomInput
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
              />
              {inputFields.map((input, index) => {
                return (
                  <View key={index}>
                    <CustomInput
                      data={input}
                      removable={input?.removal}
                      type={input?.type}
                      onDelete={() => removeFields(index)}
                      value={input.name}
                      onChangeText={(text: string) =>
                        handleFormChange(index, text)
                      }
                    />
                  </View>
                );
              })}
            </View>
            {showFieldType ? (
              <View>
                {fieldTypes.map((type: field, id) => (
                  <TouchableOpacity
                    key={id}
                    onPress={() => addFields(type.name)}
                  >
                    <SmallText>{type.name}</SmallText>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
            <View style={styles.btnwrap}>
              <View style={styles.btnItem}>
                <CustomButton label="Add Field" onPress={addFieldHandler} />
              </View>
              <View>
                <CustomButton label="Save" onPress={saveHandler} />
              </View>
            </View>
          </Card>
        ) : null}
        <CustomButton label="Create Category" onPress={handleCreation} />
      </View>
    </Container>
  );
};

export default ManageCate;
