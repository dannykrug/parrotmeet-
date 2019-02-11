import React from 'react';
import { View, Text} from 'react-native';
import { Header, Card, CardSection, Button } from './components/common'

App = () => {
  return (
  <View>
    <Header headerText='ParrotMeet' />
    <Card>
      <CardSection>
        <Button>News Feed</Button>
      </CardSection>
      <CardSection>
        <Button>Concert Feed</Button>
      </CardSection>
      <CardSection>
        <Button>My Concerts</Button>
      </CardSection>
      <CardSection>
        <Button>Log Out</Button>
      </CardSection>
    </Card>
  </View>
  )
}

export default App;
