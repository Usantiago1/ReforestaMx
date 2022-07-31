import React, { useState } from "react";

import {
    useForm,
    Controller
} from 'react-hook-form';

import {
    View,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    Alert
} from "react-native";


import {
    Input,
    Button,
    Text,
    Icon
} from "@ui-kitten/components";


import { useNavigation } from "@react-navigation/native";




const AddUser = () => {

    const [ap, setAp] = useState('');
    const [am, setAm] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [iconPassword, setIconPassword] = useState(true);

    const er = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const message = 'El correo no es valido';
    const navigation = useNavigation();

    const ForwardIcon = (props) => {
        <Icon {...props} name='arrow-ios-forward'></Icon>
    }

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            email: '',
            contrasenia: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();

        alertReturnLogin();
    }


    const secureEntry = () => {
        setIconPassword(!iconPassword);
    }

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={secureEntry}>
            <Icon {...props} name={iconPassword ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const alertReturnLogin = () => {
        Alert.alert(
            "Reforesta MX",
            "Cuenta Creada Correctamente",
            [
                {
                    text: 'Ok', onPress: navigationLogin
                }
            ]
        )
    }

    const navigationLogin = () => {
        navigation.navigate("Iniciar Sesión");
    }

    return (
        <>
            <ScrollView>
                <View style={styles.view}>

                    <Controller
                        name="nombre"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                size='large'
                                placeholder="Nombre"
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}

                    />
                    {errors.nombre && <Text status='danger'>El nombre es requerido.</Text>}

                    <Controller
                        name="apellidoPaterno"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                size='large'
                                placeholder="Apellido Paterno"
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}

                    />
                    {errors.apellidoPaterno && <Text status='danger'>Este campo es requerido.</Text>}

                    <Controller
                        name="apellidoMaterno"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                size='large'
                                placeholder="Apellido Materno"
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}

                    />
                    {errors.apellidoMaterno && <Text status='danger'>Este campo es requerido.</Text>}

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: true, pattern: {value: er, message:message}}}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                size='large'
                                placeholder="correo"
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}

                    />
                    {errors.email && <Text status='danger'>{message}</Text>}

                    <Controller
                        name="contrasenia"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                size='large'
                                placeholder="Contraseña"
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={iconPassword}
                                accessoryRight={renderIcon}
                            />
                        )}

                    />
                    {errors.contrasenia && <Text status='danger'>Este campo es requerido.</Text>}

                    <Button onPress={handleSubmit(onSubmit)} style={styles.button}>Guardar</Button>
                </View>

            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 50,
        margin: 10,
        flexDirection: "column",
    },
    input: {
        marginTop: 15
    },
    button: {
        marginTop: 20
    }
})

export default AddUser;