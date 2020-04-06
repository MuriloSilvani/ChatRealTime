import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {
    Container,
    FormChat,
    InputChat,
    InputChatSend,

    BoxChat,
    BoxChatMessage,
    BoxChatMessageText,

    HeaderBox,
    HeaderBoxTitle,
    HeaderBoxBack,
} from '../../styles/Components';

import io from 'socket.io-client';

export default function Chat({ navigation, route }) {

    const [user, setUser] = useState(route.params.user);

    const [id_receive, setId_receive] = useState(route.params.userToTalk);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(false);

    useEffect(() => {
        loadMessages();
    }, []);

    async function loadMessages() {
        console.log('carregando mensagens');
        if (!loadingMessages) {
            setLoadingMessages(true);

            try {
                const response = await api.get(`/message/${user.id}/${id_receive}`);

                setMessages(response.data);
                // setMessages([...messages, ...response.data]);
            } catch (error) {

                console.log(error);
            }

            setLoadingMessages(false);
        }
    }

    async function sendMessages() {
        if (message !== '') {
            setMessage('');

            const response = await api.post('/message', {
                id_send: user.id,
                id_receive,
                message
            });


            setMessages([response.data, ...messages]);
        }
    }

    function handleLogout() {
        navigation.navigate('login');
    }

    useEffect(() => {
        const socket = io('http://192.168.0.18:3333', {
            query: { id_receive: user.id }
        });
        console.log(message.length);

        socket.on('message', socketMessage => {

            setMessages([...[socketMessage], ...messages]);
        });

    }, []);

    return (
        <Container>

            <HeaderBox>
                <HeaderBoxTitle>
                    Logado como {user && user.name}
                </HeaderBoxTitle>
                <HeaderBoxBack
                    onPress={handleLogout}
                >
                    <Text>back</Text>
                </HeaderBoxBack>
            </HeaderBox>

            <BoxChat>
                {
                    loadingMessages && (
                        <BoxChatMessage load>
                            <BoxChatMessageText load>Carregando mensagens</BoxChatMessageText>
                        </BoxChatMessage>
                    )
                }
                <FlatList
                    // onEndReached={loadMessages}
                    onEndReachedThreshold={0.2}
                    data={messages}
                    keyExtractor={message => String(message.id)}
                    inverted
                    renderItem={({ item: message }) => (
                        <BoxChatMessage key={message.id}>
                            <BoxChatMessageText type={message.id_send === user.id ? 'send' : 'receive'}>
                                {message.message}
                            </BoxChatMessageText>
                        </BoxChatMessage>
                    )}
                />
            </BoxChat>


            <FormChat>
                <InputChat
                    placeholder='Digite sua mensagem'
                    value={message}
                    onChangeText={setMessage}
                />
                <InputChatSend
                    onPress={sendMessages}
                >
                    <Text>Ok</Text>
                </InputChatSend>
            </FormChat>
        </Container>
    );
}
