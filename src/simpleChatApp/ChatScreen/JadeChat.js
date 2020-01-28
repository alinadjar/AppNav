import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import {
    Container, Body, Content, Header, Left, Right, Icon, Title,
    Input, Item, Label, Button, Text
} from "native-base";
//import HomeScreen from "../HomeScreen";

class LucyChat extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Jade Chat</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Nine Chat</Label>
                        <Input />
                    </Item>
                    
                </Content>
            </Container>
        );
    }
}

export default LucyChat;