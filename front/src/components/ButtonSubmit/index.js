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

const styles = StyleSheet.create({})
