import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Content, Picker, Form, Icon } from "native-base"

class Tab3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Content>
                    <Form>
                        <Picker
                            // note
                            enabled={true}
                            mode="dropdown"
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            style={{ width: '50%' }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select your SIM"
                            textStyle={{ color: "#5cb85c" }}
                            itemStyle={{
                                backgroundColor: "#d3d3d3",
                                marginLeft: 0,
                                paddingLeft: 10
                            }}
                            itemTextStyle={{ color: '#788ad2' }}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default Tab3;
