import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import userImage from '../../img/meclear.jpg'
import ProfileSelectionButton from '../components/profileSelectionButton'
import icoGuitar from '../../img/ico_guitar.png'
import icoHand from '../../img/ico_hand_m.png'
import icoStar from '../../img/ico_star.png'
import icoStablishment from '../../img/ico_stablishment.png'

@observer
class ProfileSelect extends Component {

  render() {
    return (
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.imageContainer}>
          <Image resizeMode='contain' style={styles.userImage} source={userImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.centeredText}>
            Para começar, nos diga o seu perfil principal (você pode adicionar outro mais tarde):
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{ width: '50%', padding: 10 }}>
            <ProfileSelectionButton icon={icoGuitar} selected={true} profileName='Músico' />
          </View>
          <View style={{ width: '50%', padding: 10 }}>
            <ProfileSelectionButton icon={icoHand} selected={false} profileName='Banda' />
          </View>
          <View style={{ width: '50%', padding: 10 }}>
            <ProfileSelectionButton icon={icoStablishment} selected={false} profileName='Estabelecimento' />
          </View>
          <View style={{ width: '50%', padding: 10 }}>
            <ProfileSelectionButton icon={icoStar} selected={false} profileName='Agente/Produtora' />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  textContainer: {
    // height: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '20%',
    paddingRight: '20%'
  },
  centeredText: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  }
});

export default ProfileSelect;