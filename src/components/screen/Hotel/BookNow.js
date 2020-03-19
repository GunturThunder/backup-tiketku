import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
 
class BookNow extends Component {
  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
            <TextInput placeholder="aaaa" />
            <TextInput placeholder="aaaa" />
            <TextInput placeholder="aaaa" />
          </View>
        </Modal>
      </View>
    );
  }
}

export default BookNow