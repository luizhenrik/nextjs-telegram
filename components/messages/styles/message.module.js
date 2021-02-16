import styled from 'styled-components'

export const MessageStyle = styled.div`
    width: 100%;
    float: left;
    margin-top: 10px;

    &:nth-child(1) {
        margin-top: auto;
    }

    .message__item-content {
        width: auto;
        float: left;
        max-width: 80%;
        border-radius: 12px;
        background-color: rgba(0,0,0, 0.5);
        padding: 5px;
    }

    .message__item-text {
        width: 100%;
        float: left;
        font-size: 16px;
    }
`
