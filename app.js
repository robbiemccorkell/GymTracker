/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from './actions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  static propTypes = {
    currentUser: React.PropTypes.object,
    loginUser: React.PropTypes.func
  }

  render() {
    const {username, password} = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text>{this.props.errorMessage}</Text>
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({username: text})}
          value={this.state.username}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({password: text})}
          value={this.state.password}
        />
        <TouchableHighlight
          onPress={() => this.props.loginUser(username, password)}
        >
          <Text>LOGIN</Text>
        </TouchableHighlight>
        {this.props.currentUser.id &&
          <Text style={styles.instructions}>
            {`Logged in as ${this.props.currentUser.name}`}
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (({ users, ui }) => ({
  currentUser: users.currentUser,
  errorMessage: ui.errorMessage
}));

export default connect(mapStateToProps, { loginUser })(App);
