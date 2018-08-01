import React, { Component } from 'react';
import { Platform, View, StyleSheet, TouchableOpacity } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import LinearGradient from 'react-native-linear-gradient';
import Login from './src/app/login'
import ProfileSelect from './src/app/profileSelect'
import MusicalStyleSelect from './src/app/musicalStyleSelect'
import InstrumentSelect from './src/app/instrumentSelect'
import Main from './src/app/main'

@observer
class App extends Component {
  @observable page = 5;

  goForward = () => {
    if (this.page < 5) {
      this.page++
    }
  }

  goBackward = () => {
    if (this.page > 1) {
      this.page --
    }
  }
  
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.rightBox} onPress={this.goForward}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftBox} onPress={this.goBackward}>
        </TouchableOpacity>
        <LinearGradient
          start={{ x: 0.0, y: 1.0 }} end={{ x: 0.5, y: 0.25 }}
          colors={['#8321E1', '#34AFFF']}>
          <View style={styles.iosPadding}>
          {this.page === 1 && <Login />}
          {this.page === 2 && <ProfileSelect />}
          {this.page === 3 && <MusicalStyleSelect />}
          {this.page === 4 && <InstrumentSelect />}
          {this.page === 5 && <Main />}
          </View>
        </LinearGradient>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  iosPadding: {
    paddingTop: (Platform.OS === 'ios') ? 10 : 0
  },
  leftBox: {
    // backgroundColor: 'black',
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2000
  },
  rightBox: {
    // backgroundColor: 'black',
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2000
  }
})