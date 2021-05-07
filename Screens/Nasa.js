import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, WebView, Image } from 'react-native'

//importing api module
import Api from '../Shared/Api';


class Nasa extends React.Component {
    constructor(props) {
        super(props);
        //similar to use state (state)
        this.state = {
            title: '',
            pic: '',
            explanation: '',
            date: '',
            media: ''
        }
    }

    //similar to useEffect (like setState)
    componentDidMount() {
        Api.nasaPics().then((res) => {
            this.setState({
                title: res.title,
                pic: res.pic,
                explanation: res.explanation,
                date: res.date,
                media: res.media
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}> {this.state.date} </Text>
                <Text style={styles.text}> {this.state.title} </Text>
                {/* check if it is a video or image */}
                {this.state.media === 'video' ? 
                    //if video, display using webview
                    <WebView 
                        javaScriptEnabled = {true}
                        source={{url : this.state.pic }}
                        style={{width: 370, height: 200}}
                    /> : (
                        // else display image
                        <Image 
                            source = {{ url: this.state.pic }}
                            style = {{width: 370, height: 200}}
                        />
                    )
                }
                <Text style={styles.text}> {this.state.explanation} </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    text: {
        color: 'white'
    }
})

export default Nasa
