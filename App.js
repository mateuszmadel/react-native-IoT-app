import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DevicesScreen from "./screens/DevicesScreen";
import ConnectionScreen from "./screens/ConnectionScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    Lora_400Regular,
} from '@expo-google-fonts/lora';
import {
    Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import * as Font from "expo-font";
let customFonts={
    Lora_400Regular,
    Roboto_400Regular
}
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    async componentDidMount(){

        await this._loadFontsAsync();
    }
    state={
        fontsLoaded: false
    }
    render(){
        if (this.state.fontsLoaded) {
            return (
                <NavigationContainer>
                    <Tab.Navigator
                        barStyle={{ marginLeft:10, marginRight:10 }}
                        tabBarOptions={{
                            showIcon:true
                        }} >

                        <Tab.Screen name="Devices"
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <MaterialCommunityIcons name="devices" color={color} size={size} />
                                        ),
                                    }}
                                    component={DevicesScreen}/>
                        <Tab.Screen name="Connection"  options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="wifi" color={color} size={size} />
                            ),
                        }} component={ConnectionScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            );
        }
        else{
            return null;
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
