import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

export default class ResquestPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showText: ''
    }
  }
  render() {
    return (<View style={styles.container}>
        <Text style={styles.welcome}>fetch 使用</Text>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            onChangeText={text=>{
              this.searchKey = text
            }}
          />
          <Button
            title='获取'
            onPress={() => {
              this.loadData()
            }}
          />
        </View>
        <Text>
          {this.state.showText}
        </Text>
      </View>
    );
  }
  loadData = () => {
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`
    fetch(url).then((response) => {
      if (response.ok) {
        return response.text()
      }
      throw new Error('Network response was not ok')
    }).then((res) => {
      this.setState(() => ({
        showText: res
      }))
    }).catch((err) => {
      this.setState(() => ({
        showText: err
      }))
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 50,
    fontSize: 30,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  }
})
