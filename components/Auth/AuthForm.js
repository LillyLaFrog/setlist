import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import TransparentButton from "../ui/TransparentButton";
import GradientButton from "../ui/GradientButton";
import { Colors } from "../../constants/Colors";
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import BackgroundTexture from "../ui/BackgroundTexture";

const screenHeight = Dimensions.get('screen').height

function AuthForm({onSubmit, isLogin}) {

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfrimPassword] = useState('');

    const isValid = (!!email && email.includes('@') && email.length > 2 && !!password && password.length > 3) && (isLogin || email === confirmEmail && password === confirmPassword);

    const navigation = useNavigation();

    function switchModeHandler(){
        if(isLogin){
            navigation.replace('Signup');
        } else {
            navigation.replace('Login');
        };
    }

    function submitHandler(){
        if(isValid){
            onSubmit(email, password);
        } else {
            Alert.alert((isLogin?'Login Invalid!':'Signup Form Invalid!'), 'We couldn\'t ' + (isLogin?'log you in!':'sign you up!') + ' Make sure you typed everything correctly');
        }
    }

    return(
        <BackgroundTexture texture='metal' keepHeight={true}>
            <View style={styles.container}>
                <Text style={styles.title}>{isLogin?'Login to Setlist':'Make a New Account'}</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" keyboardType='email-address' onChangeText={(text)=>setEmail(text)} />
                    {!isLogin && <TextInput style={styles.input} placeholder="Confirm Email" keyboardType='email-address' onChangeText={(text)=>setConfirmEmail(text)} />}
                    <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>setPassword(text)} secureTextEntry={true} />
                    {!isLogin && <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={(text)=>setConfrimPassword(text)} secureTextEntry={true} />}
                </View>
                <GradientButton startColor={Colors.warmA300} endColor={Colors.warmB500} onPress={submitHandler}>{isLogin?'Login':'Signup'}</GradientButton>
                <TransparentButton onPress={switchModeHandler} color={Colors.coolB300}>{isLogin?'No Account? Sign Up!':'Log in instead'}</TransparentButton>
            </View>
        </BackgroundTexture>
    );
}

export default AuthForm;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 90,
        padding: 24,
        alignItems: 'center',
    },
    title:{
        color: Colors.warmB500,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        minWidth: 200,
        margin: 8,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    inputContainer:{
        marginTop:32,
    },
    background: {
        flex:1,
        height: screenHeight,
    }
});