import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,Button, StyleSheet,TextInput, Text, View } from 'react-native';
import { Formik } from 'formik';
import Login from './pages/Login';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
 


  return (
    <>
<StackNavigation/>
  </>
    )
};
