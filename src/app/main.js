import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import icoMenu from '../../img/ico_menu.png'
import icoBaloon from '../../img/ico_baloon.png'
import icoHeart from '../../img/ico_heart.png'
import icoDistance from '../../img/ico_distance.png'
import logo from '../../img/logo.png'
import userImage from '../../img/meclear.jpg'
import MainTopButton from '../components/mainTopButton'

@observer
class Main extends Component {
    @observable elementSquaredSize = ''

    measureView(event) {
        this.elementSquaredSize = Math.ceil((event.nativeEvent.layout.height))
    }

    renderImageContainer() {
        let myStyle = StyleSheet.create({
            backCircle: {
                width: this.elementSquaredSize,
                height: this.elementSquaredSize,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: 200,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 3000
            },
        })

        return (
            <View style={myStyle.backCircle}></View>
        )
    }

    searchPress = () => {
        Alert.alert('pressed')
    }

    render() {
        return (
            <View style={{ height: '100%' }}>
                <View style={styles.header}>
                    <View style={styles.headerBoxFlex1}>
                        <Image resizeMode='contain' style={styles.headerBoxIcon} source={icoMenu} />
                    </View>
                    <View style={styles.headerBoxFlex5}>
                        <Image resizeMode='contain' style={styles.headerBoxImage} source={logo} />
                    </View>
                    <View style={styles.headerBoxFlex1}>
                        <Text style={styles.buttonText}></Text>
                    </View>
                </View>
                <View style={styles.topButtonMenu}>
                    <View style={styles.buttonContainer}><MainTopButton label='buscar' selected={false} /></View>
                    <View style={styles.buttonContainer}><MainTopButton label='meu perfil' selected={false} /></View>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.middleContainerUsefulSpace}>
                        <View onLayout={(event) => this.measureView(event)} style={styles.middleContainerBackCircleContainer}>
                            {this.elementSquaredSize ? this.renderImageContainer() : null}
                        </View>
                        <View style={styles.userPhotoContainer}>
                            <View style={styles.userPhotoBorder}>
                                <Image resizeMode='contain' style={styles.userPhoto} source={userImage} />
                            </View>
                        </View>
                        <View style={styles.userName}>
                            <Text style={styles.userNameText}>Marcus Correa</Text>
                        </View>
                        <View style={{ width: '100%', flex: 3 }}></View>
                        <View style={styles.activeProfile}>
                            <Text style={styles.activeProfileTitle}>Perfil Ativo:</Text>
                            <Text style={styles.activeProfileContent}>Instrumentista</Text>
                        </View>
                        <View style={{ width: '100%', flex: 1 }}></View>
                        <View style={styles.searchButtonContainer}>
                            <TouchableWithoutFeedback onPress={this.searchPress}>
                                <View style={styles.searchButton}>
                                    <Text style={styles.searchButtonText}>
                                        BUSCAR
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerBoxFlex1}>
                        <Image resizeMode='contain' style={styles.footerBoxIcon} source={icoBaloon} />
                    </View>
                    <View style={styles.footerBoxFlex2}>
                        <View style={styles.footerBoxDistance}>
                            <Image resizeMode='contain' style={styles.footerBoxDistanceIcon} source={icoDistance} />
                        </View>
                        <View style={styles.footerBoxDistance}>
                            <Text style={styles.footerBoxDistanceText}>100Km</Text>
                        </View>
                    </View>
                    <View style={styles.footerBoxFlex1}>
                        <Image resizeMode='contain' style={styles.footerBoxIcon} source={icoHeart} />
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 54,
        display: 'flex',
        flexDirection: 'row'
    },
    headerBoxFlex1: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBoxFlex5: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBoxIcon: {
        width: 20,
        height: 20,
    },
    headerBoxImage: {
        height: 36
    },
    topButtonMenu: {
        // flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 55
    },
    buttonContainer: {
        width: '50%'
    },
    middleContainer: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    middleContainerUsefulSpace: {
        width: '100%', flex: 1, marginTop: 20, marginBottom: 20, position: 'relative'
    },
    middleContainerBackCircleContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        bottom: 25
    },
    userPhotoContainer: {
        width: '100%',
        height: 120,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPhotoBorder: {
        width: 120,
        height: 120,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'white',
        borderStyle: 'solid',
        overflow: 'hidden'
    },
    userPhoto: {
        width: 120,
        height: 120
    },
    userName: {
        marginTop: 10,
        width: '100%',
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userNameText: {
        color: 'white'
    },
    activeProfile: {
        width: '100%',
        height: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeProfileTitle: {
        color: 'white',
        fontSize: 12
    },
    activeProfileContent: {
        color: 'white',
        fontSize: 20
    },
    searchButtonContainer: {
        width: '100%',
        height: 54,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        width: 137,
        height: 52,
        backgroundColor: 'white',
        borderRadius: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButtonText: {
        fontSize: 14,
        color: '#666666'
    },
    footer: {
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row'
    },
    footerBoxFlex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerBoxFlex2: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column'
    },
    footerBoxIcon: {
        width: 20,
        height: 20,
    },
    footerBoxDistance: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBoxDistanceIcon: {
        width: 35,
        height: 35,
    },
    footerBoxDistanceText: {
        color: 'white',
        fontSize: 12
    },
});

export default Main;