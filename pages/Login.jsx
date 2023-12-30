import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,Button, StyleSheet,TextInput, Text, View,Image } from 'react-native';
import { Formik } from 'formik';
import logo from '../assets/gway-logo-login.png'

export default function Login() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [tel, onChangeTel] = React.useState('');

  React.useEffect(()=>{

  },[])


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.logo}><Image source={logo} /></View>
        <View><Text style={styles.login}>Login</Text></View>
      {/* <View style={styles.page} >  
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="placeholder1"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        
        placeholder="useless placeholder"
        keyboardType="numeric"
    />
     <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="useless placeholder"
        keyboardType="email-address"
    />
         <TextInput
        style={styles.input}
        onChangeText={onChangeTel}
        value={tel}
        inputmode={tel}
        placeholder="useless placeholder"
        
    />
    <Text>text   :{text}</Text>
    <Text>number :{number}</Text>
    <Text>email  :{email}</Text>
    <Text>phone  :{tel}</Text>
      </View>
    <View style={styles.container}>
    <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
      <StatusBar style="auto" />
    </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page:{
     display:"flex",
     justifyContent:"center",
     flexDirection:"column",
     alignItems:"center",
     backgroundColor:"#fefae0",
     width:"100%",
     height:"100%"
  },
  logo:{
    width:"20%",
    height:"20%",
    alignItems:"center",

  },
  login:{
    fontSize:100
  },
  input: {
    height: 40,
    width:"80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
