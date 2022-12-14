import { RegisterContainer, RegisterTitle, RegisterFirtsParagraph, InputContainer, Input, IconContainer, ButtonCreate, ButtonContainer, AlertContainer, Alert, LoginContainer, Login, Span } from "./styles";
import { IoPerson } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';


const Register = () => {

    return(
        <RegisterContainer>
            <RegisterTitle>Comece agora grátis</RegisterTitle>
            <RegisterFirtsParagraph>Create your account and make your change.</RegisterFirtsParagraph>
            <form>
                <InputContainer>
                    <IconContainer><IoPerson/></IconContainer>
                    <Input placeholder="Nome Completo" type="text"></Input>
                </InputContainer>
                <InputContainer>
                    <IconContainer><MdEmail/></IconContainer>
                    <Input placeholder="E-mail" type="email" ></Input>
                </InputContainer>
                <InputContainer>
                    <IconContainer><RiLockPasswordFill/></IconContainer>
                    <Input placeholder="Password" type="password" ></Input>
                </InputContainer>
                <ButtonContainer>
                    <ButtonCreate>Criar minha conta</ButtonCreate>
                </ButtonContainer>
                <AlertContainer>
                    <Alert>
                        Ao clicar em "criar minha conta grátis", <br/>
                        declaro que aceito as Politicas de <br/>
                        Privacidade e os Termos de Uso da DIO.
                    </Alert>
                </AlertContainer>
                <LoginContainer>
                    <Login href="#">Já tenho uma conta. <Span>Fazer Login.</Span> </Login>
                </LoginContainer>
            </form>
        </RegisterContainer>
    )
}

export default Register;