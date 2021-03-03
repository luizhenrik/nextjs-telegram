import styled from 'styled-components'

export const FormChatStyle = styled.div`
    .form-chat__field {
        width: 100%;
        float: left;
        background-color: rgba(0,0,0, 0.17);
        padding: 10px;
        font-size: 14px;
        line-height: 1.5;
        min-height: 40px;
        max-height: 70px;
        overflow: auto;
        resize: none;
        border: none;
        outline: none;
        color: ${props => props.theme.colors.text};
    }
`
