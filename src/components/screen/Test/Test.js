import React, { Component } from 'react'
import { Modal, View, Text } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'native-base'



class Test extends Component {
    state = {
        isModalVisible: false
    }
    toggleModal = () => {
        this.setState({ isModalVisible: true });
    };
    close = () => {
        this.setState({ isModalVisible: false });
    }
    render() {
        const images = [{
            // Simplest usage.
            url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

        }]

        return (
            <View>
                <TouchableOpacity onPress={this.toggleModal}><Text>Pencet</Text></TouchableOpacity>
                <Modal visible={this.state.isModalVisible} transparent={true}>
                    <Button style={{ backgroundColor: 'black' }} onPress={() => this.close()} title='ok'><Text style={{ color: 'white' }}>Close</Text></Button>
                    <ImageViewer imageUrls={images} style={{ height: '50%' }} />
                </Modal>

            </View>
        )
    }
}

export default Test