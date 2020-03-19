import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Content, Form, Item, Input, Icon, ListItem, CheckBox, Body } from 'native-base';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white'
    }
})

class Register extends Component {
  state = {
    name_user: '',
    email: '',
    address: '',
    gender: '',
    phone_number: '',
    password: '',
  };

  onValueChange = value => {
    this.setState({
      gender: value,
    });
  };

  onRegister = data => {
    axios.post('http://192.168.1.39:8282/v1/user/register/', data).then(res => {
      alert('success');
      this.props.navigation.navigate('Login');
    });
  };

  render() {
    return (
      <View style={styles.wrap}>
        <View>
          <Image
            style={{position: 'absolute'}}
            source={require('../../../img/icon/bg2.png')}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Icon
              name="arrow-back"
              style={{color: 'white', marginLeft: 20, marginTop: 20}}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 21,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Content style={{paddingHorizontal: 40, marginTop: 45}}>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
                onChangeText={text => this.setState({name_user: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Email"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
                onChangeText={text => this.setState({email: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Address"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
                onChangeText={text => this.setState({address: text})}
              />
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosHeader="Your Gender"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                onValueChange={this.onValueChange}>
                <Picker.Item label="Man" value="Man" />
                <Picker.Item label="Woman" value="Woman" />
              </Picker>
            </Item>
            <Item>
              <Input
                placeholder="Phone Number"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
                keyboardType="numeric"
                onChangeText={text => this.setState({phone_number: text})}
              />
            </Item>
            <Item>
              <Input
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#414141"
                onChangeText={text => this.setState({password: text})}
              />
            </Item>
          </Form>
          <TouchableOpacity
            onPress={() => this.onRegister(this.state)}
            style={{
              height: 44,
              backgroundColor: '#57DBE9',
              marginTop: 20,
              borderRadius: 24,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Sign up</Text>
          </TouchableOpacity>
        </Content>
      </View>
    );
  }
}

export default Register;