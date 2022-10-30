import React from "react";
import { Button,StyleSheet } from "react-native";

const NavigationButton = ({screenName,navigation}) => {
    return(
        <Button 
        title={'Go to ' + screenName}
        onPress={() => navigation.navigate(screenName)}
        />
    )    
}

const styles = StyleSheet.create({

})

export default NavigationButton;