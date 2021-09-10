import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Modal, FlatList, ScrollView,StyleSheet,Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
// import {vh, vw} from 'react-native-viewport-units';
// import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

/*
Not working
npm install react-native-viewport-units --save
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');


*/
export default function App() {

  const [enteredGoal,setEnteredGoal]= useState('');
  const [courseGoals,setCourseGoals]= useState([]);
  const [modalVisiblity, setModalVisiblity]= useState(false);

  // No html elements works on React Native;

  const goalInputHandler = (inputValue)=>{
    setEnteredGoal(inputValue)
  }

  const addGoalHandler=()=>{
    console.log("I got clicked",enteredGoal)
     setCourseGoals(currentGoals=>[...currentGoals, {key:Math.random().toString(),value:enteredGoal}]);
       setEnteredGoal("");
       setModalVisiblity(false);
    }

  const removeGoalHandler=(itemId)=>{
      console.log("itemId", itemId);
      console.log("I got deleted");

      setCourseGoals(currentGoals =>{
        return currentGoals.filter((goal)=>goal.id === itemId)
      })

  }  

  return (
    
          <View  style={styles.container}>
            <Text style={styles.Heading}>Couse Goal App</Text>
            <Button title='Add Item' onPress={()=>setModalVisiblity(true)}/>
            <Modal visible={modalVisiblity}>
               <View style={styles.inputContainer}>   
              
                    <View style={styles.TopContainer}>
                      <TextInput value={enteredGoal} onChangeText={goalInputHandler} placeholder="Course Goal" style={styles.Input}/>
                      <Button title='Add Item'onPress={addGoalHandler}/>
               </View>
                    </View>

              </Modal>    


        <View style={styles.Bottom}>

           {/*
           code for using ScrollView
           <ScrollView> 
          it takes horizontal as prop;
          Loads all the elements at a time 
          making our app slow so use FlatList 
          Flat List also allows duplicates

          {
            courseGoals.map((course, index)=>{
              console.log("I got called", course);
              return(
                <View style={styles.BottomContainer}>
                  <Text key={index} style={styles.BottomText}>{course}</Text>
                </View>
                  );
            })
          }


         <Text>{enteredGoal}</Text> 
        </ScrollView >


        please also refer TouchableHighlight, TouchableNativeFeedback, TouchableWithOutFeedback
        which supports onPress, onLongPress, e.t.c
        */}

        <FlatList
        
         data={courseGoals}
         keyExtractor={(item,index)=>item.key}
         renderItem={itemData=>(
        //   console.log("itemData", itemData)

        <TouchableOpacity onPress={removeGoalHandler.bind(this, itemData.item.key)}>

              <View style={styles.BottomContainer}>
                  <Text>{itemData.item.value}</Text>
              </View>

        </TouchableOpacity>
         )
        
        
        
        
        }
        
        
        
        >




        </FlatList>

        </View>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:30,
    paddingTop:60,
  },
  inputContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
  },  
  Heading:{
    textAlign: 'center',
    marginBottom:'5%',
    fontWeight: 'bold',
    fontSize:20,
  },
  TopContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Input:{
    flex:1,
    borderWidth:2,
    padding:10,
    borderColor:"black",
    borderStyle:"solid",

  },
  Button:{
    backgroundColor:"blue",
    flexDirection:"column",
  },

  Bottom:{
    width:"100%",
    flexDirection:"column",
  },

  BottomContainer:{
      width:"100%",
      justifyContent:"space-evenly",
      backgroundColor:"lightgray",
      padding:10,
      margin:10,
      textAlign:"center",
      borderWidth:1,
      justifyContent:"center",
  },

  BottomText:{
    // backgroundColor:"yellow",
    width:"100%",
    fontSize:20,
    fontWeight:"bold",
    marginTop:5,
  }


});
