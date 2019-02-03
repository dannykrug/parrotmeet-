import React from 'react';
import { View, Text} from 'react-native';
import { Header, Card, CardSection } from './components/common'

App = () => {
  return (
  <View>
    <Header headerText='ParrotMeet' />
    <Card>
      <CardSection>
        <Text>News Feed</Text>
        <Text>Concert Feed</Text>
        <Text>My Concerts</Text>
      </CardSection>
    </Card>
  </View>
  )
}

export default App;
