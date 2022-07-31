import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";


import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";


import {
  Input,
  Text,
  Button,
  Icon
} from "@ui-kitten/components";


import { useNavigation } from "@react-navigation/native";
import DropdownAlert from "react-native-dropdownalert";


const Login = () => {

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [handleClose, setHandleClose] = useState(false);
  const [handleOpen, setHandleOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigation();

  const er = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const message = 'El correo no es valido.';



  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      correo: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alerLogin();
  }

  const toogleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }



  const alerLogin = () => {
    Alert.alert(
      "Reforesta MX",
      "Inicio de Sesión",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: NavigateOptions }
      ]
    );
  }

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toogleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const NavigateAddUser = () => {
    navigate.navigate("Crear Cuenta");
  }

  const NavigateOptions = () => {
    navigate.navigate("Reforesta MX");
  }

  const getFormErrorMessage = (name) => {
    return errors[name] && <Text status='danger'>{errors[name].message}</Text>
  }

  return (
    <>
      <ScrollView>
        <View style={styles.view}>

          <Controller
            name="correo"
            control={control}
            rules={{
              required: true,
              pattern: {value: er, message:message}}}
            render={({ field: { onChange, onBlur, value }, fieldState }) => (
              <Input
                size='large'
                placeholder="Correo"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}

          />
          {errors.correo && <Text status='danger'>{message}</Text>}

          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                size='large'
                placeholder="Contraseña"
                secureTextEntry={secureTextEntry}
                accessoryRight={renderIcon}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && <Text status='danger'>La contraseña es requerida.</Text>}

          <View style={styles.button}>
            <Button onPress={handleSubmit(onSubmit)}>Iniciar Sesión</Button>
            <Button appearance="ghost" style={styles.button} onPress={NavigateAddUser}>Crear Cuenta</Button>
          </View>

        </View>


      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginTop: 15
  },
  button: {
    flex: 1,
    marginTop: 15,

  },
  view: {
    marginTop: 50,
    margin: 10
  }
})
export default Login;