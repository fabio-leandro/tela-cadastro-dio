import styled from 'styled-components';

export const MenuContainer = styled.div`
    width: 40%;
    height: 50px;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const MenuTitulo = styled.h3`
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;

    &:hover{
        opacity: 70%;
    }

`

export const MenuButton = styled.button`
    width: 119px;
    height: 25px;
    margin-left: 1rem;
    border-radius: 15px;
    background-color: #565656;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: 70%;
    }

`

