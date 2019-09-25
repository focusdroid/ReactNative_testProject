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
        <Image style={styles.imgage} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570022899&di=6b8c13ab3d88c10f8ae8810c4832664f&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-11-01%2F5bda950348bf6.jpg'}}/>
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
