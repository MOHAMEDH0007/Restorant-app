import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export default function Welcomeapp({navigation}) {
    return(
      <>
       <View style={Welstyle.container}>
         <Image style={Welstyle.logo}  source={require('../assets/logo.png')} />
         <Text style={Welstyle.Weltext}><Text style={{fontWeight:'bold',}}>A1 Delhi Darbar Restaurant</Text></Text>
         <Text style={Welstyle.Apptext}>Comfortable elegance and personalized service in the heart of Vasai.</Text>
         <Pressable style={Welstyle.Button} onPress={() => navigation.navigate('Subscribe')}>
          <Text style={Welstyle.ButtonText} >Get Started</Text>
         </Pressable>
       </View>
       </>
    );
}

const Welstyle = StyleSheet.create({
  container:{ flex:1, flexDirection:'column', justifyContent:'center', backgroundColor:'#004643'},
  Weltext:{textAlign:'center',textAlignVertical:'center',fontSize:25,color:'#E5CCB2'},
  logo:{height:100,width:100, resizeMode:'contain',marginLeft:155},
  Apptext:{fontWeight:'500', fontSize:20,textAlign:'center',color:'#E5CCB2'},
  Button:{top:190,borderRadius:30, backgroundColor:'#E5CCB2',paddingVertical:12, marginHorizontal:80},
  ButtonText:{fontSize:17,textAlign:'center'},


})