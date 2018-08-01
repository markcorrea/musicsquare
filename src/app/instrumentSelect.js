import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import icoCancel from '../../img/ico_cancel.png'
import StyleSelectionButton from '../components/styleSelectButton'

@observer
class InstrumentSelect extends Component {

    render() {
        return (
            <ScrollView style={{ height: '100%' }}>
                <View style={styles.header}>
                    <View style={styles.headerBoxFlex1}>
                        <Image resizeMode='contain' style={styles.headerBoxIcon} source={icoCancel} />
                    </View>
                    <View style={styles.headerBoxFlex3}>
                        <Text numberOfLines={2} ellipsizeMode='head' style={styles.buttonText}>{`Quais instrumentos\n você toca?`}</Text>
                    </View>
                    <View style={styles.headerBoxFlex1}>
                        <Text style={styles.buttonText}>Avançar</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <StyleSelectionButton selected={true} label='Guitarra' />
                    <StyleSelectionButton selected={false} label='Baixo' />
                    <StyleSelectionButton selected={false} label='Violão' />
                    <StyleSelectionButton selected={true} label='Banjo' />
                    <StyleSelectionButton selected={false} label='Acordeon' />
                    <StyleSelectionButton selected={true} label='Teclado' />
                    <StyleSelectionButton selected={true} label='Cantor' />
                    <StyleSelectionButton selected={true} label='Saxofone' />
                    <StyleSelectionButton selected={true} label='Gaita' />
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
        flexDirection: 'row',
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

export default InstrumentSelect;