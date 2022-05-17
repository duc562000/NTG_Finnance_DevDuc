import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated,StyleSheet } from 'react-native'
import R from '../../assets/R';
// import data from '../Survey/QuizData';ß
import Feather from 'react-native-vector-icons/Feather';
import {TABNAVIGATOR} from '../../routers/ScreenNames';
import Button from '../../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import InputForm from '../../components/Input/InputForm';
import { Controller,useForm } from 'react-hook-form';


const data = [
    {
        question: "Trái phiếu không chuyển đổi và không kèm chứng quyền,có tài sản đảm bảo",
        options: ["A.Đáp án 1","B.Đáp án 2","C.Đáp án 3","D.Đáp án 4"],
        correct_option: ["A.Đáp án 1"],
        isInput:false
        
    },
    {
        question: "Trái phiếu không chuyển đổi và không kèm chứng quyền,có tài sản đảm bảo",
        options: ["A.Đáp án 1","B.Đáp án 2","C.Đáp án 3","D.Đáp án 4"],
        correct_option: ["A.Đáp án 1","B.Đáp án 2"],
        isInput:false
    },
    {
        question: "Trái phiếu không chuyển đổi và không kèm chứng quyền,có tài sản đảm bảo",
        options: ["A.Đáp án 1","B.Đáp án 2","C.Đáp án 3","D.Đáp án 4"],
        correct_option: ["A.Đáp án 1","B.Đáp án 2"],
        isInput:true
    },
    
]


const Quiz = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
        } = useForm();
    

    const navigate = useNavigation();
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState([]);
    const [correctOption, setCorrectOption] = useState([]);
    const [inputOption, setInputOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
        console.log("selectedOption",selectedOption)
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        console.log("correct_option",correct_option)
       
       

        if(correct_option.length>1){
            let newList=currentOptionSelected.concat(selectedOption)
            console.log("newList",newList)
            setCurrentOptionSelected(newList);
            setCorrectOption(correct_option);
            if(currentOptionSelected.length == 1 ){
                setIsOptionsDisabled(true)
            }

        }else{
            setCurrentOptionSelected(selectedOption);
            setCorrectOption([].concat(correct_option));
            setIsOptionsDisabled(true);
        // if(selectedOption==correct_option){
            
        //     // Set Score
        //     setScore(score+1)
        // }}
        // Show Next Button
        }
        setShowNextButton(true)
        
       
    }

    
    const handleNext = (dataAnswer) => {
        console.log(dataAnswer);
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected([]);
            setCorrectOption([]);
            setIsOptionsDisabled(false);
            setShowNextButton(true);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const DoneToHome = () => {
        setShowScoreModal(false);
        navigate.navigate(TABNAVIGATOR)
        // setCurrentQuestionIndex(0);
        // setScore(0);

        setCurrentOptionSelected([]);
        setCorrectOption([]);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }



    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                

                {/* Question */}
                <Text style={{
                    color: R.colors.black,
                    fontSize: 26,
                    fontWeight:'bold',
                    textAlign:'center'
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                allQuestions[currentQuestionIndex].isInput
                    ?
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value, } }) => (
                            <InputForm
                                    textColor={R.colors.black}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.Cautraloi}
                                    placeHolderColor={"#333"}
                                    placeholder={"Nhập câu trả lời"}
                                
                            />
                            )}
                            name='Cautraloi'
                            defaultValue=""
                        />
                    :
            <View>
                {
                    allQuestions[currentQuestionIndex].options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 1, 
                            borderColor: currentOptionSelected.includes(option) && correctOption.includes(option)
                            ? R.colors.brown
                            : currentOptionSelected.includes(option)
                            ? R.colors.error 
                            : R.colors.gray+'80',
                            backgroundColor: currentOptionSelected .includes(option) && correctOption.includes(option)
                            ? R.colors.brown +'35'
                            : currentOptionSelected.includes(option)  && correctOption.includes(option)
                            ? R.colors.error +'20'
                            : R.colors.white,
                            height: 60, borderRadius: 5,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 20, color: R.colors.black}}>{option}</Text>
                            {
                                currentOptionSelected.includes(option) && correctOption.includes(option) ? (
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Feather name="check-square" size={24} color={R.colors.success} />
                                    </View>
                                ):  currentOptionSelected.includes(option)  && correctOption.includes(option)? (
                                    <View style={{
                                        width: 25, height: 25, borderRadius: 30/2,
                                        backgroundColor: R.colors.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: R.colors.black,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }

                        </View>
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <View style={{marginTop:100}}>
                    <Button
                        onPress={handleSubmit(handleNext)}
                        title='Tiếp theo'
                    >
                    </Button>
                </View>
                
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <>
            <View style={{alignItems:'center',marginTop:-20,marginBottom:20}}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={styles.txtCurrentQs}>{currentQuestionIndex+1} </Text>
                    <Text style={styles.txtCurrentQs}>/ {allQuestions.length}</Text>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 6,
                borderRadius: 20,
                backgroundColor: '#ddd'

            }}>
                <Animated.View style={[{
                    height: 6,
                    borderRadius: 20,
                    backgroundColor: R.colors.brown,
                    
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
            </>
        )
    }


    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={R.colors.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 30,
               paddingHorizontal: 16,
               backgroundColor: R.colors.white,
               position:'relative'
           }}>

               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}

               {/* Next Button */}
               {renderNextButton()}

               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: R.colors.white,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: R.colors.black+40,
                           width: '90%',
                           borderRadius: 10,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           {/* <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text> */}

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 25,
                                   color: R.colors.black,
                                   textAlign:'center'
                               }}>Chúc mừng bạn đã hoàn thành bài khảo sát !</Text>
                                
                           </View>
                           {/* Retry Quiz button */}
                           <View style={{marginTop:20,marginBottom:-16}}>
                            <Button
                            onPress={(DoneToHome)}
                            title='Hoàn thành'
                            >
                            
                            </Button>
                           </View>

                       </View>

                   </View>
               </Modal>

               {/* Background Image */}
               

           </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txtCurrentQs : {
        fontSize :20,
        fontWeight:'bold',
        color:R.colors.brown,
    }
})

export default Quiz