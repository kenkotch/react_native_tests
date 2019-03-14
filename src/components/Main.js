import React from 'react'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native'

class Main extends React.Component {
  state = {
    counter: 0
  }

  incrementCounter = number => {
    const { counter } = this.state
    const count = counter + number
    this.setState({ counter: count })
  }

  resetCounter = () => {
    this.setState({ counter: 0 })
  }

  uslessMethodJustForTesting = (message = 'There was no message') => message

  render() {
    const { counter } = this.state
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>
          Counter:
          { counter }
        </Text>
        <TouchableOpacity
          onPress={ () => this.incrementCounter(1) }
        >
          <Text>
            Increment by 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.incrementCounter(4) }
        >
          <Text>
            Increment by 4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ this.resetCounter }
        >
          <Text>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
}

export default Main