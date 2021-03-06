import styled from 'styled-components'

export const MessageStyle = styled.div`
    width: 100%;
    float: left;
    padding: 10px;
    position: relative;

    &:before {
        content: '';
        width: 20px;
        height: 20px;
        float: left;
        position: absolute;
        left: 3px;
        bottom: 10px;
        background-color: ${props => props.theme.colors.messagesBackground};
        clip-path: polygon(50% 0, 0% 100%, 100% 100%);
        z-index: 1;
    }

    &:nth-of-type(1) {
        margin-top: auto;
    }

    &[data-sender="sent"] {
        &:before {
            left: inherit;
            right: 3px;
        }

        .message__item-content {
            float: right;
        }
    }

    .message__item-content {
        width: auto;
        float: left;
        max-width: 80%;
        border-radius: 12px;
        background-color: ${props => props.theme.colors.messagesBackground};
        padding: 10px;
        z-index: 2;
        position: relative;
    }

    .message__item-text {
        width: 100%;
        float: left;
    }
`
