import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import PagerView from 'react-native-pager-view';

//import GalleryStack
import GalleryStack from '../Navigators/GalleryStack'


const Gallery = () => {
    return (
      //passed the gallery stack
        <GalleryStack />
      );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black'
  },      
});

export default Gallery
