import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import icoCancel from '../../img/ico_cancel.png'
import StyleSelectButton from '../components/styleSelectButton'

@observer
class MusicalStyleSelect extends Component {

    render() {
        return (
            <ScrollView style={{ height: '100%' }}>
                <View style={styles.header}>
                    <View style={styles.headerBoxFlex1}>
                        <Image resizeMode='contain' style={styles.headerBoxIcon} source={icoCancel} />
                    </View>
                    <View style={styles.headerBoxFlex3}>
                        <Text numberOfLines={2} ellipsizeMode='head' style={styles.buttonText}>{`Selecione seus estilos\n musicais preferidos:`}</Text>
                    </View>
                    <View style={styles.headerBoxFlex1}>
                        <Text style={styles.buttonText}>Avançar</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <StyleSelectButton selected={true} label='Acid Jazz' />
                    <StyleSelectButton selected={false} label='Alternative' />
                    <StyleSelectButton selected={false} label='Blues' />
                    <StyleSelectButton selected={true} label='Classic Jazz' />
                    <StyleSelectButton selected={false} label='Country' />
                    <StyleSelectButton selected={true} label='Electronic' />
                    <StyleSelectButton selected={true} label='International' />
                    <StyleSelectButton selected={true} label='Jazz Blues' />
                    <StyleSelectButton selected={true} label='Metal' />
                    <StyleSelectButton selected={true} label='New Age' />
                    <StyleSelectButton selected={true} label='Pop' />
                    <StyleSelectButton selected={true} label='Punk' />
                    <StyleSelectButton selected={false} label='Rap' />
                    <StyleSelectButton selected={false} label='Reggae' />
                    <StyleSelectButton selected={true} label='Rock' />
                    <StyleSelectButton selected={true} label='Seasonal' />
                    <StyleSelectButton selected={false} label='Soundtracks' />
                    <StyleSelectButton selected={false} label='Trance' />
                    <StyleSelectButton selected={true} label='Urban' />
                    <StyleSelectButton selected={false} label='Wedding' />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 75,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    headerBoxFlex1: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBoxFlex3: {
        flexGrow: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBoxIcon: {
        width: 28,
        height: 28,
    },
    buttonText: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
    container: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default MusicalStyleSelect;