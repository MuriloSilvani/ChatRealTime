import React from 'react';

import {
    Container,
    Form,
    Input,
    InputTitle,
    Button,
    ButtonText,
} from '../../components/Components';

import { Text, View } from 'react-native';

export default function Login({ navigation }) {
    return (
        <Container center>

            <Form>


                <InputTitle>Login *</InputTitle>
                <Input
                    placeholder='Login'
                    value='murilo.silvani@gmail.com'
                />

                <InputTitle>Password *</InputTitle>
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    value='123'
                />

                <Button onPress={
                    () => {
                        navigation.navigate('chat')
                    }
                }>
                    <ButtonText> Entrar </ButtonText>
                </Button>


            </Form>

        </Container>
    );
}
