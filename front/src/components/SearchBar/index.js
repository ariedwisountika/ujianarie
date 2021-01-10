import React from 'react'
import { StyleSheet, Text, View, TextInput, Image} from 'react-native'

const SearchBar = () => {
    return (
    
    <View style={{position:'relative', marginTop:30}}>
        <TextInput placeholder="Seacrh by Name" style={{borderWidth:1, borderColor:'grey', borderRadius:25, height:40, paddingLeft:45, fontSize:15, paddingRight:20, backgroundColor:'white', opacity:0.5}}/>
        <Image source={require('../../assets/img/searchimg.png')} style={{width:30,height:30, position:'absolute', top:5, left:10}}/>
    </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})
