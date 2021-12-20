import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import HeaderBar from '../../shared/header-bar';
import {styles} from './style';
import {wp, hp} from '../../shared/responsive-dimension';
import {ButtonGroup} from 'react-native-elements';

const Screen1 = props => {
  const buttons = ['Suggested Contacts', 'Address Book'];
  const [activeTab, setActiveTab] = useState(0);
  const [cc, setCc] = useState('');
  const [bbc, setBbc] = useState('');
  const [to, setTo] = useState(false);
  const [toValue, setToValue] = useState('');
  return (
    <View>
      <HeaderBar
        tintColor="#fff"
        headerTitle="Service Confirmation Report"
        headerRight="send"
        hasBackButton
        onPressRightIcon={() => props.navigation.navigate('Screen2')}
      />
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <View style={{width: wp(60)}}>
            <Text style={styles.formLabelText}>To</Text>
          </View>
          <TouchableOpacity
            onPress={() => setTo(!to)}
            style={styles.inputHolder}>
            <TextInput
              value={toValue}
              onChange={text => setToValue(text)}
              placeholderTextColor="#000"
              style={styles.formInput}
              placeHolder="N/A"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <View style={{width: wp(60)}}>
            <Text style={styles.formLabelText}>CC</Text>
          </View>
          <View style={styles.inputHolder}>
            <TextInput
              value={cc}
              onChange={text => setCc(text)}
              placeholderTextColor="#000"
              placeHolder="Hello World"
              style={styles.formInput}
            />
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <View style={{width: wp(60)}}>
            <Text style={styles.formLabelText}>BBC</Text>
          </View>
          <View style={styles.inputHolder}>
            <TextInput />
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <View style={{width: wp(60)}}>
            <Text style={styles.formLabelText}>Subject</Text>
          </View>
          <View style={styles.inputHolder}>
            <TextInput />
          </View>
        </View>
      </View>

      {to && (
        <View style={styles.toContainer}>
          <ButtonGroup
            buttons={buttons}
            selectedIndex={activeTab}
            onPress={index => setActiveTab(index)}
            containerStyle={styles.switchHeaderButton}
            buttonStyle={styles.buttonStyle}
            selectedButtonStyle={styles.selectedButtonStyle}
            textStyle={styles.textStyle}
            innerBorderStyle={styles.innerBorderStyle}
            selectedTextStyle={styles.selectedTextStyle}
          />
          <View style={styles.emailContainer}>
            {randomEmails.map(email => (
              <TouchableOpacity
                style={styles.singleEmail}
                onPress={() => {
                  setToValue(email.email);
                  setTo(false);
                }}>
                <Text>{email.email}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const randomEmails = [
  {
    id: 1,
    email: 'hello@world.com',
  },
  {
    id: 2,
    email: 'support@world.com',
  },
  {
    id: 3,
    email: 'brad.gibson@example.com',
  },
  {
    id: 4,
    email: 'verena.marchand@example.com',
  },
];

export default Screen1;
