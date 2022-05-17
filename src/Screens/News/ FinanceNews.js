import React from "react"
import {Text, View,StyleSheet,Image,TouchableOpacity,FlatList} from "react-native"
import R from "../../assets/R"
import { NEWS_READ_SCREEN } from "../../routers/ScreenNames"
import Article from "./Article"
import { data } from "./DataNews"
import {useNavigation} from '@react-navigation/native';


const FinanceNews = (props) => {


    const {data}=props

    const renderArticle = ({ item }) => <Article item={item} />;
    
    const navigate = useNavigation();
    return (
        <View style={{flex:1}}> 
            
            <FlatList
            data={data.list}
            renderItem={renderArticle}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return(
                    <View style={styles.finaceNews}>
                        <TouchableOpacity
                            onPress={()=> navigate.navigate(NEWS_READ_SCREEN,
                                {   title : data.main.title,
                                    type : data.main.type
                                }
                                )}
                        >
                            <Image 
                            source={data.main.image}
                            style={styles.finaceNewsImg}
                            />
                            <Text style={styles.txtfinaceNews}>{data.main.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
            // ItemSeparatorComponent={renderDivider}
            // ListFooterComponent={renderFooter}
            // initialNumToRender={6}
            // onEndReached={() => setPage((page) => page + 1)}
            // onEndReachedThreshold={1}
            // onRefresh={refreshData}
            // refreshing={refreshing}
            />
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    finaceNews:{
        alignItems:'center',
        paddingHorizontal:15,
        paddingTop:15
    },
    finaceNewsImg:{
        height:180,
        maxWidth:'100%',
        resizeMode: 'stretch'
    },
    txtfinaceNews:{
        fontSize:15,
        fontWeight:'bold',
        marginTop:5,
        color:R.colors.black,
        marginBottom:15
    },
    
})

export default FinanceNews
