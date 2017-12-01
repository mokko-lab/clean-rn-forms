

import React, {Component} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class AnimatedLoader extends Component {

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView zIndex={9999} ref={animation => {this.animation = animation; }} loop={true} source={require('../Assets/preloader')} />
    )
  }
}
