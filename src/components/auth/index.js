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
    isLoading: false// make true
  }



  goNext = () => {
    this.props.navigation.navigate('App');
  }

  componentDidMount() {
    getTokens((value) => {

      console.log('after receiving getTokens:');
      console.log(value); // logs the following:

      //     (4)[Array(2), Array(2), Array(2), Array(2)]
      //     0: Array(2)
      //         0: "@nba_app@token"
      //         1: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1OTc0MmQyNjlhY2IzNWZiNjU3YzBjNGRkMmM3YjcyYWEzMTRiNTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmJhLWFwcC1iOTYxYiIsImF1ZCI6Im5iYS1hcHAtYjk2MWIiLCJhdXRoX3RpbWUiOjE1ODExMzkwNDEsInVzZXJfaWQiOiJwd0UweXFyak9PZWl6S1ZFOVljTVRmQlJQdDEzIiwic3ViIjoicHdFMHlxcmpPT2VpektWRTlZY01UZkJSUHQxMyIsImlhdCI6MTU4MTE0MjA1OSwiZXhwIjoxNTgxMTQ1NjU5LCJlbWFpbCI6ImFsaS5uYWRqYXI5NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWxpLm5hZGphcjk1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HNfaKorPrwfD88CfNoNo4V_j_CaDiDaLC_KFP1v68VOs6d3kmMOUw_7KhGPcTdq4nZO9sBw5rxeb_ULpLnP_bWHJiPsUbs1Eh70iRZX2CvblFe3Yh4WVOMbvXGk389ZBScRhiUkAkptxSnQWfDQgOw3vz7sNuiX4gZ6ZHOk_1DBBUB81dMFvSBTgybgH17YuSM0yr-H9ARrIUxAPYaafsdPQXQzz4x5nN1_IbLcx76Qq5KFBWtjCu8snkQ3KGwZtUxczNQ29EWHSBq8H3dkHWg53qW-TXfO3ZB1U1HeVtrMvbvRpWbsszD-HdnYaDFUVI2e5-T19lW1MQkS0BiHTMA"
      //         length: 2
      //         __proto__: Array(0)
      //     1: Array(2)
      //         0: "@nba_app@refreshToken"
      //         1: "AEu4IL2fDO4ZTyf86MwrSb0_A-5BUbccW003GZ2pD1LOP9HPViMT9myYQNM4VJ-alzdRvaTJjv4qplFmzY-Hyf9UNMuFGwrFHUO2siPyZmZpMQsAKfQnMDFHv9tNtkUTlUp0I-AL_sThskcdLGsbTlOHUq-Q4wPCw7gf71x0tjQcn1WxZv-WlB9KltuAQcUOomK9mxg5x1V5iHEohu8OgzwwM3tCAyLYzA"
      //         length: 2
      //         __proto__: Array(0)
      //     2: Array(2)
      //         0: "@nba_app@expireToken"
      //         1: "1581142057598"
      //         length: 2
      //         __proto__: Array(0)
      //     3: Array(2)
      //         0: "@nba_app@uid"
      //         1: "pwE0yqrjOOeizKVE9YcMTfBRPt13"
      //         length: 2
      //         __proto__: Array(0)
      //         length: 4
      //         __proto__: Array(0)

      console.log('value[0][1] = '+value[0][1]);
      console.log(value[0][1] === null);
      console.log(value[0][1] === 'null');
      
      if (value[0][1] === null) {
        this.setState({ loading: false }) // means: show AuthForm
      } else {
        this.props.autoSignIn(value[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({ loading: false }) // means: show AuthForm
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
