import React, { Component } from 'react';
import {
    StyleSheet,
    View, Image
} from 'react-native';
import {
    Container, Header, Content, Footer, FooterTab,
    Button, Icon, Text, Badge,
    Item, Input, Form, Label, Picker, Textarea, 
    Radio, ListItem, Left, Right, Body
} from 'native-base';


class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/images/setting.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}


class UserScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }


    onValueChange2 = (value) => {
        this.setState({
            selected2: value
        });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('userID', 'N/A'),
            //headerTitle: () => <LogoTitle />,
            //headerLeft: () => <LogoTitle />,
            headerRight: () => <LogoTitle />,
            // headerRight: () => (
            //     <Button
            //         onPress={() => alert('This is a button!')}
            //         title="Info"
            //         color="#fff"
            //     />
            // ),
        };
    };



    render() {

        return (
            <Container>
                <Header />
                <Content>
                    <View style={{
                        backgroundColor: '#FFF',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Text style={styles.titleText}>User Screen ....</Text>
                        <Button onPress={() => this.props.navigation.navigate('ABOUT')}>
                            <Text>go to About </Text>
                        </Button>
                    </View>
                    {/* <View style={{ padding: 8 }}> */}
                    <Text>Form Elements:</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input placeholder="Username" />
                        </Item>
                        <Item stackedLabel>
                            <Label>National Code</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel last>
                            <Input placeholder="Password" />
                        </Item>
                        <Item regular style={{ marginTop: 15, marginBottom: 15 }}>
                            <Input placeholder='Regular Textbox' />
                        </Item>
                        <Item rounded>
                            <Input placeholder='Rounded Textbox' />
                        </Item>
                        <Item>
                            <Icon active name='home' />
                            <Input placeholder='Icon Textbox' />
                        </Item>
                        <Item>
                            <Input placeholder='Icon Alignment in Textbox' />
                            <Icon active name='swap' />
                        </Item>

                        <Item success>
                            <Input placeholder='Textbox with Success Input' />
                            <Icon name='checkmark-circle' />
                        </Item>
                        <Item error>
                            <Input placeholder='Textbox with Error Input' />
                            <Icon name='close-circle' />
                        </Item>
                        <Item disabled>
                            <Input disabled placeholder='Disabled Textbox' />
                            <Icon name='information-circle' />
                        </Item>

                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                // onValueChange={this.onValueChange2.bind(this)}
                                onValueChange={this.onValueChange2}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Textarea" />
                        <Button block success>
                            <Text>Success</Text>
                        </Button>

                    </Form>

                    <ListItem>
                        <Left>
                            <Text>Daily Stand Up</Text>
                        </Left>
                        <Right>
                            <Radio color={"#F52"} selected={false} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Discussion with Client</Text>
                        </Left>
                        <Right>
                            <Radio  selected={true} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Discussion with Client</Text>
                        </Left>
                        <Right>
                            <Radio  selectedColor='#F95' selected={true} />
                        </Right>
                    </ListItem>
                    {/* </View> */}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active badge vertical>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default UserScreen;