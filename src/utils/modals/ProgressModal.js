import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    Alert,
    ProgressBarAndroid
} from 'react-native';
import * as Progress from 'react-native-progress';



export class ProgressModal extends Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    Alert.alert('request to close modal');
                }}
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{
                        backgroundColor: '#FEE', width: '85%', borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                        borderTopRightRadius: 10, overflow: 'hidden'
                    }}>

                        <View style={{ alignItems: 'center', marginBottom: 10, paddingBottom: 20 }}>
                            <ProgressBarAndroid
                                styleAttr="Large"
                                color={'#14ae34'}
                                indeterminate={false}
                                progress={this.props.progress}
                            />
                            <Text style={{ fontSize:18, color:'#444', fontWeight:'bold'}}>{this.props.progress} %</Text>
                            {/* <Text style={{ fontSize: 22 }}>{this.props.bodyTXT}</Text> */}
                        </View>


                        <View style={{
                            flexDirection: 'row',
                            height: 80,
                            backgroundColor: '#9df972',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <View style={{
                                position: 'absolute',
                                top: 0,
                                width: 0,
                                height: 0,
                                backgroundColor: 'transparent',
                                borderStyle: 'solid',
                                borderTopWidth: 0,
                                borderRightWidth: 10,
                                //borderBottomWidth: 25,
                                borderTopWidth: 10,
                                borderLeftWidth: 10,
                                borderTopColor: '#FEE',
                                borderRightColor: 'transparent',
                                borderBottomColor: 'red',
                                borderLeftColor: 'transparent',
                                marginBottom: -10
                            }}>
                            </View>
                            <View style={{
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 5,
                                paddingBottom: 5
                            }}>

                                <Progress.Bar progress={this.props.progress / 100} width={200} color={'#14ae34'} />

                            </View>
                        </View>


                    </View>
                </View>
            </Modal>
        );
    }
}
