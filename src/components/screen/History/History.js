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
        backgroundColor: '#F8F8F8'
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

class History extends Component {
    static navigationOptions = {
        title: "History",
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
                        <Text style={{ color: 'white' }}>History</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={{ borderBottomColor: '#CECECE', borderBottomWidth: 1 }}>
                            <View style={styles.card}>
                                <Image style={{ width: 77, height: 77, margin: 13, borderRadius: 5 }} source={require('../../../img/favehotel/pic1.jpg')} />
                                <View>
                                    <Text style={{ marginTop: 15, fontSize: 17 }}> Favehotel Padjajaran Bogor</Text>
                                    <Text style={{ marginTop: 10, fontSize: 13, color: '#565656' }}> IDR 579.000</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icon style={{ color: '#BDC0C6', fontSize: 20, marginRight: 10 }} name="locate"></Icon>
                                        <Text style={{ color: '#565656', forntSize: 15 }}>Jl.Riau No. 12D, RT.03/RW/03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="people"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>People</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="calendar"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>Day</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2 /Night</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#CECECE', borderBottomWidth: 1 }}>
                            <View style={styles.card}>
                                <Image style={{ width: 77, height: 77, margin: 13, borderRadius: 5 }} source={require('../../../img/favehotel/pic1.jpg')} />
                                <View>
                                    <Text style={{ marginTop: 15, fontSize: 17 }}> Favehotel Padjajaran Bogor</Text>
                                    <Text style={{ marginTop: 10, fontSize: 13, color: '#565656' }}> IDR 579.000</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icon style={{ color: '#BDC0C6', fontSize: 20, marginRight: 10 }} name="locate"></Icon>
                                        <Text style={{ color: '#565656', forntSize: 15 }}>Jl.Riau No. 12D, RT.03/RW/03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="people"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>People</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="calendar"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>Day</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2 /Night</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#CECECE', borderBottomWidth: 1 }}>
                            <View style={styles.card}>
                                <Image style={{ width: 77, height: 77, margin: 13, borderRadius: 5 }} source={require('../../../img/favehotel/pic1.jpg')} />
                                <View>
                                    <Text style={{ marginTop: 15, fontSize: 17 }}> Favehotel Padjajaran Bogor</Text>
                                    <Text style={{ marginTop: 10, fontSize: 13, color: '#565656' }}> IDR 579.000</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icon style={{ color: '#BDC0C6', fontSize: 20, marginRight: 10 }} name="locate"></Icon>
                                        <Text style={{ color: '#565656', forntSize: 15 }}>Jl.Riau No. 12D, RT.03/RW/03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="people"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>People</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="calendar"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>Day</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2 /Night</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#CECECE', borderBottomWidth: 1 }}>
                            <View style={styles.card}>
                                <Image style={{ width: 77, height: 77, margin: 13, borderRadius: 5 }} source={require('../../../img/favehotel/pic1.jpg')} />
                                <View>
                                    <Text style={{ marginTop: 15, fontSize: 17 }}> Favehotel Padjajaran Bogor</Text>
                                    <Text style={{ marginTop: 10, fontSize: 13, color: '#565656' }}> IDR 579.000</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icon style={{ color: '#BDC0C6', fontSize: 20, marginRight: 10 }} name="locate"></Icon>
                                        <Text style={{ color: '#565656', forntSize: 15 }}>Jl.Riau No. 12D, RT.03/RW/03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="people"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>People</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="calendar"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>Day</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2 /Night</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#CECECE', borderBottomWidth: 1 }}>
                            <View style={styles.card}>
                                <Image style={{ width: 77, height: 77, margin: 13, borderRadius: 5 }} source={require('../../../img/favehotel/pic1.jpg')} />
                                <View>
                                    <Text style={{ marginTop: 15, fontSize: 17 }}> Favehotel Padjajaran Bogor</Text>
                                    <Text style={{ marginTop: 10, fontSize: 13, color: '#565656' }}> IDR 579.000</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icon style={{ color: '#BDC0C6', fontSize: 20, marginRight: 10 }} name="locate"></Icon>
                                        <Text style={{ color: '#565656', forntSize: 15 }}>Jl.Riau No. 12D, RT.03/RW/03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="people"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>People</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 13, height: 40, backgroundColor: 'white', borderRadius: 20, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Icon name="calendar"></Icon>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginLeft: 10 }}>Day</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginRight: 20 }}>
                                    <Text>2 /Night</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView >
                </View> 
                <View style={styles.footer}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('Home')}><Icon name="home" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('BookingList')}><Icon name="book" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Book</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} ><Icon name="alarm" style={{ fontSize: 30, color: '#57DBE9' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#57DBE9' }}>History</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('ComingSoon')}><Icon name="mail" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Indox</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('User')}><Icon name="person" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Account</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default History;