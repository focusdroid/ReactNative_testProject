import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage
} from 'react-native';

const KEY ='save_key'
export default class AsyncStoragePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showText: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>AsyncStorage 使用</Text>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            onChangeText={text=>{
              this.value = text
            }}
          />
        </View>
        <View style={styles.button}>
          <Text
            onPress={() => {
              this.doSave()
            }}
          >存储</Text>
          <Text
            onPress={() => {
              this.doRemove()
            }}
          >删除</Text>
          <Text
            onPress={() => {
              this.getDatas()
            }}
          >获取</Text>
        </View>
          <Text>
          {this.state.showText}
        </Text>
      </View>
    )
  }
  doSave = () => {
    // 用法一
    AsyncStorage.setItem(KEY, this.value, error => {
      error && console.log(error.toString())
    } )
    // 用法二
    AsyncStorage.setItem(KEY, this.value).catch(error => {
      error && console.log(error.toString())
    })
    // 用法三
    try {
      AsyncStorage.setItem(KEY, this.value)
    } catch {
      error && console.log(error.toString())
    }
  }
  doRemove = ()=> {
    // 用法一
    AsyncStorage.removeItem(KEY, error => {
      error && console.log(error.toString())
    })
    // 用法二
    /*AsyncStorage.removeItem(KEY).catch(error => {
      error && console.log(error.toString())
    })
    // 用法三
    try {
      AsyncStorage.removeItem(KEY)
    } catch (error) {
      error && console.log(error.toString())
    }*/
  }
  getDatas = ()=> {
    // 用法一
    AsyncStorage.getItem(KEY, (error, value) => {
      this.setState(() => ({
        showText: value
      }))
    })
    // 用法二
    AsyncStorage.getItem(KEY).then(value => {
      this.setState(() => ({
        showText: value
      }))
      console.log(value)
    }).catch(error => {
      error && console.log(error.toString())
    })
    // 用法三
    try {
      const value = AsyncStorage.getItem(KEY)
      this.setState(() => ({
        showText: value
      }))
    } catch(error) {
      error && console.log(error.toString())
    }
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
    height: 100,
    fontSize: 30,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  }
})
