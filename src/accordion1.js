
import React, { Component } from 'react';
import {
    Container, Header, Title, Content, Footer, FooterTab,
    Button, Left, Right, Body, Icon, Text, Accordion
} from 'native-base';


//-----------------------------

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];




class Accordion1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <Text>About Screen ....</Text>
                    <Accordion dataArray={dataArray} expanded={0} style={{ width: '100%' }}
                        headerStyle={{ backgroundColor: "#b7daf8" }}
                        contentStyle={{ backgroundColor: '#F55' }}
                        icon="add"
                        expandedIcon="remove"
                        iconStyle={{ color: "green" }}
                        expandedIconStyle={{ color: "red" }}
                    />
                    <Text>Some Text Here ....</Text>
                    <Button onPress={() => this.props.navigation.navigate('CARD')}>
                        <Text>go to CARD </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Accordion1;