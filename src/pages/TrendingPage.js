import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';


export default class TrendingPage extends Component {
  render() {
    const { navigation } = this.props
    return (<View>
        <Text>TrendingPage</Text>
        <Button
          title='改变主题颜色--红色'
          onPress={() => {
            navigation.setParams({
              theme: {
                tintColor: 'red',
                updateTime: new Date().getTime()
              }
            })
          }}
        />
        <Button
          title='改变主题颜色--绿色'
          onPress={() => {
            navigation.setParams({
              theme: {
                tintColor: 'green',
                updateTime: new Date().getTime()
              }
            })
          }}
        />
      </View>
    );
  }
}
