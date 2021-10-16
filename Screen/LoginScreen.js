import {useState, createRef} from 'react';
import * as React from 'react';
import InputField from './Components/InputField';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import MainScreen from './DrawerScreens/MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();


  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://backend.gharhatti.com/api/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        // 'Content-Type': 'application/json',
      },
          })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === '200') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          // navigation.navigate('HomeSreen')
          
        } else {
          // setErrortext(responseJson.msg);
          // Alert.alert('Button Clicked!')

        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        Alert.alert(error);
      });
  };


  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/logov.jpeg')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View>
              <InputField
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                labelText="Email Address*"
                keyboardType="email-address"
                labelTextSize={14}
                labelColor={'grey'}
                textColor={'black'}
                borderBottomColor={'black'}
                inputType="Mobile Number"
                customStyle={{padding: 20, textAlign: 'center'}}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View>
              <InputField
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                labelText="Password*"
                // placeholder="Enter Name"
                // placeholderTextColor={'black'}
                labelTextSize={14}
                labelColor={'grey'}
                textColor={'black'}
                borderBottomColor={'black'}
                inputType="password"
                customStyle={{padding: 20, textAlign: 'center'}}
                secureTextEntry={true}
                onSubmitEditing={Keyboard.dismiss}
                autoCapitalize="none"
                autoCorrect={false}
                ref={passwordInputRef}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              //
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Don't have an account?{' '}
              <Text
                style={{
                  color: '#ffba00',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
                onPress={() => navigation.navigate('RegisterScreen')}>
                SignUp
              </Text>
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    height: '13%',
    width: '80%',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#ffba00',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonTextStyle: {
    // color: '#FFFFFF',
    // paddingVertical: 10,
    fontSize: 16,
    // position:'absolute',
    color: '#fff',
    textAlign: 'center',
    // fontSize: 15,
    marginTop: 1,
    paddingTop: 0.1,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    // labelTextSize={14},
    // labelColor={'grey'}
    // textColor={'black'}
    borderBottomColor: 'black',
    // inputType="email"
    // customStyle={{padding: 20, textAlign: 'center'}}
    // autoCapitalize="none"
    // autoCorrect={false}
    // borderWidth: 1,
    // borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
