import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const ButtonSubmit = () => {
    return (
        
        <TouchableOpacity onPress={() => alert('Register Success')}>
         <View style={styles.buttonregist}>
         <Text style={styles.textbutton}>Submit</Text>
         </View>
        </TouchableOpacity>
    )
}

export default ButtonSubmit

const styles = StyleSheet.create({
    buttonregist:{
        marginTop:50,
        borderWidth:1,
        borderColor:'white',
        borderRadius:7,
        backgroundColor: 'blue',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        width:170
      },
      textbutton:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
      }
})
