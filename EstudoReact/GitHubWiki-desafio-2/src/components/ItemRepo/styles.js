import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.verRepositorio {
        color: #2f81f7;
        margin-top:20px;
    }

    button.remover {
        background-color: #FF0000;
        color: #FAFAFA;
        margin-top:5px;
        border-radius: 5px;
        border: none;
        padding: 5px 10px;
        &:hover {
            cursor: pointer;
            opacity: 0.9;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`