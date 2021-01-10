import React from 'react'
import { StyleSheet, Text, View, Image, TextInput,} from 'react-native'
import { ButtonSubmit } from '../../components'

const Register = () => {
    return (
        <View style={styles.container}>
          <Image source={require('../../assets/img/backgroundimg2.jpg')} style={{position:'absolute', height: 600, width: 420}}/>
            
            <View style={styles.containertext}>
              <Text style={styles.text}>Name  :</Text>
              <TextInput placeholder="Input Your Name" style={styles.kotak}/>
              <Text style={styles.text}>Email  :</Text>
              <TextInput placeholder="Input Your Email" style={styles.kotak}/>
              <Text style={styles.text}>Phone  :</Text>
              <TextInput placeholder="Input Your Phone" style={styles.kotak}/>
              <Text style={styles.text}>Address  :</Text>
              <TextInput placeholder="Input Your Address" style={styles.kotak}/>
              <ButtonSubmit/>
            </View>
            
         </View>
    )
}

export default Register ;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  containertext:{
    paddingHorizontal:20,
    marginTop:30

  },
  text:{
    fontSize:15,
    fontWeight:'bold',
    marginVertical:10,
    color: 'black'
  },
  kotak:{
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10, 
    height:40,
    paddingLeft:45,
    fontSize:15,
    paddingRight:20,
    backgroundColor:'white',
    opacity:0.5
  },
  
})