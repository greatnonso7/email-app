import {StyleSheet} from 'react-native';
import {wp, hp, deviceWidth, paddingTopiOS} from '../responsive-dimension';
import {consumerNormalColors} from '../../colors';

export const styles = StyleSheet.create({
  headerTitle: {
    fontSize: hp(16),
    paddingTop: hp(12),
    fontWeight: 'bold',
  },
  headerCenterIcon: {
    height: hp(40),
    width: hp(40),
    marginTop: hp(5),
    borderRadius: hp(20),
  },
  headerRightButtonTitle: {
    fontSize: hp(14),
  },
  headerRightIcon: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
    // borderWidth: 1,
  },
  headerLeftIcon: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
    // tintColor: '',
  },
  headerLeftIconContainer: {
    position: 'absolute',
    left: wp(20),
    // borderWidth: 1,
  },
  headerRightIconContainer: {
    position: 'absolute',
    right: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    width: '100%',
    backgroundColor: consumerNormalColors.headerBg,
    height: hp(54),
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(10),
    paddingHorizontal: wp(20),
  },
  headerContainer: {
    width: deviceWidth,
    backgroundColor: consumerNormalColors.headerBg,
    paddingTop: paddingTopiOS,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    width: wp(75),
    height: hp(60),
    justifyContent: 'flex-end',
    opacity: 0.8,
    paddingBottom: hp(14),
    paddingLeft: wp(12),
  },
});
