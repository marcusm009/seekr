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

import { MonoText } from '../components/StyledText';

var markers = require('../assets/markers.json');

export default class Map extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
  };

  constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        markers: [],
      };

    }

  fetchMarkerData() {
    this.setState({
      isLoading: false,
      markers: markers.markerList
    });
  }

  componentDidMount() {
    this.fetchMarkerData();
  }

  onLocationChange = e => {
    latitude = e.nativeEvent.coordinate.latitude;
    longitude = e.nativeEvent.coordinate.longitude;

    function deg2rad(deg) {
      return deg / 360 * 2 * Math.PI;
    }

    var R = 6371e3; // meters
    var φ1 = deg2rad(latitude);

    console.log('', latitude, longitude);
    for (var i = 0; i < markers.markerList.length; i++) {
      var element = markers.markerList[i];

      var φ2 = deg2rad(element.latitude);
      var Δφ = deg2rad(element.latitude-latitude);
      var Δλ = deg2rad(element.longitude-longitude);

      var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;

      console.log('Element ' + element.locationName + ' ' + d + 'm away');

      if (d < 100 || d < 15.2) { // 50 feet
        console.log('Within 50ft, notifying parent');
        this.props.onNearingChallenge(element);
        break;
      }
    }
  };

  render() {
    const { hasLocationPermission } = this.state;
    if (hasLocationPermission === null) {
      return <View />;
    } else if (hasLocationPermission === false) {
      return <Text>No access to location</Text>;
    } else {
      console.log(JSON.stringify(this.state.location));
      return (
        <MapView
            style={{ flex: 1 }}
            showsUserLocation
            region={{
              latitude: 33.7746151,
              longitude: -84.3960265,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onUserLocationChange={this.onLocationChange}
            provider={'google'}
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

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
