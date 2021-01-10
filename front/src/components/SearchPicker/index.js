import React from 'react'
import { StyleSheet, Text, View, Picker} from 'react-native'

const SearchPicker = () => {
    return (
        <>
        <View style={{marginTop:30}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Search By :</Text>
        </View>
          <View style={{borderWidth:1, backgroundColor:'white', borderRadius:10, opacity:0.5}}>
            <Picker>
              <Picker.Item label="Name" value="name" />
              <Picker.Item label="Email" value="email" />
              <Picker.Item label="Phone" value="phone" />
              <Picker.Item label="Address" value="address" />
            </Picker>
        </View>
      </>
    )
}

export default SearchPicker

const styles = StyleSheet.create({})
