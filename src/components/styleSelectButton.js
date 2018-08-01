import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class StyleSelectionButton extends Component {
    @observable selected = false
    constructor(props) {
        super(props)
        this.selected = props.selected
    }

    changeSelect = () => {
        this.selected = !this.selected
    }

    render() {
        let buttonStyle = this.selected ? [styles.button, styles.buttonSelected] : [styles.button]
        let buttonTextStyle = this.selected ? [styles.buttonText, styles.buttonTextSelected] : [styles.buttonText]

        return (
            <TouchableWithoutFeedback onPress={this.changeSelect}>
                <View style={buttonStyle}>
                    <Text style={buttonTextStyle}>{this.props.label}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 20,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 8
    },
    buttonSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: (Platform.OS === 'android') ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
    },
    buttonText: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.6)'
    },
    buttonTextSelected: {
        color: 'rgba(255, 255, 255, 1)'
    }
});

export default StyleSelectionButton;