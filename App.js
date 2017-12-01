import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LineLoader from './Substance/LineLoader';
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
        {this.state.busy && <LineLoader /> }

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
