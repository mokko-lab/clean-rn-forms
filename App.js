import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedLoader from './Substance/AnimatedLoader';
import Button from './Substance/Button';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      busy: false
    }
  }

  _buttonPressed = () => {
    this.setState({
      busy: true
    });
    setTimeout(() => {
      this.setState({
        busy: false
      })
    }, 4000);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.busy && <AnimatedLoader /> }

          <Text>Hi!</Text>
          <Button onPress={this._buttonPressed} disabled={this.state.busy} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
