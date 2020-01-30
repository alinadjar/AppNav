
import React from "react";
import { AppRegistry, Alert } from "react-native";
import {
    Container, Header, Left, Body, Title,
    Card, CardItem, Content, Right, Icon, Button, Text
} from "native-base";
//import { StackNavigator } from "react-navigation";

import EditScreenOne from "./EditScreenOne.js";


class Profile extends React.Component {

    componentDidMount() {
        Alert.alert("No Users Found", "Oops, Looks like you are not signed in");
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>Show User profiles here</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Button full rounded primary
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("EditScreenOne")}>
                        <Text>Goto EditScreen One</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}


Profile.navigationOptions = ({ navigation }) => ({
    header: (props) => (
        <Header>
            <Left>
                <Button transparent onPress={() => {alert('Hey....'); 
                            //this.props.navigation.navigate("DrawerOpen");
                            props.navigation.openDrawer();} }>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Profile</Title>
            </Body>
            <Right />
        </Header>
    )
});

export default Profile;