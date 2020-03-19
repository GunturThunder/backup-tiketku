import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Content, Form, Item, Input, Icon } from 'native-base';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white'
    }
})

class ForgetPassword extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View>
                    <Image style={{ position: 'absolute' }} source={require('../../../img/icon/bg.png')} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name="arrow-back" style={{ marginLeft: 20, marginTop: 20, color: 'white' }}></Icon></TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ marginTop: 171, flexDirection: 'row' }}>
                            <Text style={{fontSize: 21, fontWeight: 'bold', color:'#57DBE9',marginRight:10}}>Forget</Text>
                            <Text style={{ color: 'white', fontSize: 21, fontWeight: 'bold' }}>Password</Text>
                        </View>
                    </View>
                </View>
                <Content style={{ paddingHorizontal: 40, marginTop: 60 }}>
                    <Form>
                        <Item >
                            <Input placeholder="Phone Number" placeholderTextColor="#57DBE9" style={{ color: '#989898' }} keyboardType={'numeric'} />
                        </Item>
                    </Form>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OtpSession')} style={{ height: 44, backgroundColor: '#57DBE9', marginTop: 20, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 20 }}>Next Step</Text></TouchableOpacity>
                </Content>
            </View>
        )
    }
}

export default ForgetPassword;