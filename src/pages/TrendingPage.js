import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux'
import actions from '../action/index'

class TrendingPage extends Component {
  render() {
    return (<View>
        <Text>TrendingPage</Text>
        <Button
          title='改变主题颜色--绿色'
          onPress={() => {
            this.props.onThemeChange('#096')
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage)
