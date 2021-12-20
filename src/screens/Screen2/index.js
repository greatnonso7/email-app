import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import HeaderBar from '../../shared/header-bar';
import Icon from 'react-native-vector-icons/EvilIcons';
import {styles} from './style';
import {hp} from '../../shared/responsive-dimension';

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <HeaderBar
        tintColor="#fff"
        hasBackButton
        headerTitle="Edit Software"
        headerRight="Save"
      />

      <View style={styles.body}>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>
            Platform/Product
            <Text style={{color: 'red'}}> *</Text>
          </Text>

          <View>
            <TextInput placeholder="Select Product" style={styles.formInput} />
            <TouchableOpacity>
              <Icon
                name="chevron-down"
                color="blue"
                size={hp(40)}
                style={styles.downArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formLabelContainer}>
            <Text style={styles.formLabel}>
              Sub Platform/{'\n'}Product
              <Text style={{color: 'red'}}> *</Text>
            </Text>
          </View>

          <View>
            <TextInput placeholder="Select Product" style={styles.formInput} />
            <TouchableOpacity>
              <Icon
                name="chevron-down"
                color="blue"
                size={hp(40)}
                style={styles.downArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formLabelContainer}>
            <Text style={styles.formLabel}>Software Version</Text>
          </View>

          <View>
            <TextInput placeholder="Select Product" style={styles.formInput} />
            <TouchableOpacity>
              <Icon
                name="chevron-down"
                color="blue"
                size={hp(40)}
                style={styles.downArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formLabelContainer}>
            <Text style={styles.formLabel}>
              Is ECM enabled
              <Text style={{color: 'red'}}> *</Text>
            </Text>
          </View>

          <View>
            <TextInput placeholder="Select Product" style={styles.formInput} />
            <TouchableOpacity>
              <Icon
                name="chevron-down"
                color="blue"
                size={hp(40)}
                style={styles.downArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={[styles.formLabel, {paddingTop: hp(10), fontSize: hp(13)}]}>
            Additional comments (100 Character(s) left)
          </Text>

          <View>
            <TextInput
              maxLength={100}
              multiline
              style={styles.commentContainer}
            />
          </View>

          <Text style={styles.countText}>0/100</Text>
        </View>
      </View>
    </View>
  );
};

export default Screen2;
