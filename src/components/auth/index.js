import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator
} from 'react-native';

import LOGO from './authLogo';
import { ScrollView } from 'react-native-gesture-handler';
import AuthForm from './authForm';
import { getTokens, setTokens } from '../../utils/misc';



import { connect } from 'react-redux';
import { autoSignIn } from '../../iRedux/actions/user_actions';
import { bindActionCreators } from 'redux';





class Auth extends Component {

  state = {
    isLoading: false
  }



  goNext = () => {
    this.props.navigation.navigate('App');
  }

  componentDidMount() {
    getTokens((value) => {
      if (value[0][1] === null) {
        this.setState({ loading: false })
      } else {
        this.props.autoSignIn(value[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({ loading: false })
          } else {
            setTokens(this.props.User.auth, () => {
              this.goNext();
            })
          }
        })
      }
    })
  }
  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
    else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <Text>Now inside Auth</Text>
            <LOGO />
            {/* <Button
              title="go"
              onPress={
                () => this.props.navigation.navigate('App')
              }>
            </Button> */}
            <AuthForm goNext={this.goNext} />
          </View>
        </ScrollView>
      );
    }

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
    backgroundColor: '#1d428a',
    padding: 50
  },
  loading: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }

});



const mapStateToProps = (state) => {
  return {
    User: state.User
  }
}

// const mapDispatchToProps = (dispatch) =>({
//     signIn: () => dispatch(signIn()),
//     signUp: () => dispatch(signUp())
// })


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ autoSignIn }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
