import React, { Component } from 'react';
import {
    StyleSheet,
    View, Image
} from 'react-native';
import {
    Container, Header, Content,
    Button, Icon, Text, List, ListItem, Left, Right, Body, Switch, Thumbnail, Separator
} from 'native-base';


class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    {/* <List>
                        <ListItem>
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                    </List> */}
                    <List>
                        <ListItem itemDivider>
                            <Text>A</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Aaron Bennet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ali Connors</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>B</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bradley Horowitz</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bradley Horowitz</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bradley Horowitz</Text>
                        </ListItem>
                    </List>

                    <List style={{ marginTop: 60, backgroundColor: '#FDD' }}>
                        <ListItem itemHeader first>
                            <Text>COMEDY</Text>
                        </ListItem>
                        <ListItem >
                            <Text>Hangover</Text>
                        </ListItem>
                        <ListItem last>
                            <Text>Cop Out</Text>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text>ACTION</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Terminator Genesis</Text>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Simon Mignolet</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Nathaniel Clyne</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Dejan Lovren</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>


                    <List style={{ marginTop: 40 }}>
                        <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                            <Left>
                                <Text>Simon Mignolet</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>Nathaniel Clyne</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Dejan Lovren</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="airplane" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="bluetooth" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>


                    <List style={{ marginTop: 40, }}>
                        <ListItem avatar>
                            <Left>
                                {/* <Thumbnail source={{ uri: 'Image URL' }} /> */}
                                <Thumbnail source={require('./assets/images/profile.jpg')} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                {/* <Thumbnail source={{ uri: 'Image URL' }} /> */}
                                <Thumbnail source={require('./assets/images/profile.jpg')} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                                <Text note>1398/11/06</Text>
                                <Text note>1398/11/06</Text>
                            </Right>
                        </ListItem>

                        <List>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={require('./assets/images/profile.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text note numberOfLines={4}>Its time to build a difference . .</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        </List>
                    </List>


                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}



export default ListScreen;