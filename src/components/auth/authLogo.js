import React, { Component } from 'react';
import { View, Image } from 'react-native';

import  logo from '../../assets/images/nba_login_logo.png';

const LogoComponent = () => (
    <View style={{ alignItems: 'center'}}>
        <Image 
            source={logo}
            resizeMode={'contain'}
            style={{
                width: 170,
                height:150
            }}
        />
    </View>
);
   

export default LogoComponent;
