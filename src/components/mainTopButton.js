import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class MainTopButton extends Component {
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
            <View>
                <TouchableWithoutFeedback onPress={this.changeSelect}>
                    <View style={buttonStyle}>
                        <Text style={buttonTextStyle}>{this.props.label.toUpperCase()}</Text>
                    </View>
                </TouchableWithoutFeedback>
                {this.selected && <View style={styles.baloonContainer}>
                    <View style={styles.baloonTail}></View>
                </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8
    },
    buttonSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: (Platform.OS === 'android') ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
    },
    buttonText: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.6)'
    },
    buttonTextSelected: {
        color: 'rgba(255, 255, 255, 1)'
    },
    baloonContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    baloonTail: {
        width: 14,
        height: 14,
        // backgroundColor: 'white',
        borderTopWidth: 7,
        borderTopColor: 'rgba(255, 255, 255, 0.3)',
        borderLeftWidth: 7,
        borderLeftColor: 'transparent',
        borderBottomWidth: 7,
        borderBottomColor: 'transparent',
        borderRightWidth: 7,
        borderRightColor: 'transparent'
    }
});

export default MainTopButton;