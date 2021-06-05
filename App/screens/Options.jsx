import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar } from "react-native";

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openUrl = (url) =>{
    return Linking.openURL(url).catch(() => {
       Alert.alert("Sorry, something went wrong,","Please try again later."); 
    });
};
export default () => {

    return(
       <SafeAreaView style={{backgroundColor:"coral", flex:1}}>
         <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
         <ScrollView>
            <RowItem
            text="Currency Application"
            onPress={() => openUrl('https://www.w3schools.com/')}
             rightIcon={
               <Entypo name="chevron-right" size={20} color={colors.blue}/>
             }
            />
             
             <RowSeparator/>

            <RowItem
            text="Currency Application test mode"
            onPress={() => openUrl('https://academicearth.org/')}
             rightIcon={
               <Entypo name="export" size={20} color={colors.blue}/>
             }
            />
 
            <RowSeparator/>

            <RowItem
            text="Making the initial stage"
            onPress={() => openUrl('https://www.lifehack.org/free-classes')}
             rightIcon={
               <Entypo name="export" size={20} color={colors.blue}/>
             }
            />
        </ScrollView>
       </SafeAreaView>
    );

};