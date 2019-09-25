import React, {Component} from 'react';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import {
  View,
  Text
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';


/*最热页面*/
export default class PopularPage extends Component {
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'tab1'
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'tab2'
        }
      }
    }))
    return (<TabNavigator/>);
  }
}
class PopularTab extends Component {
  render() {
    const { tabLabel } = this.props;
    return (<View>
        <Text>{tabLabel}</Text>
        <Text onPress={() => {
          NavigationUtil.goPage({}, 'DetailPage')
        }}>跳转到详情页</Text>
      </View>
    );
  }
}
