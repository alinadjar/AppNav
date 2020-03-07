import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Image, Button,
  Platform, ToastAndroid, ProgressBarAndroid
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import { AlertModal } from './src/utils/modals/AlertModal';




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

  state = {
    progress: 0,
    loading: false,
    modal_Alert_Show: false,
    modalBodyText: '-'
  }

  async componentDidMount() {
    //await request_storage_runtime_permission()
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
    const downloadUrl = "http://192.168.87.61:7477/TJS.apk"; //"https://app.733.ir/download/asanpardakht.apk";
    const { config, fs } = RNFetchBlob;

    console.log(`now inside downloadAPK, from ${downloadUrl}`);


    this.setState({
      modal_Alert_Show: true,
      progress: 0,
      loading: true
    });


    //RNFetchBlob.config({
    config({
      // appendExt: 'apk',
      // timeout: 180000,
      // addAndroidDownloads: {
      //   notification: true,
      //   useDownloadManager: true,
      //   mime: 'application/vnd.android.package-archive',
      //   mediaScannable: true,
      //   title: "Ha..Ha..Ha..",
      //   description: ';)',
      //   path: fs.dirs.PictureDir
      // }
      path: fs.dirs.DownloadDir + "/A.apk",
      fileCache: true
    })
      .fetch("GET", downloadUrl)
      .progress({ interval: 500 }, (received, total) => {
        console.log('progress', received / total);
        console.log('========> ' + (received / total) * 100);
        //alert((received / total) * 100);


        this.setState({
          progress: Math.round((received / total) * 10000) / 100,
          modalBodyText: this.state.modalBodyText + '*'
        })
      })
      .then(res => {
        console.log(res);
        this.setState({
          modal_Alert_Show: false,
          progress: 100,
          loading: false
        });

        ToastAndroid.showWithGravity(
          "Your file has been downloaded to downloads folder!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );

        if (res.respInfo.timeout) {
          Linking.openURL(downloadUrl)
          return;
        }
        android.actionViewIntent(res.path(), 'application/vnd.android.package-archive')
      })
      .catch(error => {
        console.log(error);
        this.setState({ modal_Alert_Show: false });
        alert(error);
        Linking.openURL(downloadUrl)
      });
  }


  async downloadFile() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message: "App needs access to memory to download the file "
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.downloadAPK();
      } else {
        Alert.alert(
          "Permission Denied!",
          "You need to give storage permission to download the file"
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }


  downloadAPK2 = () => {
    const android = RNFetchBlob.android;
    const downloadUrl = "https://app.733.ir/download/asanpardakht.apk";//"http://192.168.87.61:7477/TJS.apk"; 
    const { config, fs } = RNFetchBlob;

    let dirs = RNFetchBlob.fs.dirs;
    const filePath = `${dirs.DocumentDir}`;
    const fileName = 'test';

    console.log(`now inside downloadAPK2, from ${downloadUrl}`);

    this.setState({ modal_Alert_Show: true });

    //RNFetchBlob.config({
    config({
      appendExt: 'apk',
      timeout: 120000,
      path: `${filePath}/${fileName}`,
      fileCache: true,
      addAndroidDownloads: {
        notification: true,
        useDownloadManager: true,
        mime: 'application/vnd.android.package-archive',
        mediaScannable: true,
        title: "Ha..88..Ha..",
        description: ';)',
        path: fs.dirs.PictureDir
      }
    })
      .fetch("GET", downloadUrl)
      // listen to download progress event, every 10%
      // .progress({ count: 10 }, (received, total) => {
      //   console.log('progress', received / total)
      // })
      .progress({ interval: 500 }, (received, total) => {
        console.log('progress', received / total);
        console.log('========> ' + (received / total) * 100);
        //alert((received / total) * 100);
        this.setState({
          progress: (received / total) * 100,
          modalBodyText: this.state.modalBodyText + '*'
        })
      })
      .then(res => {

        this.setState({
          progress: 0,
          //modal_Alert_Show: true
        });


        this.setState({ modal_Alert_Show: false });

        // RNFetchBlob.fs.exists(res.path()).then(exist=>{
        //     console.log(`file ${exist ? '' : 'not'} exists`)
        // }).catch(
        //     err=>console.log('error while checking existance',err)
        // );
        if (Platform.OS === 'ios') {
          RNFetchBlob.ios.openDocument(res.path());
        } else {
          // RNFetchBlob.android.actionViewIntent(res.path(), "application/pdf");
          android.actionViewIntent(res.path(), 'application/vnd.android.package-archive');
        }


        // console.log(res);

        // if (res.respInfo.timeout) {
        //   Linking.openURL(downloadUrl)
        //   return;
        // }
        // android.actionViewIntent(res.path(), 'application/vnd.android.package-archive');
      })
      .catch((errorMessage, statusCode) => {
        console.log("error with downloading file", errorMessage);
        console.log(error);
        this.setState({ modal_Alert_Show: false });
        //Linking.openURL(downloadUrl)
      });
  }




  close_AlertModal_callback_btnReturn = () => {
    this.setState({ modal_Alert_Show: false });
  }


  close_AlertModal_callback = () => {
    this.setState({ modal_Alert_Show: false });
  }

  render() {
    return (
      <>
        <View style={styles.MainContainer}>

          <View style={{ borderWidth: 1 }}>
            <Image source={{ uri: 'http://tigmis.tabarok.ir/sites/all/themes/adp/images/people/Ali_Nadjar.jpg' }}
              style={{ width: 200, height: 300 }} />
          </View>

          <TouchableOpacity style={styles.button} onPress={this.downloadImage} >
            <Text style={styles.text}>Click To Download Above Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#F55', }]} onPress={this.downloadAPK} >
            <Text style={styles.text}>Click To Download APK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#F55', }]} onPress={this.downloadAPK2} >
            <Text style={styles.text}>Download APK with Progress</Text>
          </TouchableOpacity>


          <Button onPress={() => this.downloadFile()} title="Download" />


          {this.state.loading ? (
            <View>
              <ProgressBarAndroid
                styleAttr="Large"
                indeterminate={false}
                progress={this.state.progress}
              />
              <Text>{this.state.progress}</Text>
            </View>

          ) : null}


        </View>

        <AlertModal
          modalVisible={this.state.modal_Alert_Show}
          returnTXT='OK'
          bodyTXT={this.state.modalBodyText}
          logoType='CONFIRM'
          logoTXT='SUCCESS'
          btnReturnCallback={this.close_AlertModal_callback_btnReturn}
          closeCallback={this.close_AlertModal_callback}
        />

      </>
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