import React from 'react';
import LottieView from 'lottie-react-native';

export default class BarterAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/2056-gagaha.json')}
      style={{width:"90%",marginBottom:5}}
      autoPlay loop />
    )
  }
}