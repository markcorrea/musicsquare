import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class ProfileSelectionButton extends Component {
    @observable elementSquaredSize = ''
    @observable selected = false

    constructor(props) {
        super(props)
        this.icon = props.icon
        this.profileName = props.profileName
        this.selected = props.selected
    }

    changeSelect = () => {
        this.selected = !this.selected
    }

    measureView(event) {
        this.elementSquaredSize = Math.ceil((event.nativeEvent.layout.width))
    }

    renderImageContainer() {

        let buttonBackgroundColor = this.selected ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.08)'

        let myStyle = StyleSheet.create({
            iconContainer: {
                width: this.elementSquaredSize,
                height: this.elementSquaredSize,
                backgroundColor: buttonBackgroundColor,
                borderRadius: 200,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
        })

        return (
            <View style={myStyle.iconContainer}>
                <Image resizeMode='contain' style={styles.componentIcon} source={this.icon} />
            </View>
        )
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.changeSelect}>
                <View onLayout={(event) => this.measureView(event)}>
                    {this.elementSquaredSize ? this.renderImageContainer() : null}
                    <View style={styles.textContainer}>
                        <Text style={styles.componentText}>{this.profileName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    componentIcon: {
        width: 40,
        height: 40
    },
    textContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    componentText: {
        fontSize: 13,
        color: 'white'
    }
});

export default ProfileSelectionButton;