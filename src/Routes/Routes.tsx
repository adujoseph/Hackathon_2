import {NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerScreenProps} from '@react-navigation/drawer';
import DashboardScreen from '../Screens/Dashboard/Dashboard';
import ManageCategoryScreen from '../Screens/ManageCat/ManageCate';
import CategoryDetails from '../Screens/CategoryDetails/CategoryDetails';
import { useSelector, useDispatch } from 'react-redux';



const listOfCategory =[ {id: 1, name: 'Trailer', otherProps: {}}, {id: 2, name: 'Excavator', otherProps: {}}]

type DynamicScreen<T> = {
  [K in keyof T]: T[K]
}

 type DrawerParams = {
  Dashboard: undefined;
  Categories: undefined;
  CategoryDetail: {category: {
    id: number,
    title: string,
    attributes: any
  }}
};

export type  DrawerNavigatorProps<T extends keyof DrawerParams> = DrawerScreenProps<DrawerParams, T>


const Drawer = createDrawerNavigator();

const Routes = () => {
  const all_categories = useSelector((state: any) => state.category.all_categories);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        {all_categories.length ? 
        all_categories.map((list:any, i: number) => (
          <Drawer.Screen name={list.title.toUpperCase()} component={CategoryDetails} initialParams={{ category: list }} key={i} />
        )) : null}
        <Drawer.Screen name="Categories" component={ManageCategoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
