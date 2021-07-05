import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>The Details are listed here</Text>
      <Button color="#ff5c5c"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ justifyContent:'center', flex:1,flexDirection: 'column', margin: 5}}>
      <Text style={{fontSize: 30, textAlign: 'center'}}> Welcome to Clock-a-Do{"\n\n"} </Text>
      <Text style={{fontSize: 25, textAlign: 'center'}}> Never miss out your schedule{"\n\n"} </Text>
      <Button color="#ff5c5c"
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    
    <View style={{ justifyContent:'flex-start', flex:1,flexDirection: 'column', margin: 5}}>
 
 
        <View style={{width: 400, backgroundColor: '#00BCD4' }} >
        <Button 
        size
        title="Change Theme"
        onPress={() => navigation.navigate('SetData')}
      />
           
 
        </View>
 
 
        <View style={{width: 400, backgroundColor: '#00BCD4' }} >
        <Button 
        size
        title="Switch Account"
        color="red"
        onPress={() => navigation.navigate('AccData')}
      />
           
 
        </View>


        <View style={{width: 400, backgroundColor: '#00BCD4' }} >
        <Button 
        size
        title="About"
        color="orangered"
        onPress={() => navigation.navigate('AboutData')}
      />
           
 
        </View>
 
 
</View>
      
  );
}

function SettingData({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>The Details are listed here</Text>
      <Button color="#ff5c5c"
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
function AccData({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>The Details are listed here</Text>
      <Button color="#ff5c5c"
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function AboutData({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>The Details are listed here</Text>
      <Button color="#ff5c5c"
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="SetData" component={SettingData} />
      <SettingsStack.Screen name="AccData" component={AccData} />
      <SettingsStack.Screen name="AboutData" component={AboutData} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
