import AsyncStorage from '@react-native-async-storage/async-storage';

interface PostPayload {
  id: string;
  title: string;
  attribute: unknown[]
}
export const postCategory = async (payload: PostPayload) => {
  const categoryList = await AsyncStorage.getItem('@category_list');
  if (categoryList != null) {
    JSON.parse(categoryList).push(payload);
    try {
      await AsyncStorage.setItem('@category_list', JSON.stringify(categoryList));
      return true
    } catch (err) {
      return err;
    }
  } else {
    try {
        await AsyncStorage.setItem('@category_list', JSON.stringify([payload]));
        return true
      } catch (err) {
        return err;
      }
  }
};

export const getAllCategories = async () => {
  try {
    return await AsyncStorage.getItem('@category_list');
  } catch (err) {
    return err;
  }
};

interface UniquePayload {
  id: string;
}
export const updateCategory = async (
  id: UniquePayload,
  payload: PostPayload,
) => {
  try {
    const categories = await AsyncStorage.getItem('@category_list');
    // categories[id] = payload
  } catch (err) {
    // saving error
    return err;
  }
};

export const deleteCategory = (payload: UniquePayload) => {};

export const fetchCategoryById = (payload: UniquePayload) => {};
