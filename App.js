import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './components/home';
import {AppLoading} from 'expo'
import { useFonts } from "expo-font"
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './components/about';
import ReviewDetails from './components/reviewdetails';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './components/global';

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//       <Drawer.Screen name="Term&Condition" component={TermsCondition} />
//     </Drawer.Navigator>
//   );
// }

function HeaderTitle({navigation,route}) {
  const headerStyle = {
   
    // backgroundColor: route.params.isScrolled ? 'white' : 'transparent',
  };
  return (
    <View style={[styles.header,headerStyle]}>
      <View style={{flex:0.5}}>
        <Image source={{uri:"https://beanx.in/assets/img/bnxlogo-ornew.png"}} style={{widith: 100, height: 100, resizeMode: 'contain'}}/>
      </View>
      
      <View style={{justifyContent: 'center', padding: 15}}>
        <Icon name="bars" size={30} color="#eee" onPress={()=>console.log("pressed")}/>

      </View>
    </View>
    
  );
}

export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/YoungSerif-Regular.ttf'),
  });

    if(!loaded){
      return null
    }  
    

    return (
      <NavigationContainer>
      <Stack.Navigator> 
       {/* <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Reviews App" component={Home} options={({navigation,route}) => {
          
              return {
                headerTitle: () => <HeaderTitle navigation={navigation} route={route}/>,
                // headerTransparent: true, 
              };
            }}/>
        <Stack.Screen name="ReviewDetails" component={ReviewDetails}  />
        <Stack.Screen name="AboutUs" component={About}  />
      </Stack.Navigator>
    
    </NavigationContainer>
    );
}


