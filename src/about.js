import React, { Component } from "react";
import {
    StyleSheet,
    View,
} from 'react-native';

import {
    Container, Header, Title, Content,
    Button, Left, Right, Body, Icon, Text
} from 'native-base';


class About extends Component {

    render() {
        return (
            <Container  style={{backgroundColor: "#87cefa"}}>
                {/* <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header> */}
                {/* <Header noLeft noShadow> */}
                {/* <Header transparent> */}
                <Header  style={{backgroundColor: '#555'}}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'#F99'}}>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                        <Button transparent>
                            <Icon name='heart' style={{color:'red'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Details Screen</Text>
                        <Button onPress={() => this.props.navigation.navigate('ACCORD1')}>
                            <Text>go to ACCORD1 </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default About;