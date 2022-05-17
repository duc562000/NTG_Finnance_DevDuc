
import React from 'react'
import { LineChart } from "react-native-gifted-charts"
import { View,StyleSheet,Text } from 'react-native'
import R from '../../assets/R';

const Chart = () => {
    const customDataPoint = () => {
        return (
            <View
            style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderWidth: 4,
                borderRadius: 10,
                borderColor: '#07BAD1',
            }}
            />
        );
    };
    const customLabel = val => {
        return (
            <View style={{width: 70, marginLeft: 2}}>
                <Text style={{color: '#aaa'}}>{val}</Text>
            </View>
        );
    };
    const dataFull = {
        lineDataRed : [
            {value: 5 ,
                labelComponent: () => customLabel('0T'),
                customDataPoint: customDataPoint},
            {value: 3},
            {value: 4},
            {value: 3,
                labelComponent: () => customLabel('3T'),
                customDataPoint: customDataPoint},
            {value: 5},
            {value: 3},
            {value: 10,
                labelComponent: () => customLabel('6T'),
                customDataPoint: customDataPoint}, 
            {value: 6},
            {value: 6},
            {value: 13,
                labelComponent: () => customLabel('9T'),
                customDataPoint: customDataPoint}, 
            {value: 6},
            {value: 6},  
            {value: 13,
                labelComponent: () => customLabel('12T'),
                customDataPoint: customDataPoint}, 
            {value: 6},
            {value: 6},   
            {value: 5,
                labelComponent: () => customLabel('15T'),
                customDataPoint: customDataPoint},  
        ],
        
        lineDataBrown : [
            {value: 0 ,
                labelComponent: () => customLabel('0T'),
                customDataPoint: customDataPoint},
            {value: 3},
            {value: 5},
            {value: 10,
                labelComponent: () => customLabel('3T'),
                customDataPoint: customDataPoint},
            {value: 4},
            {value: 6},
            {value: 10,
                labelComponent: () => customLabel('6T'),
                customDataPoint: customDataPoint}, 
            {value: 12},
            {value: 13},
            {value: 10,
                labelComponent: () => customLabel('9T'),
                customDataPoint: customDataPoint}, 
            {value: 10},
            {value: 6},  
            {value: 7,
                labelComponent: () => customLabel('12T'),
                customDataPoint: customDataPoint}, 
            {value: 7},
            {value: 6},   
            {value: 5,
                labelComponent: () => customLabel('15T'),
                customDataPoint: customDataPoint},  
        ],
        
    }
    return (
        <View style={{flex:1,}}>
            <Text style={{fontSize:16,fontWeight:'600',paddingHorizontal:10,paddingVertical:15}}>Biểu đồ hiệu quả đầu tư</Text>
            
            <View style={{paddingVertical:20,paddingBottom:65}}>
                <Text style={{fontSize:12,color:'#aaa',paddingHorizontal:10}}>% / năm</Text>
                <LineChart
                areaChart
                curved
                data={dataFull.lineDataRed}
                data2={dataFull.lineDataBrown}
                height={200}
                maxValue={15}
                noOfSections={3}
                spacing={22}
                initialSpacing={0}
                color1={R.colors.red1}
                color2={R.colors.brown}
                hideDataPoints
                startFillColor1={R.colors.white}
                startFillColor2={R.colors.brown}
                startOpacity={0.3}
                endOpacity={0.1}
                textFontSize={13}
                yAxisColor={R.colors.white}
                yAxisTextStyle={{color: '#aaa'}}
                xAxisColor={R.colors.white}
                isAnimated
                />
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{height:2,width:39,backgroundColor:R.colors.red1}}/>
                    <Text style={{paddingLeft:10,color:R.colors.black,fontSize:15}}>Ngân hàng</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{height:3,width:39,backgroundColor:R.colors.brown}}/>
                    <Text style={{paddingLeft:10,color:R.colors.black,fontSize:15}}>Lợi tức</Text>
                </View>
            </View>
        </View>
    );
};
export default Chart;