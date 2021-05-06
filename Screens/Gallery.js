import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PagerView from 'react-native-pager-view';

const Gallery = () => {
    return (
        <PagerView style={styles.pagerView} initialPage={0}>
          <View key="1" style={{backgroundColor: 'black'}}>
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>First page</Text>
          </View>
          <View key="2" style={{backgroundColor: 'black'}} >
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Second page</Text>
          </View>
        </PagerView>
      );
}

const styles = StyleSheet.create({
    pagerView: {
      flex: 1,
    },
});

export default Gallery
