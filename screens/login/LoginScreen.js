import { Alert, StyleSheet, View, } from "react-native";
import AuthForm from "../../components/Auth/AuthForm";
import { login } from "../../util/auth";
import { useContext, useState } from "react";
import { authContext } from "../../store/auth-context";
import Loading from "../../components/ui/Loading";


function LoginScreen(){

    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(authContext)

    async function loginHandler(email, password) {
        try{
            setIsLoading(true);
            const token = await login(email, password);
            authCtx.auth(token);
        } catch {
            setIsLoading(false);
            Alert.alert('Invalid credentials!', 'Your username or password is incorrect');
        }
    }

    if(isLoading){
        return(<Loading color={'white'} />);
    }

    return(
        <View style={styles.container}>
            <AuthForm isLogin={true} onSubmit={loginHandler} />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});