import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AnimatedLoader from '../Substance/AnimatedLoader';
import Button from '../Substance/Button';

export default class Form extends React.Component {

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
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
          <Text style={styles.heading}>Log In</Text>
        </View>
        <View style={{flex: 3, flexDirection: 'column', justifyContent: 'flex-start'}}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <Button onPress={this._buttonPressed} disabled={this.state.busy} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center'
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ddd',
    borderRadius: 4
  }
});
