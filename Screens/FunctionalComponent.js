import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  Button,
} from "react-native";




const FunctionalComponent = () => {
  const [isLoading, setisLoading] = useState(true); //we start loading data from appstart, hence initial state is true
  const [data, setData] = useState([]); //receiving an array of json data

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json") //api endpoint
      .then((response) => response.json()) //stating the request will be a json object
      .then((json) => setData(json.movies)) //defining the json object data to come from movies
      .catch((error) => console.log(error)) //catching the erros
      .finally(() => setisLoading(false)); //stop loading

    // return () => {
    //   setisLoading();
    // }
  }, []);

  //helper function to start loading again
//   const button = () => {
//     setisLoading(true);
//   }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="pink" style={styles.indicator} />
      ) : (
        <View style={styles.list}>
          <Text style={styles.header}> Fetching data using fetchApi </Text>
          <FlatList
            horizontal
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.name}>
                  {item.title}, {item.releaseYear}
                </Text>
              </View>
            )}
          />

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  header: {
    color: 'gainsboro',
    textAlign: "center",
    fontSize: 22,
    padding: 20,
    marginBottom: 40,
    fontWeight: 'bold'
  },
  name: {
    fontSize: 15,
    backgroundColor: "#BEAFE1",
    padding: 15,
    paddingBottom: 30,
    paddingTop: 30,
    margin: 3,
    color: "black",
    //fontWeight: "bold",
    borderRadius: 15,
  },
  list: {
    //marginTop: 20
  },
  text: {
      color: '#EEE7D3',
      fontSize: 22,
      textAlign: "center",
      padding: 20
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FunctionalComponent;
