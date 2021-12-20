import {StyleSheet} from 'react-native';
import {hp, wp} from '../../shared/responsive-dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: hp(30),
    marginHorizontal: hp(20),
  },
  formLabel: {
    color: '#000',
    top: hp(3),
    fontSize: hp(16),
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: hp(20),
  },
  formLabelContainer: {
    width: wp(130),
  },
  formInput: {
    fontSize: hp(15),
    borderBottomWidth: wp(1),
    width: wp(200),
    paddingBottom: hp(6),
    marginLeft: wp(10),
    paddingLeft: hp(10),
  },
  downArrow: {
    position: 'absolute',
    right: wp(0),
    bottom: hp(5),
  },
  commentContainer: {
    height: hp(150),
    width: wp(340),
    marginTop: hp(10),
    borderRadius: hp(5),
    borderWidth: 1,
    paddingVertical: hp(10),
    fontSize: hp(15),
    paddingHorizontal: hp(10),
  },
  countText: {
    paddingTop: hp(10),
    textAlign: 'right',
  },
});
