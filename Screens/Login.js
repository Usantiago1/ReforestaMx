import React from "react";
import { View, StyleSheet,ScrollView, Icon} from "react-native";
import { Input, Text, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const Login = () =>{

    const navigate = useNavigation();

    function NavigateAddUser (){
        navigate.navigate("Crear Cuenta");
    }

    function NavigateOptions () {
        navigate.navigate("Reforesta MX");
    }

    return(
        <>
        <ScrollView>
            <View style={styles.view}>
                <Input size='large' placeholder="Correo"></Input>
                <Input style={styles.input} size='large' placeholder="Contraseña"></Input> 
            </View>
            
            <View style={styles.view}>
                <Button appearance='outline' status='success' onPress={NavigateOptions}>Iniciar Sesión</Button>
                <Button appearance='ghost' style={styles.button} onPress={NavigateAddUser}>Crear Cuenta</Button>
            </View>


        </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    input:{
        flex:1,
        marginTop:15
    },
    button:{
        flex:1,
        marginTop:10,
        
    },
    view:{
        marginTop:50,
        margin:10
    }
})
export default Login;