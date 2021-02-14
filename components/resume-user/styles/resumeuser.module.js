import styled from 'styled-components'

const sizehandler = '45px'

export const Resumeuserstyle = styled.div`
    width: 100%;
    flex: 0 1 100%;
    border: none;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;

    .resume-user__content {
        width: auto;
        flex: 1 1 10em;
        max-width: 100%;
        border: none;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        overflow: hidden;
    }

    .resume-user__handler {
        width: ${sizehandler};
        height: ${sizehandler};
        flex: 0 1 ${sizehandler};
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${props => props.theme.font.sizes.large2x};
        color: ${props => props.theme.colors.text};
        opacity: 0.5;
        cursor: pointer;
    }

    .resume-user__handler:hover {
        color: #FFF;
    }

    .resume-user__handler[data-selected="true"] {
        color: green;

        span:before {
            font-weight: 900;
        }
    }

    .resume-user__handler:not([data-clickable="true"]):not([data-selected="true"]) {
        pointer-events: none;
        cursor: default;
    }

    .resume-user__avatar {
        width: ${sizehandler};
        height: ${sizehandler};
        flex: 0 1 ${sizehandler};
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }

    .resume-user__container{
        width: auto;
        flex: 1 1 10em;
        padding: 0;
        border: none;
        position: relative;
        margin-left: 15px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .resume-user__nickname {
        width: 100%;
        float: left;
        color: ${props => props.theme.colors.text};
        font-weight: ${props => props.theme.font.weight.strong};
        font-size: ${props => props.theme.font.sizes.large};
        line-height: 1.2;
    }

    .resume-user__text {
        width: 100%;
        float: left;
        font-size: ${props => props.theme.font.sizes.default};
        line-height: 1.2;
        color: ${props => props.theme.colors.text};
        opacity: 0.5;
        margin-top: 5px;
        text-overflow: ellipsis;
        max-width: 100%;
        white-space: nowrap;
        word-wrap: normal;
        overflow: hidden;
    }
`
