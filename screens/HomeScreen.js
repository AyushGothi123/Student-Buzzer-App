import * as React from 'react';
import { View ,TouchableOpacity,StyleSheet,Text} from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader'


export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state={
redStatus:true,
greenStatus:true,
blueStatus:true,
yellowStatus:true
    }
  }
componentDidMount(){
  var teamsref= db.ref("teams")
  teamsref.on("value",data=>{
    var teamDetails = data.val();
this.setState({
  redStatus:teamDetails.red.enabled,
  blueStatus:teamDetails.blue.enabled,
  greenStatus:teamDetails.green.enabled,
  yellowStatus:teamDetails.yellow.enabled
})
  })
}
goToBuzzerScreen=(buzzercolor)=>{
  var teamRef = db.ref('teams/'+buzzercolor);
  teamRef.update({
    enabled:false
  })
this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})

}
render(){
return(
<View>

<AppHeader/>

<TouchableOpacity
disabled = {!this.state.redStatus} 
 style = {[styles.button,{backgroundColor:"red"}]} onPress = {()=>{this.goToBuzzerScreen("red")}}>
<Text style = {styles.buttonText}>Team 1</Text>
</TouchableOpacity>

<TouchableOpacity
disabled = {!this.state.greenStatus}
 style = {[styles.button,{backgroundColor:"green"}]} onPress = {()=>{this.goToBuzzerScreen("green")}}>
<Text style = {styles.buttonText}>Team 2</Text>
</TouchableOpacity>

<TouchableOpacity
disabled = {!this.state.blueStatus}
 style = {[styles.button,{backgroundColor:"blue"}]} onPress = {()=>{this.goToBuzzerScreen("blue")}}>
<Text style = {styles.buttonText}>Team 3</Text>
</TouchableOpacity>

<TouchableOpacity
disabled = {!this.state.yellowStatus}
 style ={[styles.button,{backgroundColor:"yellow"}]} onPress = {()=>{this.goToBuzzerScreen("yellow")}}>
<Text style = {styles.buttonText}>Team 4</Text>
</TouchableOpacity>
</View>
  
)

}

}

const styles = StyleSheet.create({ button:{
   justifyContent : 'center',
    alignSelf : 'center',
     borderWidth : 2,
      borderRadius : 15, 
      marginTop:50,
       width : 200,
        height:50, 
        }, 
        buttonText : { textAlign : 'center', color : 'white' }
         })
