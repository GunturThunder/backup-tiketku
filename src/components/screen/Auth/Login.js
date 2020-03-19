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

class Login extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View>
                    <Image style={{ position: 'absolute' }} source={require('../../../img/icon/bg.png')} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ marginTop: 232, flexDirection: 'row' }}>
                            <TouchableOpacity><Text style={{ color: '#57DBE9', fontSize: 21, fontWeight: 'bold' }}>Sign In</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}><Text style={{ color: 'white', fontSize: 21, marginLeft: 20, fontWeight: 'bold' }}>Sign Up</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Content style={{paddingHorizontal:40,marginTop:60}}>
                    <Form>
                        <Item >
                            <Input placeholder="Phone Number" placeholderTextColor="#57DBE9" style={{color:'#989898'}} keyboardType={'numeric'} />
                        </Item>
                        <Item>
                            <Input secureTextEntry={true} placeholder="Password" placeholderTextColor="#57DBE9" style={{color:'#989898'}} />
                        </Item>
                    </Form>
                    <TouchableOpacity style={{height:44,backgroundColor:'#57DBE9',marginTop:20,borderRadius:24,justifyContent:'center',alignItems:'center'}}><Text style={{color:'white',fontSize:20}}>Sign in</Text></TouchableOpacity>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}><Text style={{fontSize:16,color:'#989898'}}>Forget Password ?</Text></TouchableOpacity>
                    </View>
                </Content>
            </View>
        )
    }
}

export default Login;