import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable,Linking} from  'react-native'

const githubColor = '#010409'
const githubcolorfont = '#C9D1D9'
const githubdarkfont = '#4F565E'
const imagelink = 'https://avatars.githubusercontent.com/u/94724021?v=4'
const githuburl = 'https://github.com/lmiguelcardoso/'

const App = ()=>{
    const handlePressGotoGithub = async ()=>{
        console.log('verificando link')
        const res = await Linking.canOpenURL(githuburl)
        if(res){
            console.log('link aprovado')
            await Linking.openURL(githuburl)
        }
    };

    return (
        <SafeAreaView style={style.container}>

            <StatusBar backgroundColor={githubColor} barStyle='dark-content'/>       
             <View style={style.content}>
                 <Image accessibilityLabel='Luffy' style={style.avatar} source={{uri: imagelink}}/>
                 <Text style={[style.defaultText, style.name]}>Miguel</Text>
                 <Text style={[style.defaultText, style.nickname]}> lmiguelcardoso</Text>
                 <Text style={[style.defaultText, style.description]}>nosce te ipsum</Text>
                 
                 <Pressable onPress={handlePressGotoGithub}>
                     <View style={style.button}>
                      <Text style={[style.defaultText, style.textbutton]}>Open in Github</Text>
                    </View>
                 </Pressable>
                </View>
                             
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container:{
        backgroundColor:githubColor,
        flex:1,
        justifyContent:'center'

    },
    content:{
        alignItems:'center',
        
    },
    avatar:{
        height:200,
        width:200,
        borderRadius:100,
        borderWidth: 2,
        borderColor:'white',         
        
    },
    defaultText:{
        color:githubcolorfont     
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:10
    },
    nickname:{
        fontSize:18,
        color:githubdarkfont
        
    },
    description:{
        fontSize:14,
        fontWeight:'bold'
    },
    button:{
        marginTop:20,
        backgroundColor: githubdarkfont,
        padding:20,
        borderRadius:10
    },
    textbutton:{
        fontSize:14,
        fontWeight:'bold'
    }
})
export default App;