import { StatusBar } from 'expo-status-bar';
import React ,{useEffect,useState,useRef} from 'react'
import { FlatList,View,Text,ScrollView, TouchableOpacity,ImageBackground, Modal} from "react-native";
import {styles} from "./global"
import ActionButton from 'react-native-action-button';
import Card from './card';
import Icon from 'react-native-vector-icons/FontAwesome';



const MyComponent = () => {

    
    return (
      <ImageBackground
      source={{uri:"https://beanx.in/assets/img/bnr.jpg"}}
      style={{height:450,width:"100%",resizeMode:"cover"}}
      >
        <View style={styles.centeredContainer}>
          <Text style={styles.overlayText}>B2B E-Commerce Platform for Coffee</Text>
        </View>
      </ImageBackground>
    );
  };
  

export default function Home({navigation}){
    const scrollRef = useRef()
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        navigation.navigate('Reviews App', { isScrolled });
      }, [isScrolled]);


    const handleScroll = (event) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      setIsScrolled(offsetY > 0); 
      
    };
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '4' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '5' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '6' },
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '7' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '8' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '9' },
      ]);

    return (
        <View style={styles.container}>

            <ScrollView  ref={scrollRef} onScroll={handleScroll}>

            {/* <MyComponent/> */}

            <Modal visible={false}>
                <View>
                    <Text>hello from modal</Text>
                </View>
            </Modal>

            <FlatList
                data={reviews}
                
                renderItem={({item})=>{
                return (
                    <TouchableOpacity  onPress={()=>{
                        navigation.navigate("ReviewDetails",item)
                    }}>
                        <Card>
                        <Text style={styles.titleText}>{item.title}</Text>

                        </Card>
                    </TouchableOpacity>
                )
                }}
            />
           </ScrollView>
            
            <ActionButton  renderIcon={()=><Icon name="level-up" size={20} color="white" />}  buttonColor="coral" onPress={()=>{
                scrollRef.current?.scrollTo({
                    y : 0,
                    animated : true
                });
            }}>

            </ActionButton>  
        </View>
    )
}

