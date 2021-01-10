import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Picker, TextInput} from 'react-native'
import { ListContent, SearchBar, SearchPicker } from '../../components'


const Home = () => {

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/img/backgroundimg2.jpg')} style={{position:'absolute', height: 600, width: 420}}/>
          <ScrollView style={{backgroundColor:'transparant', flex:1}}>
            <View style={{marginHorizontal:17, paddingTop:15}}>
            <SearchPicker/>
            <SearchBar/>
            <ListContent/>
            </View>
          </ScrollView>
    </View>
    )
}

export default Home

const styles = StyleSheet.create({
  container:{
     flex: 1,  
  },
})
