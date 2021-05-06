import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    //intial state
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#9b709c" style={styles.indicator} />
        ) : (
          <View style={styles.list}>
            <Text style={styles.header}> Class Based Component </Text>
            <FlatList
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    color: "gainsboro",
    textAlign: "center",
    fontSize: 22,
    padding: 20,
    marginBottom: 40,
    fontWeight: "bold",
  },
  name: {
    fontSize: 15,
    backgroundColor: "red",
    padding: 15,
    margin: 5,
    color: "white",
    fontWeight: "bold",
    borderRadius: 15,
  },
  list: {
    marginTop: 50,
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
