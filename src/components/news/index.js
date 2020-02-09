

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Moment from 'moment';


import { connect } from 'react-redux';
import { getNews } from '../../iRedux/actions/news_action';

import Ionicon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';



class News extends Component {


  componentDidMount() {
    this.props.dispatch(getNews());
  }


  renderArticles = (news) => {
    news.articles ?
      news.articles.map((item, i) => (

        <TouchableOpacity 
          key={i}
          onPress={ () => this.props.navigation.navigate('Article', { ...item })}
        >
          <View style={styles.cardContainer}>
            <View>
              <Image
                style={{ height: 150, justifyContent: 'space-around' }}
                source={{ uri: `${item.image}` }}
                resizeMode='cover'
              />
            </View>
            <View style={styles.contentCard}>
              <Text style={styles.titleCard}>{item.title}</Text>
              <View style={styles.bottomCard}>
                <Text style={styles.bottomCardTeam}>{item.team} - </Text>
                <Text style={styles.bottomCardText}>Posted at {Moment(item.date).format('d MMMM')}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))
      : null
  }


  render() {

    // const MyButton = (
    //   <Icon.Button
    //     name="facebook"
    //     backgroundColor="#3b5998"
    //     onPress={this.loginWithFacebook}
    //   >
    //     Login with Facebook
    //   </Icon.Button>
    // );


    return (
      <ScrollView style={{ backgroundColor: '#F0F0F0' }}>                  
          {/* <Ionicon name='ios-brush' size={40} color='#F00' /> */}
          {this.renderArticles(this.props.News)}      
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#dddddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
  },
  contentCard: {
    borderWidth: 1,
    borderColor: '#dddddd'
  },
  titleCard: {
    fontFamily: 'Roboto-Bold',
    color: '#232323',
    fontSize: 16,
    padding: 10
  },
  bottomCard: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    padding: 10
  },
  bottomCardTeam: {
    fontFamily: 'Roboto-Bold',
    color: '#828282',
    fontSize: 12
  },
  bottomCardText: {
    fontFamily: 'Roboto-Light',
    color: '#828282',
    fontSize: 12
  }
});


const mapStateToProps = (state) => {
  console.log('Now inside mapStateToProps:');
  console.log(state);
  return {
    News: state.News
  }
}

export default connect(mapStateToProps)(News);
