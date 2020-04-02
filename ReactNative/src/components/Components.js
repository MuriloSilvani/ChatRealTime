import styled from 'styled-components';

export const HeaderBox = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginBottom: 15px;
    alignItems: center;
`;

export const HeaderBoxTitle = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    padding: 15px;
`;

export const HeaderBoxBack = styled.TouchableOpacity`
    padding: 15px;
`;


/////////////////////////////////

export const BoxChatMessageText = styled.Text`
    paddingHorizontal: 15px;
    paddingVertical: 10px;
    borderRadius: 10px;
    
    ${props => props.type === 'send' && `
        background: rgba(220,255,220,1);
        marginLeft: 10%;
        textAlign: right;
        borderTopRightRadius: 0;
    `}
    ${props => props.type === 'receive' && `
        background: rgba(220,220,255,1);
        marginRight: 10%;
        textAlign: left;
        borderTopLeftRadius: 0;
    `}
    ${props => props.load && `
        background: rgba(220,220,220,1);
    `}
`;

export const BoxChatMessage = styled.View`
    background: #fff;
    paddingTop: 15px;
    ${props => props.load && `
        paddingTop: 0px;
    `}
`;

export const BoxChat = styled.View`
    padding: 15px;
    flexGrow: 1;
    marginBottom: 15px;
    background: #fff;
    borderRadius: 5px;
    flex: 1;
    elevation: 1;
`;

/////////////////////////////////

export const FormChat = styled.View`
    borderRadius: 5px;
    width: 100%;
    flexDirection: row;
`;

export const InputChat = styled.TextInput`
    paddingHorizontal: 15px;
    paddingVertical: 10px;
    background: #fff;
    borderRadius: 5px;
    flex:1;
    elevation: 5;
`;

export const InputChatSend = styled.TouchableOpacity`
    width: 50px;
    background: #00ff00;
    borderRadius: 5px;
    justifyContent: center;
    alignItems: center;
    marginLeft: 15px;
    elevation: 5;
`;

/////////////////////////////////

export const Container = styled.View`
    padding: 15px;
    flex: 1;
    background: #f3f3f3;
    ${props => props.center && `
        alignItems: center;
        justifyContent: center;
    `}
`;

export const Button = styled.TouchableOpacity`
    paddingVertical: 10px;
    background: #ff00f0;
    width: 100%;
    alignItems: center;
    borderRadius: 5px;
`;

export const ButtonText = styled.Text`
    fontWeight: bold;
    color: #fff;
`;

export const Form = styled.View`
    paddingHorizontal: 25px;
    paddingVertical: 50px;
    background: #fff;
    elevation: 5;
    borderRadius: 5px;
    width: 80%;
`;

export const Input = styled.TextInput`
    paddingHorizontal: 15px;
    paddingVertical: 10px;
    background: #f3f3f3;
    borderRadius: 5px;
    width: 100%;
    marginBottom: 25px;
`;

export const InputTitle = styled.Text`
    paddingHorizontal: 15px;
    paddingBottom: 5px;
    fontWeight: bold;
    color: #000;
    width: 100%;
`;

export const Title = styled.Text`
    color: red;
`;


