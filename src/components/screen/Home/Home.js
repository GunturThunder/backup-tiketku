
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { getAllHotell, searchHotel } from '../../redux/action/hotel';
import { connect } from 'react-redux';
import axios from 'axios'

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        marginHorizontal: 17
    },
    header: {
        marginTop: 10
    },
    search: {
        backgroundColor: '#F5F5F5',
        width: 223,
        borderRadius: 10
    },
    comp1Wrap: {
        flexDirection: 'row'
    },
    headerIcon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    comp2Wrap: {
        marginTop: 15,
        flexDirection: 'row',
        marginBottom: 15
    },

    content: {
        height: 145,
        marginTop: 15
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonHotel: {
        height: 34,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#57DBE9',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14
    }
});

class Home extends Component {
    state = {
        name: '',
        city: '',
        citys: []
    }
    renderRow = ({ item }) => {
        return (
            <View>
                <View style={styles.content}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row' }} >
                            {item.images.map(image => (
                                <TouchableOpacity>
                                    <Image style={{ height: 133, width: 230, borderRadius: 15, marginRight: 5 }} source={{ uri: `${image.img}` }} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <Text style={{ color: '#75797C' }}>{this.convertToRupiah(item.hotel_price)}</Text>
                <Text style={{ fontSize: 18 }}>{item.hotel_name}</Text>
                <Text style={{ color: '#75797C' }}>{item.hotel_location}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HotelDetail', { id_hotel: item.id_hotel })} style={styles.buttonHotel}><Text style={{ color: '#57DBE9' }}>Detail Hotel</Text></TouchableOpacity>
            </View>
        )
    }
    async getAllHotell() {
        await this.props.dispatch(getAllHotell({}));
    }
    componentDidMount() {
        this.getAllHotell();
        axios.get("http://192.168.1.39:8282/v1/city").then(res => {
            this.setState({ citys: res.data.result })
            console.log(res.data.result)
        }).catch(err => {
            console.log(err)
        })
    }
    sortHotelHadle = async (event) => {
        // console.log(event)
        this.setState({
            city: event
        })
        const data = {
            name: this.state.name,
            city: event
        }
        console.log(event)
        await this.props.dispatch(getAllHotell(data));
    }

    searchHotelHadle = async (event) => {
        this.setState({
            name: event
        })
        const data = {
            name: event,
            city: this.state.city
        }
        console.log(this.props)
        await this.props.dispatch(getAllHotell(data));
    }
    convertToRupiah = (angka) => {
        var rupiah = ''
        var angkarev = angka.toString().split('').reverse().join('')
        for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
        return 'IDR. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
    }
    onRefreshing = () => {
        this.getAllHotell();
    }
    render() {
        const { hotels } = this.props;
        console.disableYellowBox = true;
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={styles.wrap}>
                    <View style={styles.header}>
                        <View style={styles.comp1}>
                            <View style={styles.comp1Wrap}>
                                <View style={styles.search}>
                                    <Icon style={{ marginTop: 10, color: '#BDC0C6', position: 'absolute', paddingLeft: 15 }} name="search"></Icon>
                                    <View style={{ borderRadius: 25 }}>
                                        <TextInput onChangeText={this.searchHotelHadle} style={{ placeholderTextColor: '#BDC0C6', paddingLeft: 40 }} placeholder="Hotel Indonesia" />
                                    </View>
                                </View>
                                <View style={styles.headerIcon}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ComingSoon')}><Icon style={{ color: '#BDC0C6', marginLeft: 10 }} name="notifications"></Icon></TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ComingSoon')}><Icon style={{ color: '#BDC0C6', marginLeft: 10 }} name="heart"></Icon></TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ComingSoon')}><Icon style={{ color: '#BDC0C6', marginLeft: 10 }} name="mail"></Icon></TouchableOpacity>
                                </View>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                <View style={styles.comp2Wrap}>
                                    <TouchableOpacity onPress={() => this.sortHotelHadle('')} style={{ marginRight: 8, width: 96, backgroundColor: '#57DBE9', justifyContent: 'center', height: 37, borderRadius: 8, paddingLeft: 8 }}>
                                        <Text style={{ color: 'white', fontSize: 15 }}>All</Text>
                                    </TouchableOpacity>
                                    {hotels.map(hotel => (
                                        <TouchableOpacity onPress={() => this.sortHotelHadle(`${hotel.city}`)} style={{ marginRight: 8, width: 96, backgroundColor: '#57DBE9', justifyContent: 'center', height: 37, borderRadius: 8, paddingLeft: 8 }}>
                                            <Text style={{ color: 'white', fontSize: 15 }}>{hotel.city}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.comp2}></View>
                    </View>
                    <View style={{ height: 450 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <FlatList
                                data={hotels}
                                renderItem={this.renderRow}
                                keyExtractor={(item) => item.id_hotel.toString()}
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}><Icon name="home" style={{ fontSize: 30, color: '#57DBE9' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#57DBE9' }}>Home</Text></TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('BookingList')}><Icon name="book" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Book</Text></TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('History')}><Icon name="alarm" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>History</Text></TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('ComingSoon')}><Icon name="mail" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Indox</Text></TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} onPress={() => this.props.navigation.navigate('User')}><Icon name="person" style={{ fontSize: 30, color: '#BDC0C6' }} /><Text style={{ fontSize: 10, marginTop: -5, color: '#BDC0C6' }}>Account</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        hotels: state.hotels.hotels
    }
}

export default connect(mapStateToProps)(Home);