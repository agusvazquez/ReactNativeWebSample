import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('League', () => App)
AppRegistry.runApplication('League', {
  rootTag: document.getElementById('root'),
})
