import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import { Header, Card, CardSection, Button, Input } from './components/common'

App = () => {
  return (
  <View>
    <Header headerText='ParrotMeet' />
    <Card>
      <Image style={styles.imageStyle} source={{uri: 'https://i.pinimg.com/originals/db/38/a1/db38a1d743bddc0ad7d6c6d9b3760008.jpg'}} />
      <CardSection>
        <Text>Login</Text>
      </CardSection>

      <CardSection>
        <Input label="username" placeholder="username" />
      </CardSection>

      <CardSection>
        <Input label="password" placeholder="password" secureTextEntry />
      </CardSection>

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

const styles = {
  imageStyle: {
    display: 'flex',
    height: 200,
    width: 200
  }
}

export default App;
