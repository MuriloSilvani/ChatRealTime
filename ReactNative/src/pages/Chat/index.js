import React, { useState, useEffect } from 'react';

import { Text } from 'react-native';

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
} from '../../components/Components';

import { FlatList } from 'react-native-gesture-handler';

export default function Chat({ navigation }) {

    const [messages, setMessages] = useState([]);
    const [contador, setContador] = useState(0);
    const [loadingMessages, setLoadingMessages] = useState(false);

    useEffect(() => {
        loadMessages();
    }, []);

    async function loadMessages() {
        if (!loadingMessages) {
            setLoadingMessages(true);

            // ...
            let newMessage = [];
            for (let index = 0; index < 12; index++) {
                newMessage.push({ id: contador + index, message: `Mensagem ${contador + index}`, type: 'receive' });
                setContador(contador + index + 1);
            }

            setMessages([...messages, ...newMessage]);
            setLoadingMessages(false);
        }
    }

    async function sendMessages() {

        // ...
        setContador(contador + 1);
        let newMessage = { id: contador, message: `Mensagem ${contador}`, type: 'send' };


        setMessages([newMessage, ...messages]);
    }

    function handleLogout() {
        navigation.navigate('login')
    }

    return (
        <Container>

            <HeaderBox>
                <HeaderBoxTitle>
                    Logado como Murilo
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
                    onEndReached={loadMessages}
                    onEndReachedThreshold={0.2}
                    data={messages}
                    keyExtractor={message => String(message.id ? message.id : 0)}
                    inverted
                    renderItem={({ item: message }) => (
                        <BoxChatMessage key={message.id}>
                            <BoxChatMessageText type={message.type}>
                                {message.message}
                            </BoxChatMessageText>
                        </BoxChatMessage>
                    )}
                />
            </BoxChat>


            <FormChat>
                <InputChat
                    placeholder='Digite sua mensagem'
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
