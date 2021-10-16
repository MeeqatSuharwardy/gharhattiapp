// Import React and Component
import React, {useState, createRef} from 'react';
// import Carousel from 'react-native-snap-carousel';

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
  TouchableHighlight,
  Button,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../Components/Loader';

const MainScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

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
        <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.thumbContainer}
              resizeMode={'center'}
              source={require('../../Image/logov.jpeg')}
            />
          </View>
          <View></View>
          <TouchableOpacity
            style={styles.getmore}
            // onPress={() => {naviagte.navigation({ routes: [{ name: 'RegisterScreen' }]})}}
            onPress={() => navigation.navigate('RegisterScreen')}
            underlayColor="#fff">
            <Text style={styles.getmoretext}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate('LoginScreen')}
            underlayColor="#fff">
            <Text style={styles.loginext}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    alignContent: 'center',
    marginBottom: 20,
    padding: 30,
  },
  getmore: {
    height: '12%',
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

  login: {
    height: '12%',
    width: '80%',
    alignItems: 'center',
    alignContent: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
  },

  loginext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
  },

  getmoretext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 1,
    paddingTop: 0.1,
  },

  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },

  thumbContainer: {
    width: '100%',
    height: 400,
  },
  thumbnail: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },

  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
