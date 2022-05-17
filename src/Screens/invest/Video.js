
import React, { Component } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import YouTube from 'react-native-youtube';


export default class Videos extends Component {
    
    render() {
        return (
            <View style={{paddingHorizontal:10,paddingVertical:10,borderRadius:20}}>
                <Text style={styles.txtTitle}>{this.props.title}</Text>
                <YouTube
                    videoId={this.props.data.idVideos}   
                    play={false}             
                    fullscreen={true}
                    loop={true}         
                    style={styles.player}
                />
            </View>
        );
    }
    }

const styles = StyleSheet.create({
    player: {
        alignSelf: 'stretch',
        marginVertical: 5,
        borderRadius:15,
        height:200
    },
    txtTitle:{
        fontSize:16,
        fontWeight:'600',
        paddingVertical:10,
        paddingHorizontal:10
},
});
