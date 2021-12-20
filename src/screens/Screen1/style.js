import {StyleSheet} from 'react-native';
import {hp, wp} from '../../shared/responsive-dimension';
import {consumerNormalColors as colors} from '../../colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: hp(20),
    marginHorizontal: wp(20),
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  inputHolder: {
    marginLeft: wp(20),
    width: wp(240),
    height: hp(30),
    borderBottomWidth: hp(1),
    paddingBottom: hp(5),
  },
  formLabelText: {
    fontSize: hp(16),
    fontWeight: '500',
    maxWidth: wp(60),
  },
  formInput: {
    fontSize: hp(17),
    color: '#000',
  },
  toContainer: {
    // position: 'absolute',
    bottom: hp(175),
    width: wp(340),
    // left: wp(100),
    height: hp(100),
  },
  switchHeaderButton: {
    height: hp(45),
    width: wp(340),
    backgroundColor: 'white',
    borderWidth: hp(0),
  },
  innerBorderStyle: {
    width: wp(0),
  },
  textStyle: {
    fontSize: hp(15),
  },
  selectedTextStyle: {
    fontSize: hp(14),
    color: colors.white,
  },
  buttonStyle: {
    height: hp(50),
    borderBottomWidth: hp(3),
    borderBottomColor: '#F2F2F2',
    borderLeftWidth: hp(0),
    borderRightWidth: hp(0),
  },
  selectedButtonStyle: {
    backgroundColor: colors.blue,
    borderRadius: hp(10),
  },
  buttonText: {
    fontSize: hp(16),
    height: hp(30),
  },
  emailContainer: {
    backgroundColor: colors.white,
    height: hp(200),
    bottom: hp(4),
    left: hp(10),
    paddingHorizontal: hp(10),
    paddingVertical: hp(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderBottomLeftRadius: hp(10),
    borderBottomRightRadius: hp(10),
    elevation: 5,
  },
  singleEmail: {
    paddingBottom: hp(10),
    paddingTop: hp(10),
    borderBottomWidth: 1,
  },
});
