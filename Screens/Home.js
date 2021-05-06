import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Col, Row, Grid } from "react-native-easy-grid";

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.header, { marginTop: 20 }]}>
        A React app that draws simple json data through fetchApi
      </Text>
      <View>
        <Grid>
          <Row>
            <Col style={[styles.items, {backgroundColor: '#957DAD'}]}>
              <Text style={[styles.header, {fontWeight: '100', fontSize: 15, textAlign: "right", color: 'yellow' } ]}>
                On the left screen, we have the api call through functional(ES6)
                components.
              </Text>
            </Col>
            <Col style={[styles.items, {backgroundColor: '#F7EF64'}]}>
              <Text style={[styles.header, {fontWeight: '100', fontSize: 15, textAlign: "left", color: 'black'} ]}>
                On the right screen, we have the api call through class-based
                components.
              </Text>
            </Col>
          </Row>
        </Grid>
        <View style={{alignItems: "center", marginTop: 100}}>
            <TouchableOpacity 
                style={styles.button}
                onPress={()=> navigation.navigate('Gallery')}    
            >
                <Text style={[styles.text, {fontSize: 15}]}>More examples</Text>
            </TouchableOpacity>
        </View>
      </View>
      <StatusBar backgroundColor="#719C70" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  header: {
    color: "gainsboro",
    textAlign: "center",
    fontSize: 22,
    padding: 10,
    marginBottom: 40,
    fontWeight: "bold",
  },
  items: {
    borderWidth: 2,
    borderColor: "white",
  },
  text: {
    color: '#EEE7D3',
    fontSize: 22,
    textAlign: "center",
    padding: 20
},
button: {
    backgroundColor: '#f35a2c',
    //width: '70%',
    //height: '50%',
    borderRadius: 25
}
});

export default Home;
