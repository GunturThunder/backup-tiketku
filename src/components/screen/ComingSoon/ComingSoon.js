import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base'
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerWrap: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    content: {
        height: 462,
        backgroundColor: '#F8F8F8',
        justifyContent:'center',
        alignItems:'center'
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 13,
        marginTop: 15,
        height: 103,
        borderRadius: 13,
        flexDirection: 'row',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
})

class ComingSoon extends Component {
    static navigationOptions = {
        title: "Coming Soon",
        headerTintColor: '#57DBE9',
        headerTitleStyle: {
            fontSize: 18,
        },
    };
    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.headerWrap}>
                    <TouchableOpacity style={{ margin: 10, backgroundColor: '#57DBE9', width: 136, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 18 }}>
                        <Text style={{ color: 'white' }}>Coming Soon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={{fontSize:30,color:'#57DBE9'}}>Coming Soon......</Text>
                </View> 
                <View style={styles.footer}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('Home')}><Icon name="home" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('BookingList')}><Icon name="book" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Book</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('History')}><Icon name="alarm" style={{ fontSize: 30, color: '#BDC0C6' }}/><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>History</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} ><Icon name="mail" style={{ fontSize: 30, color: '#57DBE9' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#57DBE9' }}>Indox</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('User')}><Icon name="person" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Account</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ComingSoon;