import React, { Component } from 'react'
//import { Text, View } from 'react-native'
import {
    Container, Header, Content, Thumbnail, Text,
    Button, Toast, H1, H2, H3
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

class Tab2 extends Component {
    render() {
        return (
            <Container>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Content>
                        <Text style={{ marginTop: 10 }}>Square Thumbnail</Text>
                        {/* <Thumbnail square small source={{ uri: uri }} /> */}
                        <Thumbnail square small source={require('../assets/images/profile.jpg')} />
                        <Thumbnail square source={require('../assets/images/profile.jpg')} />
                        <Thumbnail square large source={require('../assets/images/profile.jpg')} />
                        <Text>Circular Thumbnail</Text>
                        <Thumbnail small source={require('../assets/images/profile.jpg')} />
                        <Thumbnail source={require('../assets/images/profile.jpg')} />
                        <Thumbnail large source={require('../assets/images/profile.jpg')} />


                        <Button onPress={() => Toast.show({
                            text: 'Wrong password!',
                            buttonText: 'Okay',
                            duration: 3000,
                            textStyle: { color: 'orange' },
                            buttonTextStyle: { color: 'red' },
                            buttonStyle: { backgroundColor: "#DDD", border: 1, borderColor: 'red' }
                        })}>
                            <Text>Toast</Text>
                        </Button>

                        <Button
                            onPress={() =>
                                Toast.show({
                                    text: "Wrong password!",
                                    buttonText: "Ok",
                                    position: "top"
                                })}
                        >
                            <Text>Top Toast</Text>
                        </Button>

                        <Button success
                            onPress={() =>
                                Toast.show({
                                    text: "Wrong password!",
                                    buttonText: "Okay",
                                    type: "success"
                                })}
                        >
                            <Text>Success Toast</Text>
                        </Button>
                        <Button warning
                            onPress={() =>
                                Toast.show({
                                    text: "Wrong password!",
                                    buttonText: "Okay",
                                    type: "warning",
                                    position: "top"
                                })}
                        >
                            <Text>Warning Toast</Text>
                        </Button>
                        <Button danger
                            onPress={() =>
                                Toast.show({
                                    text: "Wrong password!",
                                    buttonText: "Okay",
                                    type: "danger",
                                    position: "top"
                                })}
                        >
                            <Text>Danger Toast</Text>
                        </Button>

                        <Text style={{ marginTop: 30}}>Default</Text>
                        <H1>Typography H1 </H1>
                        <H2>Typography H2 </H2>
                        <H3>Typography H3 </H3>
                        
                    </Content>
                </ScrollView>
            </Container >
        )
    }
}

export default Tab2;
