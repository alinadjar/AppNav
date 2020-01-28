import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Text, Body,
    Icon, Right, Left, Thumbnail, Button
} from "native-base";

class CardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Card>
                        {/* <Card transparent> */}
                        <CardItem header bordered>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    NativeBase is a free and open source framework that enable
                                    developers to build
                                    high-quality mobile apps using React Native iOS and Android
                                    apps
                                    with a fusion of ES6.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                    <Card transparent>
                        <CardItem header button onPress={() => alert("This is Card Header")}>
                            <Text style={{color:'red'}}>Click Here</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("This is Card Body")}>
                            <Body>
                                <Text>
                                    Click on any carditem
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => alert("This is Card Footer")}>
                            <Text>Click Here</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon active name="logo-googleplus" style={{color:'red'}}/>
                            <Text>Google Plus</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon name="logo-facebook" style={{color:'blue'}}/>
                            <Text>Facebook</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('./assets/images/benz.png')} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.picsum.photos/id/650/500/300.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('./assets/images/benz.png')} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('./assets/images/sample.jpg')} style={{ height: 200, width: '100%', flex: 1 }} />
                                <Text>
                                    On this week’s episode, Prashanth Chandrasekar and Sara Chipps share ideas for integrating
                                    the technical expertise from Stack Overflow with the wide range of experts
                                     across our Stack Exchange network
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}


export default CardScreen;