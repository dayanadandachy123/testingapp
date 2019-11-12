import React,{Component} from "react";

import { Text, View ,ScrollView,Image,StyleSheet,Dimensions,SafeAreaView,RefreshControl} from 'react-native'

const axios = require('axios');


const window = Dimensions.get('window');
const imageWidth = (window.width/3)+30;
const imageHeight = window.width/3;
export default class Test extends Component {


    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            },{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            },{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            },{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            },{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            },{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            },{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            },{
                title:"test",
                img:"https://facebook.github.io/react-native/img/tiny_logo.png"
            }],


        }

        // read from lang using redux or simple method like constant lang

     // this.prepaeData()
    }


    async prepaeData(){
        // Make a request for a user with a given ID
        axios.get('your laravel api here ')
            .then(function (response) {
                // handle success
                console.log(response);

                // set state

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }


    onRefresh () {

        this.setState({refreshing:true})


        wait(2000).then(() => this.setState({refreshing:false}));
    }
    render() {

        const {showRow,isarabic} = this.props
        const {data,refreshing} = this.state
        var row = [];
        var set = [];
        var setCounter = 0;

        for(var i = 0; i < data.length; i++) {
            set.push(data[i]);
            if((i + 1) % 2 == 0 || (i + 1) >= data.length) {
                setCounter++;
                row.push(set);
                set = [];
            }
        }

        return (
            <SafeAreaView >
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={()=>this.onRefresh} />
            }
            >
                {row.map((row, i) => (
                    <View key={i} style={showRow? "":styles.container}>
                        {row.map((brochure, ii) => (
                            <View key={ii} style={styles.child}>
                                <Text style={isarabic?styles.arabictxt:styles.englishtxt} >{brochure.title} {ii}</Text>
                                <Image
                                    style={styles.image}
                                    source={{uri: brochure.img}}
                                />
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
            </SafeAreaView>
        );
    }
}


Test.defaultProps = { showRow: true , isarabic:false }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    child: {
        height: imageHeight+5,
        marginTop: 10
    },
    image: {
        width: imageWidth,
        height: imageHeight
    }
        ,
    arabicstyle: {
        alignSelf: 'flex-end'
    },
    englishstyle: {
        alignSelf: 'flex-start'
    },
    arabictxt:{

        textAlign:"right"
    },
    englishtxt:{
        textAlign:"left"
    }
});