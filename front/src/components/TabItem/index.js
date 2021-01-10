import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { IconHome, IconHomeActive, IconUser, IconUserActive } from '../../assets'


const TabItem = ({label, isFocused, onLongPress, onPress}) => {


    const Icon = () => {
        if(label === "Home") {
            return isFocused ? <IconHomeActive/> : <IconHome />;
        }

        if(label === "Register") {
            return isFocused ? <IconUserActive/> : <IconUser />;
        }
    }



    return (
      <TouchableOpacity style={styles.container}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1 }}>
        <View style={styles.icons}>
        <Icon/>
        </View>
        { isFocused && <Text style={styles.text}>
        {label}
        </Text>}
      </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        justifyContent:'center'
    },
    icons:{
        alignItems:'center'
    },
    text:{
        color: 'black',
        textAlign: 'center'
    }
})
