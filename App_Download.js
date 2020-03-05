import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, PermissionsAndroid, Image } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';




export async function request_storage_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'ReactNativeCode Storage Permission :)  Ha...Ha..HA..',
        'message': 'ReactNativeCode App needs access to your storage to download Photos.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      Alert.alert("Storage Permission Granted.");
    }
    else {

      Alert.alert("Storage Permission Not Granted");

    }
  } catch (err) {
    console.warn(err)
  }
}


class App extends Component {

  async componentDidMount() {
    await request_storage_runtime_permission()
  }


  downloadImage = () => {
    var date = new Date();
    var image_URL = 'http://tigmis.tabarok.ir/sites/all/themes/adp/images/people/Ali_Nadjar.jpg';
    var ext = this.getExtention(image_URL);
    ext = "." + ext[0];
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;

    console.log(PictureDir);
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: PictureDir + "/image_" + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
        description: 'Image'
      }
    }
    config(options).fetch('GET', image_URL).then((res) => {
      console.log(res);
      Alert.alert("Image Downloaded Successfully.");
    });
  }


  getExtention = (filename) => {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
      undefined;
  }


  downloadAPK = () => {
    const android = RNFetchBlob.android;
    const downloadUrl = "http://192.168.87.61:7477/TJS.apk";
    const { config, fs } = RNFetchBlob;
    //RNFetchBlob.config({
    config({
      appendExt: 'apk',
      timeout: 180000,
      addAndroidDownloads: {
        notification: true,
        useDownloadManager: true,
        mime: 'application/vnd.android.package-archive',
        mediaScannable: true,
        title: "Ha..Ha..Ha..",
        description: ';)',
        path: fs.dirs.PictureDir
      }
    })
      .fetch("GET", downloadUrl)
      .then(res => {
        console.log(res);

        if (res.respInfo.timeout) {
          Linking.openURL(downloadUrl)
          return;
        }
        android.actionViewIntent(res.path(), 'application/vnd.android.package-archive')
      })
      .catch(error => {
        console.log(error);
        Linking.openURL(downloadUrl)
      });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={{ borderWidth: 1 }}>
          <Image source={{ uri: 'http://tigmis.tabarok.ir/sites/all/themes/adp/images/people/Ali_Nadjar.jpg' }}
            style={{ width: 200, height: 300 }} />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.downloadImage} >
          <Text style={styles.text}>Click To Download Above Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#F55',}]} onPress={this.downloadAPK} >
          <Text style={styles.text}>Click To Download APK</Text>
        </TouchableOpacity>

      </View>
    );
  }



}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button: {

    width: '80%',
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#2E7D32',
    borderRadius: 7,
    margin: 10
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }
});


export default App;