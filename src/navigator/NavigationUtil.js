export default class NavigationUtil {
  static goPage(params, page) { /*params 要传递的参数   page 要跳转的页面名*/
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log('navigation can not is null')
      return;
    } else {
      navigation.navigate(
        page,{
          ...params
        }
      )
    }
  }
  static resetToHomePage(navigation) { // 返回上一页
    navigation.goBack();
  }
  static resetToHomePage(params) { // 欢迎页面进到首页
    const { navigation } = params;
    navigation.navigate('Main')
  }
}
