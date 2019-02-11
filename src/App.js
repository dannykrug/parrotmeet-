import React from 'react';
import { View, Text} from 'react-native';
import { Header, Card, CardSection, Button } from './components/common'

App = () => {
  return (
  <View>
    <Header headerText='ParrotMeet' />
    <Card>
      <CardSection>
        <Text>News Feed</Text>
      </CardSection>
      <CardSection>
        <Text>Concert Feed</Text>
      </CardSection>
      <CardSection>
        <Text>My Concerts</Text>
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  </View>
  )
}

export default App;
