import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/Theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize'
 
export default StyleSheet.create({
  touchableContainer: {
    zIndex: 10,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: hp(2),
    height: hp(6),
    borderRadius: hp(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonContainerDisabled: {
    backgroundColor: '#00000026',
    paddingHorizontal: hp(2),
    height: hp(6),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: rf(1.8),
    marginRight: 5,
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: rf(2.2),
    fontWeight: '500',
  },
  labelDisabled: {
    color: '#00000066',
    fontSize: rf(2.2),
    fontWeight: '500',
  },
});
