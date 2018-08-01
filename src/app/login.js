import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, Alert, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import logoImage from '../../img/logo.png'
import icoFacebook from '../../img/ico_fb.png'

@observer
class Login extends Component {
  @observable login = '';
  @observable password = '';

  inputLoginHandler = val => {
    this.login = val;
  };

  inputPasswordHandler = val => {
    this.password = val;
  }

  onPress = () => {
    Alert.alert('pressed')
  }

  render() {
    return (
      <View style={{height: '100%', zIndex: 1}}>
        <View style={styles.logoContainer}>
          <Image resizeMode='contain' style={styles.logoImage} source={logoImage} />
        </View>
        <KeyboardAvoidingView style={styles.inputContainer} keyboardVerticalOffset={Platform.select({ ios: 64, android: -200 })}>
          <View style={styles.rightInput}>
            <View style={styles.rightInputLabelContainer}>
              <Text style={styles.rightInputLabel}>Email</Text>
            </View>
            <TextInput
              name={'login'}
              style={styles.rightInputText}
              value={this.login}
              underlineColorAndroid='transparent'
              placeholderTextColor='white'
              onChangeText={this.inputLoginHandler} />
          </View>
          <View style={styles.rightInput}>
            <View style={styles.rightInputLabelContainer}>
              <Text style={styles.rightInputLabel}>Senha</Text>
            </View>
            <TextInput
              name={'password'}
              style={styles.rightInputText}
              secureTextEntry={true}
              value={this.password}
              underlineColorAndroid='transparent'
              placeholderTextColor='white'
              onChangeText={this.inputPasswordHandler} />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                Entrar
                </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.loginButton}>
              <Image source={icoFacebook} style={styles.icoFacebook}></Image>
              <Text style={styles.loginButtonText}>
                Entrar com o Facebook
                </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    width: '60%'
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightInput: {
    width: '90%',
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightInputLabelContainer: {
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1
  },
  rightInputLabel: {
    color: 'white'
  },
  rightInputText: {
    textAlign: 'right',
    flexGrow: 5,
    color: 'white',
    paddingRight: 15,
    height: 40
  },
  buttonContainer: {
    width: '100%',
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '90%',
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 13
  },
  icoFacebook: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});

export default Login;