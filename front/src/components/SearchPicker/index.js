import React, { Component } from 'react'
import { StyleSheet, Text, View, Picker} from 'react-native'


class SearchPicker extends Component{
    
  state = {
    idData: '',
  }

  render() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center', }}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center', borderWidth:1, backgroundColor:'white', borderRadius:10, opacity:0.5}}>
          <Picker
            selectedValue={this.state.idData}
            onValueChange={(itemValue) => this.setState({ idData: itemValue })}
            style={{ width: '80%', color: '#000', fontWeight: 'bold' }}
            >
            <Picker.Item label="Find Urser" />
            <Picker.Item label='Name' value='Name' />
            <Picker.Item label='Email' value='Email' />
            <Picker.Item label='Phone' value='Phone' />
            <Picker.Item label='Address' value='Address' />
          </Picker>
         </View>
         </View>
    );
  }
  };

export default SearchPicker


