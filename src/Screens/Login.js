import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { View,Button, StyleSheet,ScrollView,TouchableWithoutFeedback} from "react-native";

import { Input, Text,  Icon} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";


const Login = () =>{

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const navigate = useNavigation();

    const {control, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            correo:'',
            password:''
        }
    });

    const onSubmit = data => console.log(data);

    const toogleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    }

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toogleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    );

    const  NavigateAddUser = () =>{
        navigate.navigate("Crear Cuenta");
    }

    const NavigateOptions = () =>{
        navigate.navigate("Reforesta MX");
    }

    return(
        <>
        <ScrollView>
        <View>

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Correo"
      />
      {errors.correo && <Text>Este campo es requerido.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Contraseña"
      />


      <Button onPress={handleSubmit(onSubmit)} title="ss"></Button>
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