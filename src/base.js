

import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab,
    Button, Left, Right, Body, Icon, Text, Badge, ListItem, CheckBox, Fab
} from 'native-base';

class BaseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>

                <ScrollView style={{ width: '100%' }}>
                    <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >

                        <Text>Base Screen ....</Text>
                        <Button onPress={() => this.props.navigation.navigate('HOME')}>
                            <Text>go to Home </Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('CARD')}>
                            <Text>go to Card</Text>
                        </Button>
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Badge primary>
                            <Text>2</Text>
                        </Badge>
                        <Badge success>
                            <Text>2</Text>
                        </Badge>
                        <Badge info>
                            <Text>2</Text>
                        </Badge>
                        <Badge warning>
                            <Text>2</Text>
                        </Badge>
                        <Badge danger>
                            <Text>2</Text>
                        </Badge>
                        <Badge primary>
                            <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }} />
                        </Badge>
                        <Badge style={{ backgroundColor: 'black' }}>
                            <Text style={{ color: 'white' }}>1866</Text>
                        </Badge>
                        <Button light><Text> Light </Text></Button>
                        <Button primary><Text> Primary </Text></Button>
                        <Button success><Text> Success </Text></Button>
                        <Button transparent warning>
                            <Text>Warning</Text>
                        </Button>
                        <Button transparent danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button bordered danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button bordered dark>
                            <Text>Dark</Text>
                        </Button>
                        <Button rounded success>
                            <Text>Success</Text>
                        </Button>
                        <Button block light>
                            <Text>Light</Text>
                        </Button>
                        <Button block>
                            <Text>Primary</Text>
                        </Button>
                        <Button full success>
                            <Text>Success</Text>
                        </Button>
                        <Button iconLeft light>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                        <Button iconRight light>
                            <Text>Next</Text>
                            <Icon name='arrow-forward' />
                        </Button>
                        <Button iconLeft>
                            <Icon name='home' />
                            <Text>Home</Text>
                        </Button>
                        <Button iconLeft transparent primary>
                            <Icon name='beer' />
                            <Text>Pub</Text>
                        </Button>
                        <Button iconLeft dark>
                            <Icon name='cog' />
                            <Text>Settings</Text>
                        </Button>


                        <Button small primary>
                            <Text>Default Small</Text>
                        </Button>

                        <Button success>
                            <Text>Success Default</Text>
                        </Button>

                        <Button large dark>
                            <Text>Dark Large</Text>
                        </Button>
                        <Button disabled iconRight>
                            <Text>Icon Button</Text>
                            <Icon name="home" />
                        </Button>
                        <Button disabled rounded>
                            <Text>Rounded</Text>
                        </Button>

                        <ListItem>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>Daily Stand Up</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="red" />
                            <Body>
                                <Text>Discussion with Client</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="green" onPress={() => alert('')} />
                            <Body>
                                <Text>Finish list Screen</Text>
                            </Body>
                        </ListItem>

                    </Content>
                </ScrollView>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                        <View style={{ flex: 1 }}>
                            <Fab
                                active={this.state.active}
                                direction="up"
                                containerStyle={{}}
                                style={{ backgroundColor: '#5067FF' }}
                                position="bottomRight"
                                onPress={() => this.setState({ active: !this.state.active })}>
                                <Icon name="share" />
                                <Button style={{ backgroundColor: '#34A34F' }}>
                                    <Icon name="logo-whatsapp" />
                                </Button>
                                <Button style={{ backgroundColor: '#3B5998' }}>
                                    <Icon name="logo-facebook" />
                                </Button>
                                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                                    <Icon name="mail" />
                                </Button>
                            </Fab>
                        </View>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default BaseScreen;