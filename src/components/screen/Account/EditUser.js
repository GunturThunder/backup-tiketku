import React, { Component, version } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icom } from 'native-base'

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    header: {
        backgroundColor: 'white',
    },
    content: {
        height: 500,
        marginHorizontal: 10,
        marginTop: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'

    },
})

class EditUser extends Component {
    render() {
        return (
            <View style={styles.wrap}>

                <View style={styles.header}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingList')} style={{ marginBottom: 15 }}>
                            <Icon name="arrow-back" style={{ marginLeft: 20, marginTop: 20, color: '#75797C' }}></Icon>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: -40 }}><Text style={{ fontSize: 20, color: '#75797C' }}>Edit Profile</Text></View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={{ height: 230, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <View style={{ width: 95, height: 95, borderRadius: 50, borderWidth: 3, borderColor: '#57DBE9', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={require('../../../img/profile/profile1.png')} />
                            </View>
                            <Text style={{ paddingTop: 10, fontSize: 18, fontWeight: 'bold', color: '#515151' }}>Zlatan Ibrahimovic</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditUser')} style={{ height: 50, backgroundColor: '#57DBE9', paddingHorizontal: 85, marginTop: 10, justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, backgroundColor: 'white', height: 50, borderRadius: 10 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, height: 50, alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyHotel')} >
                                <Text style={{ fontSize: 18 }}>My Hotel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyHotel')}>
                                <Icon name="arrow-forward"></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('Home')}><Icon name="home" style={{ fontSize: 30,color: '#BDC0C6'}} /><Text style={{ fontSize: 10, marginTop: -5,color: '#BDC0C6'}}>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('BookingList')}><Icon name="book" style={{ fontSize: 30,color: '#BDC0C6'}} /><Text style={{ fontSize: 10, marginTop: -5,color: '#BDC0C6'}}>Book</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('User')}><Icon name="person" style={{ fontSize: 30, color: '#57DBE9' }} /><Text style={{ fontSize: 10, marginTop: -5,color: '#57DBE9'  }}>Account</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default EditUser;