import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import { RNCamera } from 'react-native-camera';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      torchOn: false
    }
  }

  onBarCodeRead = (e) => { Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type); }

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
    } catch (err) {
      // console.log('err: ', err);
      console.log('Error insode catch: '+ err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          //torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => this.camera = cam}
        //aspect={Camera.constants.Aspect.fill}
        >
          <Text style={{
            backgroundColor: 'white'
          }}>BARCODE SCANNER</Text>
          <View style={styles.captureContainer}>
            <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
              {/* <Icon style={styles.iconCamera}>camera</Icon> */}
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
            <Image style={styles.cameraIcon} source={this.state.torchOn === true ? require('./src/images/flasher_on.png') : require('./src/images/flasher_off.png')} />
          </TouchableOpacity>
        </View>
      </View>)
  }

  handleTourch = (value) => {
    if (value === true) {
      this.setState({ torchOn: false });
    } else {
      this.setState({ torchOn: true });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth:1,
    borderColor: '#F00'
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40
  },
  bottomOverlay: {
    position: "absolute",
    width: "100%",
    flex: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});


export default App;