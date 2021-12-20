import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {hp} from '../responsive-dimension';

import {styles} from './style';

const HeaderBar = ({
  tintColor,
  backgroundColor,
  headerRight,
  headerLeft,
  headerTitle,
  leftIcon,
  onPressRightIcon,
  onPressLeftIcon,
  hasBackButton,
  leftHeaderStyle,
  headerRightButtonTitle,
  headerCenter,
  headerCenterIcon,
  headerCenterIconStyle,
  profile,
}) => {
  const renderHeaderLeft = () => {
    if (headerLeft) {
      return (
        <View style={styles.headerLeftIconContainer}>
          <Text style={leftHeaderStyle}>{headerLeft}</Text>
        </View>
      );
    }
    if (leftIcon || hasBackButton) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressLeftIcon}
          style={styles.headerLeftIconContainer}>
          <Icon name="arrow-back-ios" color="white" size={30} />
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderRight = () => {
    if (headerRight) {
      return (
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={[styles.headerRightIconContainer]}>
          <Text style={{fontSize: hp(18), color: tintColor}}>
            {headerRight}
          </Text>
        </TouchableOpacity>
      );
    }

    if (headerRightButtonTitle) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressRightIcon}
          style={styles.headerRightIconContainer}>
          <Text style={[styles.headerRightButtonTitle, {color: tintColor}]}>
            {headerRightButtonTitle}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <View>
          <Text style={[styles.headerTitle, {color: tintColor}]}>
            {headerTitle}
          </Text>
        </View>
      );
    }
    if (headerCenter) {
      return headerCenter;
    }
    if (headerCenterIcon) {
      return (
        <View>
          <Image
            source={headerCenterIcon}
            style={[styles.headerCenterIcon, headerCenterIconStyle]}
            resizeMode={'cover'}
          />
        </View>
      );
    }
  };

  return (
    <View
      style={[
        styles.headerContainer,
        {backgroundColor: backgroundColor || 'blue'},
      ]}>
      <View
        style={[styles.navBar, {backgroundColor: backgroundColor || 'blue'}]}>
        {renderHeaderLeft()}

        {renderHeaderTitle()}

        {renderHeaderRight()}
      </View>
    </View>
  );
};

const hitSlop = {top: 10, left: 10, right: 10, bottom: 10};

export default HeaderBar;
