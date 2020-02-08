

import React, { Component } from 'react';
import {  
  View,
  Text,  
  StyleSheet
} from 'react-native';


class ArticleComponent extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Now inside Articles</Text>      
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ArticleComponent;
