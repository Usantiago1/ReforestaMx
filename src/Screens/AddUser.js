import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback} from "react-native";
import { Input, Button, Icon } from "@ui-kitten/components";


const AddUser = () =>{

    const [ap, setAp] = useState('');
    const [am, setAm] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [iconPassword, setIconPassword] = useState(true);

    const ForwardIcon = (props) =>{
        <Icon {...props} name='arrow-ios-forward'></Icon>
    }


    const secureEntry = () =>{
        setIconPassword(!iconPassword);
    }

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={secureEntry}>
          <Icon {...props} name={iconPassword ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
      );

    return(
        <>
    <ScrollView>
        <View style={styles.view}>
            <Input size='large' placeholder="Nombre"></Input>
            <Input style={styles.input} size='large' placeholder="Apellido Paterno"></Input>
            <Input style={styles.input} size='large' placeholder="Apellido Materno"></Input>
            <Input style={styles.input} size='large' placeholder="Correo"></Input>
            
            <Input 
                secureTextEntry={iconPassword}
                accessoryRight={renderIcon} 
                style={styles.input} 
                size='large' 
                placeholder="Contraseña"
                >
            </Input>

            <Button style={styles.button}>Guardar</Button>
        </View>

        </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop:50,
        margin:10,
        flexDirection:"column",
    },
    input:{
        marginTop:15
    },
    button:{
        marginTop:20
    }
})

export default AddUser;