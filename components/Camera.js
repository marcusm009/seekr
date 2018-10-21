import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import axios from 'axios';
import key from '../assets/apikey';
import {
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';

import SuccessMessage from './SuccessMessage';
import FailureMessage from './FailureMessage';
import ToHuntButton from './ToHuntButton';

export default class CameraComponent extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    success: false,
    failure: false,
  };

  async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    }

  takePicture = () => {
    console.log('takephoto');
    if (this.camera) {
      console.log('taking photo');
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = async photo => {
    console.log('photo saved', photo);
    const data = new FormData();
    data.append('image1', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'img1.jpg'
    });
    data.append('image2', 'https://raw.githubusercontent.com/marcusmills0926/cubr/josh/_images/1.jpg');

    axios.post('https://api.deepai.org/api/image-similarity', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Api-Key': key,
      },
    }).then(function (response) {
      console.log(response);
      this.setState({success: response.distance <= 25 ? true : false});
      this.setState({failure: response.distance <= 25 ? false : true})
    }).catch(function (error) {
      console.log(error);
    });
  };

  renderMessage() {
    if(this.state.success) {
      return <SuccessMessage creatorMessage={'TODO: get creator message'}/>;
    } else if(this.state.failure) {
      return <FailureMessage/>;
    }
    return null;
  }

  render() {
    let message = this.renderMessage();
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return (<Text>No access to camera</Text>);
    } else {
      return (
        <View style={{ flex: 1 }}>
          <ToHuntButton huntImg={this.props.huntImg}/>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <View style={{ flex: 0.4 }}>
                <TouchableOpacity
                  onPress={this.takePicture}
                  style={{ alignSelf: 'center' }} >
                  <Ionicons name="ios-radio-button-on" size={70} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            {message}
          </Camera>
        </View>
      );
    }
  }
}
