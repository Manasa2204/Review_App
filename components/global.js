import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
  
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft:20,
    marginTop:100
  },
  overlayText: {
    color:"white",
    fontWeight: 'bold',
    color: 'white', 
    fontSize:40
   
  },
  header:{
    flexDirection: 'row', marginRight: 15,justifyContent:'space-between',flex:1
    
  },
  card:{
    borderRadius:10,
    backgroundColor:"#fff",
    margin:10,
    elevation:2,
    shadowOpacity:0.3,
    shadowOffset:{height:2,width:2}
  },
  cardContent:{
    margin:20
  },
  rating:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:10,
    borderTopColor:"#eee",
    borderTopWidth:1,
    padding:10
  }
})

export const ratings={
    "1":require("../assets/rating-1.png"),
    "2":require("../assets/rating-2.png"),
    "3":require("../assets/rating-3.png"),
    "4":require("../assets/rating-4.png"),
    "5":require("../assets/rating-5.png")
}