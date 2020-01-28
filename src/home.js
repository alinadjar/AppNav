import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon, Text, ActionSheet, Grid, Col, Row,
  Item, Input, Spinner
} from 'native-base';


//var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;




class HomeScreen extends Component {

  // static navigationOptions = {
  //     title: 'Home :)'
  // };

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <Button onPress={() => this.props.navigation.navigate('USER')}>
          <Text>go to Home </Text>
        </Button>
      ),
    };
  };


  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder>
          <View style={{
            backgroundColor: '#FFF',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={styles.titleText}>Home Screen ....</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Button onPress={() => this.props.navigation.navigate('USER')}>
                <Text>go to User </Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('LIST')}>
                <Text>go to List </Text>
              </Button>
              <Button onPress={ () => this.props.navigation.navigate('MultiTAB')}>
                <Text>MultiTAB</Text>
              </Button>
            </View>
            <Button style={{ marginTop: 30 }}
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Testing ActionSheet"
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )}
            >
              <Text>Actionsheet</Text>
            </Button>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Icon name='home' />
            <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 20, color: 'red' }} />
            <Icon type="FontAwesome" name="home" />
            <Icon type="FontAwesome" name="plane" style={{ color: 'green' }} />
            <Icon type="Ionicons" name="ios-airplane" />
            <Icon type="Entypo" name="paper-plane" />
            <Icon type="AntDesign" name="skype" style={{ fontSize: 40, color: '#59F' }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Spinner />
            <Spinner color='red' />
            <Spinner color='green' />
            <Spinner color='blue' />
            <Spinner color='#F59814' />
          </View>

          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200, width: '30%' }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200, width: '70%' }}></Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#445D00', height: 20 }}></Col>
            <Col style={{ backgroundColor: '#44CE00', height: 20 }}></Col>
          </Grid>
          <Grid>
            <Row style={{ backgroundColor: '#F99', height: 50 }}></Row>
            <Row style={{ backgroundColor: '#99F', height: 50 }}></Row>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#000', height: 100 }}></Col>
            <Col style={{ height: 100 }}>
              <Row style={{ backgroundColor: '#FF0', height: 50 }}></Row>
              <Row style={{ backgroundColor: '#F0F', height: 50 }}></Row>
            </Col>
          </Grid>

        </Content>
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

export default HomeScreen;