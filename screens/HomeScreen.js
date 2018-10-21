import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Constants, Location, WebBrowser, MapView, Permissions } from 'expo';
import Map from '../components/Map';
import Hunt from '../components/Hunt';
import CameraComponent from '../components/CameraComponent';

import { MonoText } from '../components/StyledText';

var markers = require('../assets/json/markers.json');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Seekr',
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 32,
    },
  };

  constructor(props) {
      super(props);

      this.state = {
        currentPage: 'map',
        currentChallenge: null,
      };

    }

  onNearingChallenge = challenge => {
    console.log('Got challenge', challenge);
    if(this.state.currentPage != 'hunt') {
      this.setState({
        currentPage: 'hunt',
        currentChallenge: challenge,
      });
    }
  }

  showMap = () => {
    if(this.state.currentPage != 'map') {
      this.setState({
        currentPage: 'map',
      });
    }
  }

  render() {
    const { hasLocationPermission } = this.state;
    if (hasLocationPermission === null) {
      return <View />;
    } else if (hasLocationPermission === false) {
      return <Text>No access to location</Text>;
    } else {
      return (
        <MapView
            style={{ flex: 1 }}
            showsUserLocation
            region={{
              latitude: 33.7746151,
              longitude: -84.3960265,
              latitudeDelta: 0.0122,
              longitudeDelta: 0.0052,
            }}
        >
                {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
             const coords = {
                 latitude: marker.latitude,
                 longitude: marker.longitude,
             };

             const metadata = `Posted by: ${marker.user}`;

             return (
                 <MapView.Marker
                    key={index}
                    coordinate={coords}
                    title={marker.locationName}
                    description={metadata}
                 />
             );
          })}
        </MapView>
      );
    }
  }

  showCamera = () => {
    if(this.state.currentPage != 'camera') {
      this.setState({
        currentPage: 'camera',
      });
    }
  }

  render() {
    if (this.state.currentPage == 'map') {
      return (<Map
        onNearingChallenge={this.onNearingChallenge}
      ></Map>)
    } else if (this.state.currentPage == 'hunt') {
      return (<Hunt
        goToMap={this.showMap}
        goToCamera={this.showCamera}
        huntImg={this.state.currentChallenge.img}
      ></Hunt>)
    } else if (this.state.currentPage == 'camera') {
      return (<CameraComponent
          goToHunt={this.showHunt}
          challenge={this.state.currentChallenge}
          huntImg={this.state.currentChallenge.img}
        ></CameraComponent>)
    } else {
      console.log('Bad state ' + this.state.currentPage);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
