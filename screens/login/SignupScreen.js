import { Alert, StyleSheet, View, } from "react-native";
import AuthForm from "../../components/Auth/AuthForm";
import { createUser } from "../../util/auth";
import { useContext, useState } from "react";
import { authContext } from "../../store/auth-context";
import Loading from "../../components/ui/Loading";


function SignupScreen(){

    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(authContext)

    async function signupHandler(email, password) {
        try{
            setIsLoading(true);
            const token = await createUser(email, password);
            authCtx.auth(token);
        } catch {
            setIsLoading(false);
            Alert.alert('Error!', 'There was a problem with signing you up, please try again later!');
        }
    }

    if(isLoading){
        return(<Loading color={'white'} />);
    }

    return(
        <View style={styles.container}>
            <AuthForm isLogin={false} onSubmit={signupHandler} />
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});