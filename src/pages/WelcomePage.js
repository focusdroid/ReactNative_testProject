import React, {Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class WelcomePage extends Component {
  render() {
    return (<View style={styles.container}>
        <Image style={styles.imgage} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568913910593&di=858733c95f8e2f8b5807592772a9f907&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd02339d2b88b60b8dcb8729502234ce6e04ec51b14c27-07spLx_fw658'}}/>
      </View>);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      // const { navigation } = this.props;
      // navigation.navigate('Main')
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation
      })
    }, 2000)
  }
  componentWillUnmount(): void {
    this.timer && clearTimeout(this.timer)
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgage: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
})
