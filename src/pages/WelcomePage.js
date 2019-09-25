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
        <Image style={styles.imgage} source={{uri: 'http://pic1.win4000.com/wallpaper/2018-11-30/5c00de645d19b.jpg'}}/>
      </View>);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      // const { navigation } = this.props;
      // navigation.navigate('Main')
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation
      })
    }, 3000)
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
