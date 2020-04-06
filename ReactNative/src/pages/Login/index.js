import React, { useState } from 'react';

import api from '../../services/api';

import {
    Container,
    Form,
    Input,
    InputTitle,
    Button,
    ButtonText,
} from '../../styles/Components';

import ThemeSwitch from '../../components/ThemeSwitch';

export default function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [userToTalk, setUserToTalk] = useState('');

    async function handleLogin() {
        try {

            const response = await api.post('/login', {
                login,
                password
            });
            navigation.navigate('chat', { user: response.data, userToTalk });
        } catch (error) {

            console.log(error);
        }
    }

    return (
        <Container center>

            <Form>

                <ThemeSwitch />

                <InputTitle>Login *</InputTitle>
                <Input
                    placeholder='Login'
                    value={login}
                    onChangeText={setLogin}
                />

                <InputTitle>Password *</InputTitle>
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <InputTitle>ID do usuarios que vai conversar *</InputTitle>
                <Input
                    placeholder='ID do usuarios que vai conversar'
                    keyboardType={'numeric'}
                    value={userToTalk}
                    onChangeText={setUserToTalk}
                />



                <Button onPress={handleLogin}>
                    <ButtonText> Entrar </ButtonText>
                </Button>


            </Form>

        </Container>
    );
}
